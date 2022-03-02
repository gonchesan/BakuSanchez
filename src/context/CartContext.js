import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
  }; // Remove all the items from the cart

  const isInCart = (id) => cart.some((e) => e.item.id === id); // Return result || false

  const setItemsCart = (numberIndex, product, count) => {
    let newCart = [...cart];
    newCart[numberIndex] = { item: product, quantity: count };
    setCart(newCart);
  };

  const calculateSubTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateTotalPrice = (shippingCost, promoCodeError) => {
    let total = Number(
      cart.reduce(
        (acc, element) => acc + element.item.price * element.quantity,
        0
      )
    );
    if (shippingCost !== undefined && promoCodeError !== undefined) {
      if (!promoCodeError) {
        return total - (total * 15) / 100 + shippingCost;
      } else {
        return total + shippingCost;
      }
    } else {
      return total;
    }
  };

  const calculateTotalItem = () => {
    return Number(cart.reduce((acc, item) => acc + item.quantity, 0));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        isInCart,
        clear,
        removeItem,
        setItemsCart,
        calculateTotalPrice,
        calculateSubTotal,
        calculateTotalItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
