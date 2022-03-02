import { useContext, useRef, useState } from "react";

import { CountButton, CounterNumber } from "../ItemCount/ItemCount.elements";
import {
  ButtonRemoveItem,
  CountWrapper,
  ImageItemCart,
  InfoItemCart,
  WrapperItemCart,
} from "./ItemCart.element";
import { RiCloseLine } from "react-icons/ri";

import { CartContext } from "../../context/CartContext";
import { handleCountingClick } from "../../utils/functions";

const ItemCart = ({ product, quantity, numberIndex }) => {
  const { removeItem, setItemsCart, calculateSubTotal } =
    useContext(CartContext);
  const [count, setCount] = useState(quantity);

  //References to control the quantity
  const addReference = useRef(null);
  const substractReference = useRef(null);

  const { id, stock, initial, pictures, title, series, detail1, price } =
    product;

  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <WrapperItemCart>
      <ImageItemCart src={pictures[0]} />
      <InfoItemCart>
        <p>{title}</p>
        {series ? <p>{series}</p> : <p>{detail1}</p>}
      </InfoItemCart>
      <CountWrapper>
        <CountButton
          onClick={() =>
            handleCountingClick(
              count,
              setCount,
              stock,
              initial,
              substractReference,
              setItemsCart,
              numberIndex,
              product
            )
          }
          name="subtract"
          ref={substractReference}
          left
          disabled={count === 1}
        >
          -
        </CountButton>
        <CounterNumber>{count}</CounterNumber>
        <CountButton
          onClick={() =>
            handleCountingClick(
              count,
              setCount,
              stock,
              initial,
              addReference,
              setItemsCart,
              numberIndex,
              product
            )
          }
          name="add"
          ref={addReference}
          disabled={count === stock}
        >
          +
        </CountButton>
      </CountWrapper>
      <p>
        $<small>US</small> {numberFormat.format(price)}
      </p>
      <p>
        $<small>US </small>
        {numberFormat.format(calculateSubTotal(price, quantity))}
      </p>
      <ButtonRemoveItem onClick={() => removeItem(id)}>
        <RiCloseLine />
      </ButtonRemoveItem>
    </WrapperItemCart>
  );
};

export default ItemCart;
