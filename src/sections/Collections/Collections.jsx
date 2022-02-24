import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCollectionPictures } from "../../utils/information";

//Styled Components
import { Container, Header } from "../../globalStyle";
import {
  CardCollection,
  Overlay,
  WrapperCollection,
} from "./Collections.elements";

const Collections = () => {
  const [collection, setCollection] = useState();

  let navigate = useNavigate();

  const nameCollection = [
    "Figures",
    "Plushies",
    "Manga",
    "Clothing",
    "Funko",
    "Cosplay",
  ];

  useEffect(() => {
    getCollectionPictures().then((result) => setCollection(result));
  }, []);

  const collections = {
    Figures: "shop/category/figures",
    Plushies: "shop/category/plushies",
    Manga: "shop/category/manga",
  };

  const handleCollection = (index) => {
    if (collections[nameCollection[index]] !== undefined) {
      navigate(collections[nameCollection[index]]);
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
                <img src={url} alt={nameCollection[index]} />
                <Overlay />
                <h5>{nameCollection[index]}</h5>
              </CardCollection>
            );
          })}
      </WrapperCollection>
    </Container>
  );
};

export default Collections;
