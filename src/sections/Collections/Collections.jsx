import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Header } from "../../globalStyle";
import {
  CardCollection,
  Overlay,
  WrapperCollection,
} from "./Collections.elements";

import { DataContext } from "../../context/DataContext";

const Collections = () => {
  const { collectionPicturesFromDatabase } = useContext(DataContext);
  let navigate = useNavigate();

  const nameCollection = [
    "Figures",
    "Plushies",
    "Manga",
    "Clothing",
    "Funko",
    "Cosplay",
  ];

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
        {collectionPicturesFromDatabase &&
          collectionPicturesFromDatabase.map((url, index) => {
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
