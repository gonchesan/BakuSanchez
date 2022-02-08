import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ItemList from "../../components/ItemList/ItemList";

import { Container } from "../../globalStyle";

const ItemListContainer = () => {
  return (
    <Container>
      <Breadcrumb />
      <ItemList />
    </Container>
  );
};

export default ItemListContainer;
