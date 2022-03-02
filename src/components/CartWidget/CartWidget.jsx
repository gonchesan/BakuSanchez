import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

//Icons
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { calculateTotalItem, cart } = useContext(CartContext);

  let navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <FaShoppingCart onClick={goToCart} />
      {cart.length > 0 && <span>{calculateTotalItem()}</span>}
    </>
  );
};

export default CartWidget;
