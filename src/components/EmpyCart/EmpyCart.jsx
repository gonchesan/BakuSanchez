import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button, ButtonOutline, Container } from "../../globalStyle";
import { EmpyCartWrapper, Illustration } from "./EmptyCart.elements";

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
