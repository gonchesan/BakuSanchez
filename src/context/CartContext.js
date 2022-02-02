import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setProducts([...products, { item, quantity }]);
    }
  }; // Add a product with  his quantity if it is not in the cart

  const removeItem = (itemId) => {
    const newArray = products.filter((result) => result.item.id !== itemId);
    setProducts(newArray);
  }; // Remove an item from the cart by Id

  const clear = () => {
    setProducts([]);
    setTotalProductsInCart(0);
  }; // Remove all the items from the cart

  const isInCart = (id) => {
    return products.find((result) => result.item.id === id) || false;
  }; // Return result || false

  useEffect(() => {
    if (products.length > 1) {
      let arrayQuantity = products.map((product) => product.quantity);
      const sum = arrayQuantity.reduce((x, y) => x + y);
      setTotalProductsInCart(sum);
    } else if (products.length === 1) {
      setTotalProductsInCart(products[0].quantity);
    } else {
      setTotalProductsInCart(0);
    }
    console.log(products);
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
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
