import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getBanners = async () => {
  const query = collection(db, "infoPage");
  const docSnap = await getDocs(query);

  let newState = [];

  docSnap.forEach((doc) => {
    newState.push(doc.data().banners);
  });
  return newState;
};
//! Deprecated method
// export const getBanners = () => {
//   return fetch("https://baku-api.herokuapp.com/infoPage").then((response) =>
//     response
//       .json()
//       .then((data) => data[1])
//       .then((result) => result.banners)
//   );
// };

export const getCollectionPictures = async () => {
  const query = collection(db, "infoPage");
  const docSnap = await getDocs(query);

  let newState = [];

  docSnap.forEach((doc) => {
    newState.push(doc.data().collectionPictures);
  });
  return newState;
};

//! Deprecated method
// export const getCollectionPictures = () => {
//   return fetch("https://baku-api.herokuapp.com/infoPage").then((response) =>
//     response
//       .json()
//       .then((data) => data[0])
//       .then((result) => result.collectionPictures)
//   );
// };

// TODO                CAMBIAR este info y ver si puedo agregar la seccion About us
export const getAboutUstInfo = () => {
  return fetch("https://baku-api.herokuapp.com/infoPage").then((response) =>
    response
      .json()
      .then((data) => data[2])
      .then((result) => result.aboutUs)
  );
};

export const shippingChoice = {
  "-1": 0,
  0: 50,
  1: 100,
  2: 175,
  3: 200,
};
