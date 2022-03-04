import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short.")
    .max(25, "The name is too long.")
    .required("A full name is required."),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid.")
    .required("A phone number is required."),
  email: Yup.string().email("Invalid email.").required("An email is required."),
  shippingCost: Yup.string().required("Shipping way is required!"),
});
