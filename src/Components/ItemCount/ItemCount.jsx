import { useState } from "react";

//Icons
import { FaCartPlus } from "react-icons/fa";

//Styled Components
import {
  ItemCountContainer,
  Wrapper,
  CartButton,
  CountButton,
  CounterNumber,
} from "./ItemCount.elements";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleCountingClick = (event) => {
    if (event.target.name === "add") {
      if (count < stock) {
        setCount(count + 1);
      }
    } else {
      if (count > initial) {
        setCount(count - 1);
      }
    }
  };

  return (
    <ItemCountContainer>
      <Wrapper>
        <CountButton
          onClick={handleCountingClick}
          name="subtract"
          left
          disabled={count === 0}
        >
          -
        </CountButton>
        <CounterNumber>{count}</CounterNumber>
        <CountButton
          onClick={handleCountingClick}
          name="add"
          disabled={count == stock}
        >
          +
        </CountButton>
      </Wrapper>
      <CartButton onClick={() => onAdd(count)} disabled={stock === 0}>
        <FaCartPlus />
        <span>Add to cart</span>
      </CartButton>
    </ItemCountContainer>
  );
};

export default ItemCount;
