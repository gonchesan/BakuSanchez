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
  const { cart, subTotalPrice, totalPrice, clear } = useContext(CartContext);

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
            {/* <CheckoutInfo>
              <CheckoutTitle>Order summary</CheckoutTitle>
              <WrapperSummaryInfo>
                <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
                <CheckoutSubtitle>
                  $<small>US </small>
                  {numberFormat.format(subTotalPrice)}
                </CheckoutSubtitle>
              </WrapperSummaryInfo>
              <WrapperSummaryInfo>
                <CheckoutSubtitle>Shipping</CheckoutSubtitle>
                <SelectShipping
                  isVisible={isVisible}
                  setisVisible={setisVisible}
                  indexArray={indexArray}
                  setIndexArray={setIndexArray}
                />
              </WrapperSummaryInfo>

              <WrapperSummaryInfo>
                <CheckoutSubtitle>Promo code</CheckoutSubtitle>
                <WrapperSummaryInfo flexStart>
                  <InputCode value={promoCode} onChange={handleInput} />
                  <SummaryButton small onClick={checkPromoCode}>
                    Apply
                  </SummaryButton>
                </WrapperSummaryInfo>
                <AlertPromo showAlert={promoAlert} error={promoCodeError}>
                  {promoCodeError
                    ? "Promotional code not found"
                    : "Promotional code applied! - 15% Applied"}
                </AlertPromo>
              </WrapperSummaryInfo>

              <WrapperSummaryInfo>
                <CheckoutSubtitle>Total cost</CheckoutSubtitle>
                <CheckoutSubtitle>
                  $<small>US </small>
                  {!promoCodeError
                    ? numberFormat.format(
                        totalPrice - (totalPrice * 15) / 100 + shippingCost
                      )
                    : numberFormat.format(totalPrice + shippingCost)}
                </CheckoutSubtitle>
              </WrapperSummaryInfo>
              <SummaryButton>Checkout</SummaryButton>
            </CheckoutInfo> */}
          </WrapperCart>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
