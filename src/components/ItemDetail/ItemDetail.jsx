import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import { getItem } from "../../utils/products.js";

//Components
import { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailSlider from "../ItemDetailSlider/ItemDetailSlider";

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

//Icons
import { MdRemoveShoppingCart } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const ItemDetail = () => {
  const [itemsAdded, setItemsAdded] = useState(0);
  const [product, setProduct] = useState({});
  const { addItem, removeItem } = useContext(CartContext);
  const { id } = useParams();
  let navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    setItemsAdded(quantityToAdd);
    addItem(product, quantityToAdd);
  };

  const buyNow = () => {
    navigate("/cart");
  };

  const returnProducts = () => {
    setItemsAdded(0);
    removeItem(product.id);
  };

  // useEffect(() => {
  //   if (itemsAdded !== 0) {
  //     addItem(product, itemsAdded);
  //   }
  // }, [itemsAdded]);

  useEffect(() => {
    // Set a clean up flag
    let isSubscribed = true;

    getItem(id)
      .then((itemInfo) => (isSubscribed ? setProduct(itemInfo) : null))
      .catch((err) => console.log("Something is wrong: ", err));

    // Cancel subscription to useEffect
    return () => (isSubscribed = false);
  }, [id]);

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
