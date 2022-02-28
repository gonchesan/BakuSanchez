import { createContext, useEffect, useState } from "react";
import { getBanners, getCollectionPictures } from "../utils/information";
import { getAllProducts } from "../utils/products";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productsFromDatabase, setProductsFromDatabase] = useState([]);
  const [bannersFromDatabase, setBannersFromDatabase] = useState([]);
  const [collectionPicturesFromDatabase, setCollectionPicturesFromDatabase] =
    useState([]);

  useEffect(() => {
    Promise.all([getAllProducts(), getBanners(), getCollectionPictures()]).then(
      (values) => {
        setProductsFromDatabase(values[0]);
        setBannersFromDatabase(values[1][0]);
        setCollectionPicturesFromDatabase(values[2][0]);
      },
      (err) => {
        console.log(`Something is wrong with: ${err}`);
      }
    );
  }, []);
  return (
    <DataContext.Provider
      value={{
        productsFromDatabase,
        bannersFromDatabase,
        collectionPicturesFromDatabase,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
