import React, { useContext, useEffect, useState } from "react";
import ItemCart from "../../components/ItemCart/ItemCart";
import SelectShipping from "../../components/SelectShipping/SelectShipping";
import { Container } from "../../globalStyle";
import { CartContext } from "../../context/CartContext";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  CheckoutInfo,
  CheckoutSubtitle,
  CheckoutTitle,
  HeaderListCart,
  InputCode,
  ItemListCart,
  // SelectShipping,
  SummaryButton,
  WrapperCart,
  WrapperSummaryInfo,
} from "./CartContainer.elements";

import {
  MdOutlineKeyboardBackspace,
  MdRemoveShoppingCart,
} from "react-icons/md";

const CartContainer = () => {
  const {
    cart,
    subTotalPrice,
    setSubTotalPrice,
    totalPrice,
    setTotalPrice,
    clear,
  } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [promoAlert, setPromoAlert] = useState(false);

  const [isLoading, setIsLoading] = useOutletContext();

  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [cart]);

  const handleInput = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    let newValue = totalPrice - (totalPrice * 15) / 100;
    promoCode === "030355556" && setTotalPrice(newValue);
    setPromoAlert(true);
  };

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <Container>
      {/* Si no hay ningun producto en el carro */}
      <h2 style={{ textAlign: "center" }}>Cart</h2>
      {cart.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>
          There should be products here, but...
        </h4>
      ) : (
        <WrapperCart>
          <ItemListCart>
            {/* //! Cambiar el estilo de clear cart button y si se puede agregarle icono  */}
            <SummaryButton small onClick={clear}>
              <MdRemoveShoppingCart />
              Clear cart
            </SummaryButton>
            <HeaderListCart>
              <p>Product detail</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Total price</p>
            </HeaderListCart>
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
            <button onClick={navigateToShop}>
              <MdOutlineKeyboardBackspace /> Continue shopping
            </button>
          </ItemListCart>
          <CheckoutInfo>
            <CheckoutTitle>Order summary</CheckoutTitle>
            <WrapperSummaryInfo>
              <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
              <CheckoutSubtitle>
                $<small>US </small>
                {subTotalPrice}
              </CheckoutSubtitle>
            </WrapperSummaryInfo>
            <WrapperSummaryInfo>
              <CheckoutSubtitle>Shipping</CheckoutSubtitle>
              {/* <SelectShipping> */}
              <SelectShipping />
              {/* <option>Standard Delivery - $us 50</option>
                <option>Same Day Delivery - $us 100</option>
                <option>Overnight Shipping Services - $us 175</option>
                <option>Express Delivery - $us 200</option> */}
              {/* </SelectShipping> */}
            </WrapperSummaryInfo>

            <WrapperSummaryInfo>
              <CheckoutSubtitle>Promo code</CheckoutSubtitle>
              <WrapperSummaryInfo flexStart>
                <InputCode value={promoCode} onChange={handleInput} />
                <SummaryButton small onClick={checkPromoCode}>
                  Apply
                </SummaryButton>
              </WrapperSummaryInfo>
              {promoAlert && <p>Promotional code applied!</p>}
            </WrapperSummaryInfo>

            <WrapperSummaryInfo>
              <CheckoutSubtitle>Total cost</CheckoutSubtitle>
              <CheckoutSubtitle>
                $<small>US</small> {subTotalPrice}
              </CheckoutSubtitle>
            </WrapperSummaryInfo>
            <SummaryButton>Checkout</SummaryButton>
          </CheckoutInfo>
        </WrapperCart>
      )}
    </Container>
  );
};

export default CartContainer;
