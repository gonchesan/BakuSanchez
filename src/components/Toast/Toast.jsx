import React, { useContext } from "react";
import {
  BackgroundIcon,
  ButtonClose,
  ToastBody,
  ToastWrapper,
} from "./Toast.elements";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { ToastContext } from "../../context/ToastContext";
const Toast = () => {
  const { toastVisibility, setToastVisibility, toastMessage } =
    useContext(ToastContext);
  const hideToast = () => {
    setToastVisibility(false);
  };

  return (
    <ToastWrapper visible={toastVisibility}>
      <BackgroundIcon>
        <IoIosCheckmarkCircle />
      </BackgroundIcon>

      <ToastBody dangerouslySetInnerHTML={{ __html: toastMessage }} />
      <ButtonClose onClick={hideToast} type="button">
        <span aria-hidden="true">&times;</span>
      </ButtonClose>
    </ToastWrapper>
  );
};

export default Toast;
