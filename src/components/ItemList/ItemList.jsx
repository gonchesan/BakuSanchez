import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

//Fetch products
import {
  getAllProducts,
  getBestSeller,
  getProductsByCategory,
} from "../../utils/products";

//Components
import Item from "../Item/Item";

//Styled Components
import { ListWrapper } from "./ItemList.elements";

const ItemList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useOutletContext();
  const { category } = useParams();

  let location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      getProductsByCategory(category)
        .then((products) => {
          setIsLoading(false);
          setDataProducts(products);
        })
        .catch((err) => console.log("Something is wrong: ", err));
    }, 2000);
  }, [category]);

  useEffect(() => {
    setIsLoading(true);

    if (location.pathname === "/shop") {
      setTimeout(() => {
        getAllProducts()
          .then((products) => {
            setIsLoading(false);
            setDataProducts(products);
          })
          .catch((err) => console.log("Something is wrong: ", err));
      }, 2000);
    } else if (location.pathname === "/") {
      setTimeout(() => {
        getBestSeller()
          .then((products) => {
            setIsLoading(false);
            setDataProducts(products);
          })
          .catch((err) => console.log("Something is wrong: ", err));
      }, 2000);
    } else {
      setTimeout(() => {
        getProductsByCategory(category)
          .then((products) => {
            setIsLoading(false);
            setDataProducts(products);
          })
          .catch((err) => console.log("Something is wrong: ", err));
      }, 2000);
    }
  }, []);

  return (
    <ListWrapper>
      {dataProducts.map((info) => {
        if (!isLoading) {
          return <Item key={info.id} product={info} />;
        } else {
          return null;
        }
      })}
    </ListWrapper>
  );
};

export default ItemList;
