import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id) === false) {
      setCart([...cart, { item, quantity }]);
      // Add a product with  his quantity if it is not in the cart
    } else {
      //If it's in the cart, add the quantity to the item. <>

      let getProduct = cart.find((result) => result.item.id === item.id);
      let newQty = getProduct.quantity + quantity;
      const newArray = cart.filter((result) => result.item.id !== item.id);
      let newProduct;

      cart.forEach((element) => {
        if (element.item.id === item.id) {
          element.quantity = newQty;
          newProduct = element;
          return newProduct;
        }
      });
      setCart([...newArray, newProduct]);

      //</>
    }
  };
  const removeItem = (itemId) => {
    const newArray = cart.filter((result) => result.item.id !== itemId);
    setCart(newArray);
  }; // Remove an item from the cart by Id

  const clear = () => {
    setCart([]);
    setTotalProductsInCart(0);
  }; // Remove all the items from the cart

  const isInCart = (id) => cart.some((e) => e.item.id === id); // Return result || false

  const setItemsCart = (numberIndex, product, count) => {
    let newCart = [...cart];
    newCart[numberIndex] = { item: product, quantity: count };
    setCart(newCart);
  };

  useEffect(() => {
    if (cart.length > 1) {
      let arrayQuantity = cart.map((product) => product.quantity);
      const sum = arrayQuantity.reduce((x, y) => x + y);
      setTotalProductsInCart(sum);
      let arraySubTotal = cart.map(
        (product) => product.item.price * product.quantity
      );
      let sumSubTotal = arraySubTotal.reduce((x, y) => x + y);
      setSubTotalPrice(sumSubTotal);
      setTotalPrice(sumSubTotal);
    } else if (cart.length === 1) {
      setTotalProductsInCart(cart[0].quantity);
      setSubTotalPrice(cart[0].item.price * cart[0].quantity);
      setTotalPrice(cart[0].item.price * cart[0].quantity);
    } else {
      setTotalProductsInCart(0);
      setSubTotalPrice(0);
      setTotalPrice(0);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        isInCart,
        clear,
        totalProductsInCart,
        removeItem,
        subTotalPrice,
        setSubTotalPrice,
        totalPrice,
        setTotalPrice,
        setItemsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
