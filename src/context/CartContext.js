import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);

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

  const isInCart = (id) => cart.find((item) => item.id === id); // Return result || false

  useEffect(() => {
    if (cart.length > 1) {
      let arrayQuantity = cart.map((product) => product.quantity);
      const sum = arrayQuantity.reduce((x, y) => x + y);
      setTotalProductsInCart(sum);
    } else if (cart.length === 1) {
      setTotalProductsInCart(cart[0].quantity);
    } else {
      setTotalProductsInCart(0);
    }
    console.log(cart);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
