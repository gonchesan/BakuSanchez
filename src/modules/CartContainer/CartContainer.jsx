import { useContext, useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { ButtonLink, ButtonOutline, Container } from "../../globalStyle";
import {
  ContainerCartItem,
  HeaderListCart,
  ItemListCart,
  WrapperCart,
} from "./CartContainer.elements";
import {
  MdOutlineKeyboardBackspace,
  MdRemoveShoppingCart,
} from "react-icons/md";

import { CartContext } from "../../context/CartContext";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import ItemCart from "../../components/ItemCart/ItemCart";
import EmpyCart from "../../components/EmpyCart/EmpyCart";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const CartContainer = () => {
  const { cart, clear } = useContext(CartContext);
  const [isLoading, setIsLoading] = useOutletContext();

  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  const handleOpenSummary = () => setIsOpen(!isOpen);

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
            <OrderSummary
              isOpen={isOpen}
              handleOpenSummary={handleOpenSummary}
            />
          </WrapperCart>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
