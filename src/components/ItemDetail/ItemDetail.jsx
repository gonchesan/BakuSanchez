import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import {
  DetailContainer,
  InfoWrapper,
  Paragraph,
  PriceDetail,
  SliderWrapper,
  TittleDetail,
} from "./ItemDetail.elements";
import { Button } from "../../globalStyle";
import { MdRemoveShoppingCart } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailSlider from "../ItemDetailSlider/ItemDetailSlider";

const ItemDetail = ({ product }) => {
  const [itemsAdded, setItemsAdded] = useState(0);
  const { addItem, removeItem } = useContext(CartContext);
  let navigate = useNavigate();

  const {
    id,
    description,
    pictures,
    title,
    price,
    series,
    detail1,
    detail2,
    detail3,
    detail4,
    stock,
    initial,
  } = product;

  const onAdd = (quantityToAdd) => {
    setItemsAdded(quantityToAdd);
    addItem(product, quantityToAdd);
  };

  const buyNow = () => {
    navigate("/cart");
  };

  const returnProducts = () => {
    setItemsAdded(0);
    removeItem(id);
  };

  return (
    <DetailContainer>
      <SliderWrapper>
        <ItemDetailSlider pictures={pictures} />
      </SliderWrapper>
      <InfoWrapper>
        <TittleDetail>{title}</TittleDetail>
        <PriceDetail>
          <span>US</span> ${price}
        </PriceDetail>
        <Paragraph>
          <b>Stock available</b>
        </Paragraph>
        {itemsAdded !== 0 ? (
          <>
            <Button isDetailView secondary onClick={returnProducts}>
              <MdRemoveShoppingCart />
              <span>Return products</span>
            </Button>
            <Button isDetailView onClick={buyNow}>
              <BsBagCheckFill />
              <span>Buy now</span>
            </Button>
          </>
        ) : (
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        )}

        <Paragraph>
          <b>Product name:</b> {title}
        </Paragraph>
        {series && (
          <Paragraph>
            <b>Series:</b> {series}
          </Paragraph>
        )}
        {detail3 && (
          <Paragraph>
            <b>Specifications:</b> {detail3}
          </Paragraph>
        )}
        <Paragraph>
          <b>Description:</b> {description}
        </Paragraph>
        {detail1 && <Paragraph>◉ {detail1}</Paragraph>}
        {detail2 && <Paragraph>◉ {detail2}</Paragraph>}
        {detail4 && <Paragraph>◉ {product.detail4}</Paragraph>}
      </InfoWrapper>
    </DetailContainer>
  );
};

export default ItemDetail;
