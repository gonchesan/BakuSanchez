import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export const handleSlider = (indexPicture, setIndexPicture, reference) => {
  if (reference.current.name === "+") {
    setIndexPicture(indexPicture + 1);
    if (indexPicture >= 4) {
      setIndexPicture(0);
    }
  } else {
    setIndexPicture(indexPicture - 1);
    if (indexPicture <= 0) {
      setIndexPicture(4);
    }
  }
};

export const handleCountingClick = (
  count,
  setCount,
  stock,
  initial,
  reference,
  setItemsCart,
  numberIndex,
  product
) => {
  if (reference.current.name === "add") {
    if (count < stock) {
      setCount(count + 1);
      if (numberIndex !== undefined) {
        setItemsCart(numberIndex, product, count + 1);
      }
    }
  } else {
    if (count > initial) {
      setCount(count - 1);
      if (numberIndex !== undefined) {
        setItemsCart(numberIndex, product, count - 1);
      }
    }
  }
};

export const generateOrder = (
  buyerInfo,
  cart,
  totalPrice,
  setToastMessage,
  clear,
  navigate,
  setToastVisibility
) => {
  let order = {
    buyer: { ...buyerInfo },
    items: cart,
    total: Number(totalPrice),
    date: Timestamp.fromDate(new Date()),
  };
  addDoc(collection(db, "orders"), order)
    .then((doc) => {
      let textToast = `<b>${buyerInfo.name}</b>, your purchase order has been carried out successfully. Your purchase ID is: <b>${doc.id}.</b> `;
      setToastMessage(textToast);
      setToastVisibility(true);
      navigate("/");
      clear();
    })
    .catch((err) => console.log("Something is wrong: ", err));
};
