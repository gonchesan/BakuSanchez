import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import {
  AlertPromo,
  CheckoutInfo,
  CheckoutSubtitle,
  CheckoutTitle,
  InputCode,
  SummaryButton,
  WrapperSummaryInfo,
} from "./OrderSummary.elements";

import { CartContext } from "../../context/CartContext";
import { ToastContext } from "../../context/ToastContext";
import { shippingChoice } from "../../utils/information";
import { generateOrder } from "../../utils/functions";
import SelectShipping from "../../components/SelectShipping/SelectShipping";
import OrderForm from "../OrderForm";

const OrderSummary = () => {
  const { cart, clear, calculateTotalPrice } = useContext(CartContext);

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
  const [indexArray, setIndexArray] = useState(-1);

  const [getErrors, setGetErrors] = useState({});

  const totalPriceReference = useRef(null);

  const { setToastVisibility, setToastMessage } = useContext(ToastContext);

  const [isLoading, setIsLoading] = useOutletContext();

  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
    setShippingCost(shippingChoice[indexArray]);
  }, [indexArray, setIsLoading]);

  const handleInput = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    setPromoAlert(true);
    if (promoCode === "030355556") {
      setPromoCodeError(false);
    }
  };
  //!                                   BORRAR ESTE CONSOLE LOG
  console.log(getErrors);
  const numberFormat = new Intl.NumberFormat("en-US");

  const handleInputBuyer = (event) => {
    setBuyerInfo({ ...buyerInfo, [event.target.name]: event.target.value });
  };

  return (
    <CheckoutInfo>
      {!isLoading ? (
        <>
          <CheckoutTitle>Order summary</CheckoutTitle>

          <WrapperSummaryInfo>
            <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
            <CheckoutSubtitle>
              {numberFormat.format(calculateTotalPrice())}
            </CheckoutSubtitle>
          </WrapperSummaryInfo>
          <OrderForm setGetErrors={setGetErrors} />
          {/* </WrapperSummaryInfo>
          {arrayInputs.map((element, index) => {
            return (
              <WrapperSummaryInfo key={index}>
                <CheckoutSubtitle>{element.subtitle}</CheckoutSubtitle>
                <InputCode
                  onChange={handleInputBuyer}
                  name={element.name}
                  value={buyerInfo[element.name]}
                />
              </WrapperSummaryInfo>
            );
          })}
          <WrapperSummaryInfo>
            <CheckoutSubtitle>Shipping</CheckoutSubtitle>
            <SelectShipping
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              indexArray={indexArray}
              setIndexArray={setIndexArray}
            />
          </WrapperSummaryInfo>
*/}
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
              {numberFormat.format(
                calculateTotalPrice(shippingCost, promoCodeError)
              )}
            </CheckoutSubtitle>
          </WrapperSummaryInfo>
          <SummaryButton
            onClick={() =>
              generateOrder(
                buyerInfo,
                cart,
                totalPriceReference,
                setToastMessage,
                clear,
                navigate,
                setToastVisibility
              )
            }
          >
            Checkout
          </SummaryButton>
        </>
      ) : null}
    </CheckoutInfo>
  );
};

export default OrderSummary;
