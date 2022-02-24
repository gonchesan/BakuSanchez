import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Components
import ItemCart from "../../components/ItemCart/ItemCart";
import EmpyCart from "../../components/EmpyCart/EmpyCart";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

//Styled Components
import { ButtonLink, ButtonOutline, Container } from "../../globalStyle";
import { CartContext } from "../../context/CartContext";
import {
  ContainerCartItem,
  HeaderListCart,
  ItemListCart,
  WrapperCart,
} from "./CartContainer.elements";

//Icons
import {
  MdOutlineKeyboardBackspace,
  MdRemoveShoppingCart,
} from "react-icons/md";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const CartContainer = () => {
  const { cart, clear } = useContext(CartContext);

  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <EmpyCart />
      ) : (
        <>
          <Breadcrumb />
          <WrapperCart>
            <ItemListCart>
              <ButtonOutline secondary small onClick={clear}>
                <MdRemoveShoppingCart />
                Clear cart
              </ButtonOutline>
              <HeaderListCart>
                <p>Product detail</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Total price</p>
              </HeaderListCart>
              <ContainerCartItem>
                {cart.map((product, numberIndex) => {
                  return (
                    <ItemCart
                      key={product.item.id}
                      numberIndex={numberIndex}
                      product={product.item}
                      quantity={product.quantity}
                    />
                  );
                })}
              </ContainerCartItem>
              <ButtonLink onClick={navigateToShop}>
                <MdOutlineKeyboardBackspace /> Continue shopping
              </ButtonLink>
            </ItemListCart>
            <OrderSummary length={cart.length} />
          </WrapperCart>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
