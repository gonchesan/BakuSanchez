import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export const getAllProducts = async () => {
  // return fetch("https://baku-api.herokuapp.com/products").then((response) =>
  //   response.json()
  // ); //! Deprecated method, do not use

  const query = collection(db, "products");
  const docSnap = await getDocs(query);

  let newState = [];
  docSnap.forEach((doc) => {
    newState.push({ ...doc.data(), id: doc.id });
  });

  return newState;
};

export const getItem = (id) => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) => products.find((product) => product.id === id));
};

export const getProductsByCategory = (category) => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.category === category)
    );
};

export const getBestSeller = () => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.bestSeller === true)
    );
};
