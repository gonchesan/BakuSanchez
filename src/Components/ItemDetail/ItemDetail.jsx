//Components
import ItemDetailSlider from "../ItemDetailSlider/ItemDetailSlider";

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

const ItemDetail = ({ product }) => {
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
        <Paragraph>
          <b>Product name:</b> {product.title}
        </Paragraph>
        <Paragraph>
          <b>Series:</b> {product.series}
        </Paragraph>
        <Paragraph>
          <b>Manufacturer:</b> {product.manufacturer}
        </Paragraph>
        <Paragraph>
          <b>Specifications:</b> {product.specifications}
        </Paragraph>
        <Paragraph>
          <b>Dimensions:</b> {product.size}
        </Paragraph>
        <Paragraph>
          <b>Description:</b> {product.description}
        </Paragraph>
      </InfoWrapper>
    </DetailContainer>
  );
};

export default ItemDetail;
