import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ItemList from "../../components/ItemList/ItemList";

import { Container } from "../../globalStyle";

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
