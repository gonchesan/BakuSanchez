//Components
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailSlider from "../ItemDetailSlider/ItemDetailSlider";

import { MdRemoveShoppingCart } from "react-icons/md";

//Styled Components
import {
  DetailContainer,
  InfoWrapper,
  Paragraph,
  PriceDetail,
  SliderWrapper,
  StockDetail,
  TittleDetail,
} from "./ItemDetail.elements";
import { CartButton } from "../ItemCount/ItemCount.elements";

const ItemDetail = ({ product }) => {
  const [itemsAdded, setItemsAdded] = useState(0);

  const onAdd = (quantityToAdd) => {
    setItemsAdded(quantityToAdd);
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
          <b>Stock:</b> <StockDetail> {product.stock}</StockDetail>
        </Paragraph>
        {itemsAdded !== 0 ? (
          <CartButton isDetailView onClick={returnProducts}>
            <MdRemoveShoppingCart />
            <span>
              Return <small>({itemsAdded})</small> products
            </span>
          </CartButton>
        ) : (
          <ItemCount
            stock={product.stock}
            initial={product.initial}
            onAdd={onAdd}
          />
        )}
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
