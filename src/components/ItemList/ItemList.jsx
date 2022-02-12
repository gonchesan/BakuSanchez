import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

//Fetch products
import {
  getAllCategories,
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
    if (category !== undefined) {
      getProductsByCategory(category)
        .then((products) => {
          setDataProducts(products);
          setTimeout(() => setIsLoading(false), 500);
        })
        .catch((err) => console.log("Something is wrong: ", err));
    }
  }, [category]);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    if (location.pathname !== "/") {
      if (mounted) {
        if (category === undefined) {
          getAllProducts()
            .then((dataCollection) => {
              setDataProducts(dataCollection);
              setTimeout(() => setIsLoading(false), 500);
            })
            .catch((err) => console.log("Something is wrong: ", err));
        } else {
          getProductsByCategory(category)
            .then((dataCollection) => {
              setDataProducts(dataCollection);
              setTimeout(() => setIsLoading(false), 500);
            })
            .catch((err) => console.log("Something is wrong: ", err));
        }

        return () => (mounted = false);
      }

      //todo BORRAR ESTE CEIRRE y el setTimeout establecerlo para "/", "/shopt/category"
    }
    setTimeout(() => setIsLoading(false), 500);

    // } else if (location.pathname === "/") {
    //   setTimeout(() => {
    //     getBestSeller()
    //       .then((products) => {
    //         setIsLoading(false);
    //         setDataProducts(products);
    //       })
    //       .catch((err) => console.log("Something is wrong: ", err));
    //   }, 2000);
    // } else {
    //   setTimeout(() => {
    //     getProductsByCategory(category)
    //       .then((products) => {
    //         setIsLoading(false);
    //         setDataProducts(products);
    //       })
    //       .catch((err) => console.log("Something is wrong: ", err));
    //   }, 2000);
    // }
  }, []);

  if (dataProducts.length !== 0) {
    return (
      <ListWrapper>
        {dataProducts.map((info) => {
          return <Item key={info.id} product={info} />;
        })}
      </ListWrapper>
    );
  } else {
    return <h2>Una lista vacia</h2>;
  }
};

export default ItemList;
