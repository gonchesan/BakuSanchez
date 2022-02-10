import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

//Icons
import { FaShoppingCart } from "react-icons/fa";

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
