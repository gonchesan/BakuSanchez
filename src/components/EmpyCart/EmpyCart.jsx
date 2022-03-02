import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import lottie from "lottie-web";
import { ButtonOutline, Container } from "../../globalStyle";
import { EmpyCartWrapper, Illustration } from "./EmptyCart.elements";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const EmpyCart = () => {
  const cartContainer = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    lottie.loadAnimation({
      container: cartContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/lotties/lf30_editor_aomagk8m.json"),
    });
  }, []);

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <Container>
      <EmpyCartWrapper>
        <Illustration ref={cartContainer} />
        <h4>Oops! Your cart is empty!</h4>
        <p>Looks like you haven't added anything to your cart yet</p>
        <ButtonOutline secondary onClick={navigateToShop}>
          <MdOutlineKeyboardBackspace /> Shop now
        </ButtonOutline>
      </EmpyCartWrapper>
    </Container>
  );
};

export default EmpyCart;
