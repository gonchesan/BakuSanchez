import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

//Components
import { CountButton, CounterNumber } from "../ItemCount/ItemCount.elements";

//Styled Components
import {
  ButtonRemoveItem,
  CountWrapper,
  ImageItemCart,
  InfoItemCart,
  WrapperItemCart,
} from "./ItemCart.element";

//Icons
import { RiCloseLine } from "react-icons/ri";

const ItemCart = ({ product, quantity, numberIndex }) => {
  const { removeItem, setItemsCart } = useContext(CartContext);
  const [count, setCount] = useState(quantity);

  const handleCountingClick = (event) => {
    if (event.target.name === "add") {
      if (count < product.stock) {
        setCount(count + 1);
        setItemsCart(numberIndex, product, count + 1);
      }
    } else {
      if (count > product.initial) {
        setCount(count - 1);
        setItemsCart(numberIndex, product, count - 1);
      }
    }
  };

  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <WrapperItemCart>
      <ImageItemCart src={product.pictures[0]} />
      <InfoItemCart>
        <p>{product.title}</p>
        {product.series ? <p>{product.series}</p> : <p>{product.detail1}</p>}
      </InfoItemCart>
      <CountWrapper>
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
          disabled={count === product.stock}
        >
          +
        </CountButton>
      </CountWrapper>
      <p>
        $<small>US</small> {numberFormat.format(product.price)}
      </p>
      <p>
        $<small>US </small>
        {numberFormat.format(product.price * quantity)}
      </p>
      <ButtonRemoveItem onClick={() => removeItem(product.id)}>
        <RiCloseLine />
      </ButtonRemoveItem>
    </WrapperItemCart>
  );
};

export default ItemCart;
