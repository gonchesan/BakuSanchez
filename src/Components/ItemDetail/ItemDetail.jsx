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
