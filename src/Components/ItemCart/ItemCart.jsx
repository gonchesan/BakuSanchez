import React, { useContext, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
import { CountButton, CounterNumber } from "../ItemCount/ItemCount.elements";

import {
  ButtonRemoveItem,
  CountWrapper,
  ImageItemCart,
  InfoItemCart,
  WrapperItemCart,
} from "./ItemCart.element";

const ItemCart = ({ product, quantity, numberIndex }) => {
  const { removeItem, cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(quantity);

  const handleCountingClick = (event) => {
    if (event.target.name === "add") {
      if (count < product.stock) {
        setCount(count + 1);
      }
    } else {
      if (count > product.initial) {
        setCount(count - 1);
      }
    }
  };

  useEffect(() => {
    let newCart = [...cart];
    newCart[numberIndex] = { item: product, quantity: count };
    setCart(newCart);
  }, [count]);

  return (
    <WrapperItemCart>
      <ImageItemCart src={product.pictures[0]} />
      <InfoItemCart>
        <p>{product.title}</p>
        {product.series ? (
          <p>{product.series}</p>
        ) : (
          <p>{product.author_illustrator}</p>
        )}
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
          disabled={count == product.stock}
        >
          +
        </CountButton>
      </CountWrapper>
      <p>
        $<small>US</small> {product.price}
      </p>
      <p>
        $<small>US </small>
        {Number((product.price * quantity).toFixed(2))}
      </p>
      <ButtonRemoveItem onClick={() => removeItem(product.id)}>
        <RiCloseLine />
      </ButtonRemoveItem>
    </WrapperItemCart>
  );
};

export default ItemCart;
