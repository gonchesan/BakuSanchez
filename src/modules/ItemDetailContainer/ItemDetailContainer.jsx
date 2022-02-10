import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getItem } from "../../utils/products";

//Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";

//Styled Components
import { Container } from "../../globalStyle";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useOutletContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      getItem(id).then((data) => {
        setIsLoading(false);
        setProduct(data);
      });
    }, 2000);
  }, [id]);

  return (
    <Container>
      {!isLoading ? <ItemDetail product={product} /> : null}
    </Container>
  );
};

export default ItemDetailContainer;
