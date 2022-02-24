import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//Styled Components
import {
  ItemCountContainer,
  Wrapper,
  CountButton,
  CounterNumber,
  StockDetail,
} from "./ItemCount.elements";
import { Button } from "../../globalStyle";

//Icons
import { FaCartPlus } from "react-icons/fa";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState();
  const [viewDetail, setViewDetail] = useState(false);

  let location = useLocation();

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

  useEffect(() => {
    if (location.pathname.includes("/shop/item/")) {
      setViewDetail(true);
    }
  }, []);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (
    <ItemCountContainer isDetailView={viewDetail}>
      <Wrapper isDetailView={viewDetail}>
        {viewDetail && (
          <p>
            <b>Quantity: </b>
          </p>
        )}
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
          disabled={count === stock}
        >
          +
        </CountButton>
        {viewDetail && <StockDetail>({stock} available)</StockDetail>}
      </Wrapper>
      <Button
        onClick={() => onAdd(count)}
        disabled={stock === 0}
        isDetailView={viewDetail}
      >
        <FaCartPlus />
        <span>Add to cart</span>
      </Button>
    </ItemCountContainer>
  );
};

export default ItemCount;
