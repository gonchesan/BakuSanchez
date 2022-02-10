import { useLocation } from "react-router-dom";

//Components
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ItemList from "../../components/ItemList/ItemList";

//Styled Components
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
