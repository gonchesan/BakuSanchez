import React, { useContext, useState } from "react";
import {
  BackgroundIcon,
  ButtonClose,
  ToastBody,
  ToastHeader,
  ToastWrapper,
} from "./Toast.elements";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { ToastContext } from "../../context/ToastContext";
const Toast = () => {
  const { toastVisibility, setToastVisibility, toastMessage, setToastMessage } =
    useContext(ToastContext);
  const hideToast = () => {
    setToastVisibility(false);
  };

  return (
    <ToastWrapper visible={toastVisibility}>
      <BackgroundIcon>
        <IoIosCheckmarkCircle />
      </BackgroundIcon>
      {/* <div> */}
      {/* <ToastHeader>
          <strong>Success</strong>
        </ToastHeader> */}
      <ToastBody>{toastMessage}</ToastBody>
      {/* </div> */}
      <ButtonClose onClick={hideToast} type="button">
        <span aria-hidden="true">&times;</span>
      </ButtonClose>
    </ToastWrapper>
  );
};

export default Toast;
