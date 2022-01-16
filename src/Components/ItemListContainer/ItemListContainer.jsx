import Item from "../Item/Item";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{greeting}</h2>
      <Item />
    </>
  );
};

export default ItemListContainer;
