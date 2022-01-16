import { useState, useEffect } from "react";

//Icons
import { AiOutlineShoppingCart } from "react-icons/ai";

//Styled Components
import {
  ItemCountContainer,
  Wrapper,
  CartButton,
  CountButton,
  CounterNumber,
} from "./ItemCount.elements";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const handleCountingClick = (event) => {
    if (event.target.name === "add") {
      if (count < stock) {
        setCount(count + 1);
      }
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, []);

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
      <CartButton onClick={() => onAdd(count)}>
        <AiOutlineShoppingCart />
      </CartButton>
    </ItemCountContainer>
  );
};

export default ItemCount;
