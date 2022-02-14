import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

//Components
import SelectShipping from "../../components/SelectShipping/SelectShipping";

//Styled Components
import {
  AlertPromo,
  CheckoutInfo,
  CheckoutSubtitle,
  CheckoutTitle,
  InputCode,
  SummaryButton,
  WrapperSummaryInfo,
} from "./OrderSummary.elements";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContext } from "../../context/ToastContext";

const OrderSummary = () => {
  const { cart, subTotalPrice, totalPrice, clear } = useContext(CartContext);

  const [promoCodeError, setPromoCodeError] = useState(true);
  const [promoAlert, setPromoAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [shippingCost, setShippingCost] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [indexArray, setIndexArray] = useState();

  const totalPriceReference = useRef(null);

  const { setToastVisibility, setToastMessage } = useContext(ToastContext);

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

  const numberFormat = new Intl.NumberFormat("en-US");

  const handleInputBuyer = (event) => {
    setBuyerInfo({ ...buyerInfo, [event.target.name]: event.target.value });
  };

  const submitForm = () => {
    let today = new Date().toLocaleString("en-GB");
    let order = {
      buyer: { buyerInfo },
      items: cart,
      total: Number(totalPriceReference.current.innerText),
      date: today,
    };
    addDoc(collection(db, "orders"), order)
      .then((doc) => {
        let textToast = `${buyerInfo.name}, your purchase order has been carried out successfully. Your purchase ID is: ${doc.id}. `;
        setToastMessage(textToast);
        navigate("/");
        setToastVisibility(true);
        clear();
      })
      .catch((err) => console.log("Something is wrong: ", err));
  };

  return (
    <CheckoutInfo>
      <CheckoutTitle>Order summary</CheckoutTitle>
      <WrapperSummaryInfo>
        <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
        <CheckoutSubtitle>
          {numberFormat.format(subTotalPrice)}
        </CheckoutSubtitle>
      </WrapperSummaryInfo>
      <WrapperSummaryInfo>
        <CheckoutSubtitle>Name</CheckoutSubtitle>
        <InputCode
          onChange={handleInputBuyer}
          name="name"
          value={buyerInfo.name}
        />
      </WrapperSummaryInfo>
      <WrapperSummaryInfo>
        <CheckoutSubtitle>Email</CheckoutSubtitle>
        <InputCode
          onChange={handleInputBuyer}
          name="email"
          value={buyerInfo.email}
        />
      </WrapperSummaryInfo>
      <WrapperSummaryInfo>
        <CheckoutSubtitle>Phone</CheckoutSubtitle>
        <InputCode
          onChange={handleInputBuyer}
          name="phone"
          value={buyerInfo.phone}
        />
      </WrapperSummaryInfo>
      <WrapperSummaryInfo>
        <CheckoutSubtitle>Shipping</CheckoutSubtitle>
        <SelectShipping
          isVisible={isVisible}
          setIsVisible={setIsVisible}
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
        <CheckoutSubtitle ref={totalPriceReference}>
          {/* $<small>US </small> */}
          {!promoCodeError
            ? numberFormat.format(
                totalPrice - (totalPrice * 15) / 100 + shippingCost
              )
            : numberFormat.format(totalPrice + shippingCost)}
        </CheckoutSubtitle>
      </WrapperSummaryInfo>
      <SummaryButton onClick={submitForm}>Checkout</SummaryButton>
    </CheckoutInfo>
  );
};

export default OrderSummary;
