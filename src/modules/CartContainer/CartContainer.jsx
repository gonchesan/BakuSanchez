import React, { useContext, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

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
  const [isLoading, setIsLoading] = useOutletContext();

  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
    window.scrollTo(0, 0);
  }, [setIsLoading]);

  return (
    <Container>
      {cart.length === 0 && !isLoading ? (
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
                  const { quantity, item } = product;
                  return (
                    <ItemCart
                      key={item.id}
                      numberIndex={numberIndex}
                      product={item}
                      quantity={quantity}
                    />
                  );
                })}
              </ContainerCartItem>
              <ButtonLink onClick={navigateToShop}>
                <MdOutlineKeyboardBackspace /> Continue shopping
              </ButtonLink>
            </ItemListCart>
            <OrderSummary />
          </WrapperCart>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
