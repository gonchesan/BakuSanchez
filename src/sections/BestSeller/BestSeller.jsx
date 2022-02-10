import React from "react";
import ItemListContainer from "../../modules/ItemListContainer/ItemListContainer";

//Styled Components
import { Container, Header } from "../../globalStyle";

const BestSeller = () => {
  return (
    <>
      <Container>
        <Header>Best Seller</Header>
      </Container>
      <ItemListContainer />
    </>
  );
};

export default BestSeller;
