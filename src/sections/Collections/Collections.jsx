import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Container, Header } from "../../globalStyle";
import { getCollectionPictures } from "../../utils/information";
import {
  CardCollection,
  Overlay,
  WrapperCollection,
} from "./Collections.elements";

const Collections = () => {
  const [collection, setCollection] = useState();

  let navigate = useNavigate();

  const data = ["Figures", "Plushies", "Manga", "Clothing", "Funko", "Cosplay"];

  useEffect(() => {
    getCollectionPictures().then((result) => setCollection(result));
  }, []);

  const handleCollection = (index) => {
    switch (index) {
      case 0:
        navigate("shop/category/figures");
        break;
      case 1:
        navigate("shop/category/plushies");
        break;
      case 2:
        navigate("shop/category/manga");
    }
  };

  return (
    <Container>
      <Header>Our Collection</Header>
      <WrapperCollection>
        {collection &&
          collection.map((url, index) => {
            return (
              <CardCollection
                onClick={() => handleCollection(index)}
                key={index}
              >
                <img src={url} />
                <Overlay />
                <h5>{data[index]}</h5>
              </CardCollection>
            );
          })}
      </WrapperCollection>
    </Container>
  );
};

export default Collections;
