import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

//Components
import ItemCart from "../../components/ItemCart/ItemCart";
import SelectShipping from "../../components/SelectShipping/SelectShipping";
import EmpyCart from "../../components/EmpyCart/EmpyCart";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

//Styled Components
import { ButtonLink, ButtonOutline, Container } from "../../globalStyle";
import { CartContext } from "../../context/CartContext";
import {
  AlertPromo,
  CheckoutInfo,
  CheckoutSubtitle,
  CheckoutTitle,
  ContainerCartItem,
  HeaderListCart,
  InputCode,
  ItemListCart,
  SummaryButton,
  WrapperCart,
  WrapperSummaryInfo,
} from "./CartContainer.elements";

//Icons
import {
  MdOutlineKeyboardBackspace,
  MdRemoveShoppingCart,
} from "react-icons/md";

const CartContainer = () => {
  const { cart, subTotalPrice, totalPrice, setTotalPrice, clear } =
    useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeError, setPromoCodeError] = useState(true);
  const [promoAlert, setPromoAlert] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [indexArray, setIndexArray] = useState();
  const [shippingCost, setShippingCost] = useState(0);

  const [isLoading, setIsLoading] = useOutletContext();

  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
    switch (indexArray) {
      case 0:
        setShippingCost(50);
        break;
      case 1:
        setShippingCost(100);
        break;
      case 2:
        setShippingCost(175);
        break;
      case 3:
        setShippingCost(200);
        break;
    }
  }, [indexArray]);

  const handleInput = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    setPromoAlert(true);
    if (promoCode === "030355556") {
      setPromoCodeError(false);
    }
  };

  const navigateToShop = () => {
    navigate("/shop");
  };

  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <Container>
      {cart.length === 0 ? (
        <EmpyCart />
      ) : (
        <>
          <Breadcrumb />
          <WrapperCart>
            <ItemListCart>
              <ButtonOutline secondary small onClick={clear}>
                <MdRemoveShoppingCart />
                Clear cart
              </ButtonOutline>
              <HeaderListCart>
                <p>Product detail</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Total price</p>
              </HeaderListCart>
              <ContainerCartItem>
                {cart.map((product, numberIndex) => {
                  return (
                    <ItemCart
                      key={product.item.id}
                      numberIndex={numberIndex}
                      product={product.item}
                      quantity={product.quantity}
                    />
                  );
                })}
              </ContainerCartItem>
              <ButtonLink onClick={navigateToShop}>
                <MdOutlineKeyboardBackspace /> Continue shopping
              </ButtonLink>
            </ItemListCart>
            <CheckoutInfo>
              <CheckoutTitle>Order summary</CheckoutTitle>
              <WrapperSummaryInfo>
                <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
                <CheckoutSubtitle>
                  $<small>US </small>
                  {numberFormat.format(subTotalPrice)}
                </CheckoutSubtitle>
              </WrapperSummaryInfo>
              <WrapperSummaryInfo>
                <CheckoutSubtitle>Shipping</CheckoutSubtitle>
                <SelectShipping
                  isVisible={isVisible}
                  setisVisible={setisVisible}
                  indexArray={indexArray}
                  setIndexArray={setIndexArray}
                />
              </WrapperSummaryInfo>

              <WrapperSummaryInfo>
                <CheckoutSubtitle>Promo code</CheckoutSubtitle>
                <WrapperSummaryInfo flexStart>
                  <InputCode value={promoCode} onChange={handleInput} />
                  <SummaryButton small onClick={checkPromoCode}>
                    Apply
                  </SummaryButton>
                </WrapperSummaryInfo>
                <AlertPromo showAlert={promoAlert} error={promoCodeError}>
                  {promoCodeError
                    ? "Promotional code not found"
                    : "Promotional code applied! - 15% Applied"}
                </AlertPromo>
              </WrapperSummaryInfo>

              <WrapperSummaryInfo>
                <CheckoutSubtitle>Total cost</CheckoutSubtitle>
                <CheckoutSubtitle>
                  $<small>US </small>
                  {!promoCodeError
                    ? numberFormat.format(
                        totalPrice - (totalPrice * 15) / 100 + shippingCost
                      )
                    : numberFormat.format(totalPrice + shippingCost)}
                </CheckoutSubtitle>
              </WrapperSummaryInfo>
              <SummaryButton>Checkout</SummaryButton>
            </CheckoutInfo>
          </WrapperCart>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
