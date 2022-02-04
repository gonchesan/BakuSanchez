import React, { useContext, useEffect } from "react";
import ItemCart from "../../components/ItemCart/ItemCart";
import { Container } from "../../globalStyle";
import { CartContext } from "../../context/CartContext";
import { useOutletContext } from "react-router-dom";
import {
  CheckoutInfo,
  CheckoutSubtitle,
  CheckoutTitle,
  HeaderListCart,
  ItemListCart,
  WrapperCart,
} from "./CartContainer.elements";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  const [isLoading, setIsLoading] = useOutletContext();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [cart]);

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Cart</h2>
      {cart.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>
          There should be products here, but...
        </h4>
      ) : (
        <WrapperCart>
          <ItemListCart>
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
          </ItemListCart>
          <CheckoutInfo>
            <CheckoutTitle>Order summary</CheckoutTitle>
            <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
            <CheckoutSubtitle>(precio de los items total)</CheckoutSubtitle>
            <CheckoutSubtitle>Shipping</CheckoutSubtitle>
            <p>Un select option here.</p>
            <CheckoutSubtitle>Promo code</CheckoutSubtitle>
            <input />
            <button>Apply</button>
            <hr />
            <CheckoutSubtitle>Total cost</CheckoutSubtitle>
            <CheckoutSubtitle>$Mucha platita$</CheckoutSubtitle>
            <button>Checkout</button>
          </CheckoutInfo>
        </WrapperCart>
      )}
    </Container>
  );
};

export default CartContainer;
