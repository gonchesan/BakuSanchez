import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastVisibility, setToastVisibility] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <ToastContext.Provider
      value={{
        toastVisibility,
        setToastVisibility,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
