import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProductsInCart } = useContext(CartContext);

  return (
    <>
      <FaShoppingCart />
      {totalProductsInCart > 0 && <span>{totalProductsInCart}</span>}
    </>
  );
};

export default CartWidget;
