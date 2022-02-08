import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { item, quantity }]);
    }
  }; // Add a product with  his quantity if it is not in the cart

  const removeItem = (itemId) => {
    const newArray = cart.filter((result) => result.item.id !== itemId);
    setCart(newArray);
  }; // Remove an item from the cart by Id

  const clear = () => {
    setCart([]);
    setTotalProductsInCart(0);
  }; // Remove all the items from the cart

  const isInCart = (id) => cart.find((item) => item.id === id || false); // Return result || false
  function truncameFloat(str) {
    str = str.toString();
    str = str.slice(0, str.indexOf(".") + 3);
    return Number(str);
  }

  useEffect(() => {
    if (cart.length > 1) {
      let arrayQuantity = cart.map((product) => product.quantity);
      const sum = arrayQuantity.reduce((x, y) => x + y);
      setTotalProductsInCart(sum);
      let arraySubTotal = cart.map((product) =>
        truncameFloat(product.item.price * product.quantity)
      );
      const sumSubTotal = arraySubTotal.reduce((x, y) => x + y);
      setSubTotalPrice(sumSubTotal);
      setTotalPrice(sumSubTotal);
    } else if (cart.length === 1) {
      setTotalProductsInCart(cart[0].quantity);
      setSubTotalPrice(truncameFloat(cart[0].item.price * cart[0].quantity));
      setTotalPrice(truncameFloat(cart[0].item.price * cart[0].quantity));
    } else {
      setTotalProductsInCart(0);
      setSubTotalPrice(0);
      setTotalPrice(0);
    }

    console.log("Cart:", cart);

    console.log("SubTotal:", subTotalPrice);
    console.log("Total:", totalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        clear,
        totalProductsInCart,
        removeItem,
        subTotalPrice,
        setSubTotalPrice,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
