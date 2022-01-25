import ItemCount from "../ItemCount/ItemCount";

import { FaRegHeart } from "react-icons/fa";

import {
  BadgeCard,
  CardDetail,
  ItemBody,
  ItemContainer,
  ItemFooter,
  LikeButton,
  PriceDetail,
  Tittle,
} from "./Item.elements";
import { getProductDetail } from "../../utils/products";
import { useNavigate } from "react-router-dom";

const Item = ({ id, pictures, title, price, itsOnSale, initial, stock }) => {
  let navigate = useNavigate();

  const onAdd = (valueToAdd) => {
    console.log(valueToAdd);
  };

  const goToProductDetailPage = () => {
    navigate(`products/${id}`);
  };

  return (
    <ItemContainer onClick={goToProductDetailPage}>
      <ItemBody>
        <img src={pictures[0]} />
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
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      </ItemFooter>
    </ItemContainer>
  );
};

export default Item;
