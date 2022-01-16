import ItemCount from "../ItemCount/ItemCount";

import { ItemContainer, ItemFooter } from "./Item.elements";

const Item = () => {
  const onAdd = (valueToAdd) => {
    console.log(valueToAdd);
  };

  return (
    <ItemContainer>
      {/* ItemBody */}
      <ItemFooter>
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
      </ItemFooter>
    </ItemContainer>
  );
};

export default Item;
