import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

//Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";

//Fetch detail product
import { getItem } from "../../utils/products";

//Styled Components
import { Container } from "../../globalStyle";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading, isMounted, setIsMounted] = useOutletContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setIsMounted(false);

    setTimeout(() => {
      getItem(id).then((data) => {
        setIsLoading(false);
        setIsMounted(true);
        setProduct(data);
      });
    }, 2000);
  }, [id]);

  return (
    <Container>{isMounted ? <ItemDetail product={product} /> : null}</Container>
  );
};

export default ItemDetailContainer;
