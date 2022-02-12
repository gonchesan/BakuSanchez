import {
  collection,
  getDocs,
  getDoc,
  where,
  doc,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

export const getAllProducts = async () => {
  const query = collection(db, "products");
  const docSnap = await getDocs(query);

  let newState = [];
  docSnap.forEach((doc) => {
    newState.push({ ...doc.data(), id: doc.id });
  });
  return newState;

  //! Deprecated method, do not use
  // return fetch("https://baku-api.herokuapp.com/products").then((response) =>
  //   response.json()
  // );
};

export const getItem = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  let result = { ...docSnap.data(), id: docSnap.id };
  return result;

  //! Deprecated method, do not use
  // return fetch("https://baku-api.herokuapp.com/products")
  //   .then((response) => response.json())
  //   .then((products) => products.find((product) => product.id === id));
};

export const getProductsByCategory = async (category) => {
  const docsRef = collection(db, "products");
  const q = query(docsRef, where("category", "==", category));
  let newState = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    newState.push({ ...doc.data(), id: doc.id });
  });
  return newState;

  //! Deprecated method, do not use
  // return fetch("https://baku-api.herokuapp.com/products")
  //   .then((response) => response.json())
  //   .then((products) =>
  //     products.filter((product) => product.category === category)
  //   );
};

export const getBestSeller = () => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.bestSeller === true)
    );
};

export const getAllCategories = async () => {
  const query = collection(db, "categories");
  const docSnap = await getDocs(query);

  let newState = [];
  docSnap.forEach((doc) => {
    newState.push({ ...doc.data(), id: doc.id });
  });
  return newState;
};
