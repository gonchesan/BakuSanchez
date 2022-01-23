import { useEffect, useState } from "react";

//Fetch products
import { getProducts } from "../../Services/getProducts";

import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import { ListWrapper } from "./ItemList.elements";

const ItemList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getProducts()
        .then((products) => {
          setIsLoading(false);
          setDataProducts(products);
        })
        .catch((err) => console.log("Something is wrong: ", err));
    }, 2000);
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <ListWrapper>
        {dataProducts.map((info) => {
          return (
            <Item
              key={info.id}
              pictures={info.pictures}
              title={info.title}
              price={info.price}
              itsOnSale={info.itsOnSale}
              stock={info.stock}
              initial={info.initial}
            />
          );
        })}
      </ListWrapper>
    );
  }
};

export default ItemList;
