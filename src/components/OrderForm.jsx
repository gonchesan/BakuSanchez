import { useRef, useContext } from "react";

import { Formik, Field } from "formik";
import {
  CheckoutSubtitle,
  StyledField,
  WrapperSummaryInfo,
  StyledForm,
  AlertPromo,
  SummaryButton,
  InputCode,
} from "./OrderSummary/OrderSummary.elements";

import { generateOrder } from "../utils/functions";
import { ToastContext } from "../context/ToastContext";
import { CartContext } from "../context/CartContext";
import { formSchema } from "../utils/schema";
import { arrayInputsSummary, arrayOptionsSummary } from "../utils/arraysInfo";

const OrderForm = ({
  setIndexArray,
  promoCode,
  handleInput,
  checkPromoCode,
  promoAlert,
  promoCodeError,
  totalPriceReference,
  numberFormat,
  shippingCost,
  navigate,
}) => {
  const { setToastVisibility, setToastMessage } = useContext(ToastContext);
  const { cart, clear, calculateTotalPrice } = useContext(CartContext);

  const ref = useRef(null);

  const someFuncton = () => setIndexArray(ref.current.value);
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          shippingCost: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            const buyerInfo = {
              name: values.name,
              phone: values.phone,
              email: values.email,
            };

            generateOrder(
              buyerInfo,
              cart,
              totalPriceReference.current.innerText,
              setToastMessage,
              clear,
              navigate,
              setToastVisibility
            );
            resetForm();
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm onChange={someFuncton}>
            {arrayInputsSummary.map((element, index) => {
              const { subtitle, name, type } = element;
              return (
                <WrapperSummaryInfo key={index}>
                  <CheckoutSubtitle>{subtitle}</CheckoutSubtitle>
                  <StyledField name={name} type={type} />
                  {errors[name] && touched[name] ? (
                    <AlertPromo showAlert error>
                      {errors[name]}
                    </AlertPromo>
                  ) : null}
                </WrapperSummaryInfo>
              );
            })}

            <WrapperSummaryInfo>
              <CheckoutSubtitle>Shipping</CheckoutSubtitle>
              <Field as="select" name="shippingCost" innerRef={ref}>
                {arrayOptionsSummary.map((element, index) => {
                  const { value, label } = element;
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  );
                })}
              </Field>
              {errors.shippingCost && touched.shippingCost ? (
                <AlertPromo showAlert error>
                  {errors.shippingCost}
                </AlertPromo>
              ) : null}
            </WrapperSummaryInfo>

            <WrapperSummaryInfo>
              <CheckoutSubtitle>Promo code</CheckoutSubtitle>
              <WrapperSummaryInfo flexStart>
                <InputCode value={promoCode} onChange={handleInput} />
                <SummaryButton type="button" small onClick={checkPromoCode}>
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

            <SummaryButton type="submit">Checkout</SummaryButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default OrderForm;
