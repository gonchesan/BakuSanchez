import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import {
  BadgeCard,
  CardDetail,
  ItemBody,
  ItemContainer,
  ItemFooter,
  LikeButton,
  PriceDetail,
  SelectItem,
  Tittle,
} from "./Item.elements";
import { Button } from "../../globalStyle";
import { MdRemoveShoppingCart } from "react-icons/md";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const { addItem, removeItem } = useContext(CartContext);
  const [itemsAdded, setItemsAdded] = useState(0);

  const { id, pictures, title, itsOnSale, price, stock, initial } = product;

  let navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    addItem(product, quantityToAdd);
    setItemsAdded(quantityToAdd);
  };

  const goToProductDetailPage = (event) => {
    event.stopPropagation();
    navigate(`/shop/item/${id}`);
  };

  const returnProducts = () => {
    setItemsAdded(0);
    removeItem(id);
  };

  return (
    <ItemContainer>
      <SelectItem onClick={goToProductDetailPage} />
      <ItemBody>
        <img src={pictures[0]} alt={title} />
        <BadgeCard isVisible={itsOnSale}>-22%</BadgeCard>
        <LikeButton>
          <FaRegHeart />
        </LikeButton>
      </ItemBody>
      <ItemFooter>
        <CardDetail>
          <Tittle>{title}</Tittle>
          <PriceDetail>$ {price}</PriceDetail>
        </CardDetail>
        {itemsAdded !== 0 ? (
          <Button isDetailView secondary onClick={returnProducts}>
            <MdRemoveShoppingCart />
            <span>Return products</span>
          </Button>
        ) : (
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        )}
      </ItemFooter>
    </ItemContainer>
  );
};

export default Item;
