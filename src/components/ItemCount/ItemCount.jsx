import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  ItemCountContainer,
  Wrapper,
  CountButton,
  CounterNumber,
  StockDetail,
} from "./ItemCount.elements";
import { Button } from "../../globalStyle";
import { FaCartPlus } from "react-icons/fa";

import { handleCountingClick } from "../../utils/functions";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState();
  const [viewDetail, setViewDetail] = useState(false);

  //References to control the quantity
  const addReference = useRef(null);
  const substractReference = useRef(null);

  let location = useLocation();

  useEffect(() => {
    setCount(initial);

    if (location.pathname.includes("/shop/item/")) {
      setViewDetail(true);
    }
  }, [location.pathname, initial]);

  return (
    <ItemCountContainer isDetailView={viewDetail}>
      <Wrapper isDetailView={viewDetail}>
        {viewDetail && (
          <p>
            <b>Quantity: </b>
          </p>
        )}
        <CountButton
          onClick={() =>
            handleCountingClick(
              count,
              setCount,
              stock,
              initial,
              substractReference
            )
          }
          name="subtract"
          ref={substractReference}
          left
          disabled={count === 0}
        >
          -
        </CountButton>
        <CounterNumber>{count}</CounterNumber>
        <CountButton
          onClick={() =>
            handleCountingClick(count, setCount, stock, initial, addReference)
          }
          name="add"
          ref={addReference}
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
