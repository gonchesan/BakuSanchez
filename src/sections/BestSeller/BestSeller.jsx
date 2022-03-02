import { Container, Header } from "../../globalStyle";

import ItemListContainer from "../../modules/ItemListContainer/ItemListContainer";

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
