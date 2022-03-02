import { useLocation } from "react-router-dom";

import { Container } from "../../globalStyle";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
  let location = useLocation();

  return (
    <Container>
      {location.pathname !== "/" ? <Breadcrumb /> : null}
      <ItemList />
    </Container>
  );
};

export default ItemListContainer;
