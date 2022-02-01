import { useNavigate } from "react-router-dom";

//Components
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailSlider from "../ItemDetailSlider/ItemDetailSlider";

import { MdRemoveShoppingCart } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

//Styled Components
import {
  DetailContainer,
  InfoWrapper,
  Paragraph,
  PriceDetail,
  SliderWrapper,
  TittleDetail,
} from "./ItemDetail.elements";
import { Button } from "../../globalStyle";

const ItemDetail = ({ product }) => {
  const [itemsAdded, setItemsAdded] = useState(0);

  let navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    setItemsAdded(quantityToAdd);
  };

  const shopNow = () => {
    if (itemsAdded === 0) {
      setItemsAdded(1);
    }
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  const returnProducts = () => {
    setItemsAdded(0);
  };

  return (
    <DetailContainer>
      <SliderWrapper>
        <ItemDetailSlider pictures={product.pictures} />
      </SliderWrapper>
      <InfoWrapper>
        <TittleDetail>{product.title}</TittleDetail>
        <PriceDetail>
          <span>US</span> ${product.price}
        </PriceDetail>
        <Paragraph>
          <b>Stock available</b>
        </Paragraph>
        {itemsAdded !== 0 ? (
          <Button isDetailView secondary onClick={returnProducts}>
            <MdRemoveShoppingCart />
            <span>
              Return <small>({itemsAdded})</small> products
            </span>
          </Button>
        ) : (
          <ItemCount
            stock={product.stock}
            initial={product.initial}
            onAdd={onAdd}
          />
        )}
        <Button isDetailView onClick={shopNow}>
          <BsBagCheckFill />
          <span>Shop now</span>
        </Button>
        <Paragraph>
          <b>Product name:</b> {product.title}
        </Paragraph>
        {product.series && (
          <Paragraph>
            <b>Series:</b> {product.series}
          </Paragraph>
        )}
        {product.manufacturer && (
          <Paragraph>
            <b>Manufacturer:</b> {product.manufacturer}
          </Paragraph>
        )}
        {product.specifications && (
          <Paragraph>
            <b>Specifications:</b> {product.specifications}
          </Paragraph>
        )}
        {product.size && (
          <Paragraph>
            <b>Dimensions:</b> {product.size}
          </Paragraph>
        )}
        {product.materials && (
          <Paragraph>
            <b>Materials:</b> {product.materials}
          </Paragraph>
        )}
        {product.author_illustrator && (
          <Paragraph>
            <b>Author/Illustrator:</b> {product.author_illustrator}
          </Paragraph>
        )}
        {product.publisher && (
          <Paragraph>
            <b>Publisher:</b> {product.publisher}
          </Paragraph>
        )}
        {product.pages && (
          <Paragraph>
            <b>Pages:</b> {product.pages}
          </Paragraph>
        )}
        {product.language && (
          <Paragraph>
            <b>Language:</b> {product.language}
          </Paragraph>
        )}
        <Paragraph>
          <b>Description:</b> {product.description}
        </Paragraph>
      </InfoWrapper>
    </DetailContainer>
  );
};

export default ItemDetail;
