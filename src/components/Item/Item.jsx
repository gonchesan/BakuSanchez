//Components
import ItemCount from "../ItemCount/ItemCount";

//Icons
import { FaRegHeart } from "react-icons/fa";

//Styled Components
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
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "../../globalStyle";
import { MdRemoveShoppingCart } from "react-icons/md";

const Item = ({ product }) => {
  const { addItem, removeItem } = useContext(CartContext);
  const [itemsAdded, setItemsAdded] = useState(0);

  let navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    addItem(product, quantityToAdd);
    setItemsAdded(quantityToAdd);
  };

  const goToProductDetailPage = (event) => {
    event.stopPropagation();
    navigate(`/shop/item/${product.id}`);
  };

  const returnProducts = () => {
    setItemsAdded(0);
    removeItem(product.id);
  };

  return (
    <ItemContainer>
      <SelectItem onClick={goToProductDetailPage} />
      <ItemBody>
        <img src={product.pictures[0]} alt={product.title} />
        <BadgeCard isVisible={product.itsOnSale}>-22%</BadgeCard>
        <LikeButton>
          <FaRegHeart />
        </LikeButton>
      </ItemBody>
      <ItemFooter>
        <CardDetail>
          <Tittle>{product.title}</Tittle>
          <PriceDetail>$ {product.price}</PriceDetail>
        </CardDetail>
        {itemsAdded !== 0 ? (
          <Button isDetailView secondary onClick={returnProducts}>
            <MdRemoveShoppingCart />
            <span>Return products</span>
          </Button>
        ) : (
          <ItemCount
            stock={product.stock}
            initial={product.initial}
            onAdd={onAdd}
          />
        )}
      </ItemFooter>
    </ItemContainer>
  );
};

export default Item;
