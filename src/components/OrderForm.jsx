import { useRef } from "react";
import { Formik, Field } from "formik";

import * as Yup from "yup";
import {
  CheckoutSubtitle,
  StyledField,
  WrapperSummaryInfo,
  StyledForm,
  AlertPromo,
} from "./OrderSummary/OrderSummary.elements";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape(
  {
    name: Yup.string()
      .min(2, "The name is too short.")
      .max(25, "The name is too long.")
      .required("A full name is required."),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid.")
      .required("A phone number is required."),
    email: Yup.string()
      .email("Invalid email.")
      .required("An email is required."),
    shippingCost: Yup.string().required("Shipping way is required!"),
  }
  //   .matches("030355556", "Promo code error")
);

const OrderForm = ({ setGetErrors, setBuyerInfo, setIndexArray }) => {
  const arrayInputs = [
    { subtitle: "Name", name: "name", type: "text" },
    { subtitle: "Email", name: "email", type: "text" },
    { subtitle: "Phone", name: "phone", type: "tel" },
  ];
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
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          setTimeout(() => {
            setBuyerInfo({
              name: values.name,
              phone: values.phone,
              email: values.email,
            });
            resetForm();
            //!                                   RETORNAR VALORES
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm onChange={someFuncton}>
            {arrayInputs.map((element, index) => {
              return (
                <WrapperSummaryInfo key={index}>
                  <CheckoutSubtitle>{element.subtitle}</CheckoutSubtitle>
                  <StyledField name={element.name} type={element.type} />
                  {errors[element.name] && touched[element.name] ? (
                    <AlertPromo showAlert error>
                      {errors[element.name]}
                    </AlertPromo>
                  ) : null}
                </WrapperSummaryInfo>
              );
            })}

            <WrapperSummaryInfo>
              <CheckoutSubtitle>Shipping</CheckoutSubtitle>

              <Field as="select" name="shippingCost" innerRef={ref}>
                <option value="" label="Select an option" />
                <option value="0">Standard Delivery - $us 50</option>
                <option value="1">Same Day Delivery - $us 100</option>
                <option value="2">Overnight Shipping - $us 175</option>
                <option value="3">Express Delivery - $us 200</option>
              </Field>

              {errors.shippingCost && touched.shippingCost ? (
                <AlertPromo showAlert error>
                  {errors.shippingCost}
                </AlertPromo>
              ) : null}
            </WrapperSummaryInfo>

            <button onClick={() => setGetErrors(errors)}>Submit</button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default OrderForm;
