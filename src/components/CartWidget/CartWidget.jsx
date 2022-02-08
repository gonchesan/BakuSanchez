import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProductsInCart } = useContext(CartContext);

  let navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <FaShoppingCart onClick={goToCart} />
      {totalProductsInCart > 0 && <span>{totalProductsInCart}</span>}
    </>
  );
};

export default CartWidget;
