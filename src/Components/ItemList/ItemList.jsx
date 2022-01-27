import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

//Fetch products
import { getAllProducts, getProductsByCategory } from "../../utils/products";

//Components
import Item from "../Item/Item";

//Styled Components
import { ListWrapper } from "./ItemList.elements";

const ItemList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading, isMounted, setIsMounted] = useOutletContext();
  const { category } = useParams();

  let location = useLocation();

  useEffect(() => {
    setIsMounted(false);
    setIsLoading(true);

    setTimeout(() => {
      getProductsByCategory(category)
        .then((products) => {
          setIsLoading(false);
          setIsMounted(true);
          setDataProducts(products);
        })
        .catch((err) => console.log("Something is wrong: ", err));
    }, 2000);
  }, [category]);

  useEffect(() => {
    setIsMounted(false);
    setIsLoading(true);

    if (location.pathname === "/shop") {
      setTimeout(() => {
        getAllProducts()
          .then((products) => {
            setIsLoading(false);
            setIsMounted(true);
            setDataProducts(products);
          })
          .catch((err) => console.log("Something is wrong: ", err));
      }, 2000);
    } else {
      setTimeout(() => {
        getProductsByCategory(category)
          .then((products) => {
            setIsLoading(false);
            setIsMounted(true);
            setDataProducts(products);
          })
          .catch((err) => console.log("Something is wrong: ", err));
      }, 2000);
    }
  }, []);

  return (
    <ListWrapper>
      {dataProducts.map((info) => {
        if (isMounted) {
          return (
            <Item
              key={info.id}
              id={info.id}
              pictures={info.pictures}
              title={info.title}
              price={info.price}
              itsOnSale={info.itsOnSale}
              stock={info.stock}
              initial={info.initial}
            />
          );
        } else {
          return null;
        }
      })}
    </ListWrapper>
  );
};

export default ItemList;
