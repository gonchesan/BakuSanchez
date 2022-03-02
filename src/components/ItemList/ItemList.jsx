import { useContext, useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

import { ListWrapper } from "./ItemList.elements";

import { DataContext } from "../../context/DataContext";
import Item from "../Item/Item";
import {
  handleProductsBestSeller,
  handleProductsCategory,
} from "../../utils/products";

const ItemList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useOutletContext();
  const { productsFromDatabase } = useContext(DataContext);
  const { category } = useParams();

  let location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    // productsFromDatabase is a variable from DataContext

    if (productsFromDatabase.length) {
      // I manage the items to show, depending on the route
      if (location.pathname === "/") {
        setDataProducts(handleProductsBestSeller(productsFromDatabase));
      } else {
        if (category !== undefined) {
          setDataProducts(
            handleProductsCategory(productsFromDatabase, category)
          );
        } else {
          setDataProducts(productsFromDatabase);
        }
      }
    }
    setTimeout(() => setIsLoading(false), 500);
  }, [category, setIsLoading, location.pathname, productsFromDatabase]);

  return (
    <ListWrapper>
      {!isLoading
        ? dataProducts.map((info) => {
            return <Item key={info.id} product={info} />;
          })
        : null}
    </ListWrapper>
  );
};

export default ItemList;
