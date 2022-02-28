import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getAllProducts = async () => {
  const query = collection(db, "products");
  const docSnap = await getDocs(query);

  let newState = [];
  docSnap.forEach((doc) => {
    newState.push({ ...doc.data(), id: doc.id });
  });
  return newState;
};

// I manage the items to show, depending on the route
export const handleProductsBestSeller = (products) => {
  let newState = [];
  if (products.length) {
    products.forEach((product) => {
      if (product.bestSeller === true) {
        newState.push(product);
      }
    });

    return newState;
  }
};
// I manage the items to show, depending on the route
export const handleProductsCategory = (products, category) => {
  let newState = [];
  products.forEach((product) => {
    if (product.category === category) {
      newState.push(product);
    }
  });

  return newState;
};

//! Deprecated method.
// I make a single request to the api and save the data in a context variable.
// export const getItem = async (id) => {
//   const docRef = doc(db, "products", id);
//   const docSnap = await getDoc(docRef);
//   let result = { ...docSnap.data(), id: docSnap.id };

//   return result;
// };

//! Deprecated method.
// I make a single request to the api and save the data in a context variable.
// export const getProductsByCategory = async (category) => {
//   const docsRef = collection(db, "products");
//   const q = query(docsRef, where("category", "==", category));
//   let newState = [];

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     newState.push({ ...doc.data(), id: doc.id });
//   });

//   return newState;
// };
//! Deprecated method.
// I make a single request to the api and save the data in a context variable.
// export const getBestSeller = async () => {
//   const docsRef = collection(db, "products");
//   const q = query(docsRef, where("bestSeller", "==", true));
//   let newState = [];

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     newState.push({ ...doc.data(), id: doc.id });
//   });

//   return newState;
// };

//! Deprecated method.
// I make a single request to the api and save the data in a context variable.

// export const getAllCategories = async () => {
//   const query = collection(db, "categories");
//   const docSnap = await getDocs(query);

//   let newState = [];
//   docSnap.forEach((doc) => {
//     newState.push({ ...doc.data(), id: doc.id });
//   });

//   return newState;
// };
