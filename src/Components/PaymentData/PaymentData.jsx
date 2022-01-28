import React from "react";

import {
  MdLocalShipping,
  MdSecurity,
  MdLoyalty,
  MdWifiProtectedSetup,
} from "react-icons/md";

import { Container } from "../../globalStyle";
import {
  CardsPaymentData,
  PaymentDataInfo,
  WrapperPaymentData,
} from "./PaymentData.elements";

const PaymentData = () => {
  return (
    <Container>
      <WrapperPaymentData>
        <CardsPaymentData>
          <MdLocalShipping />
          <PaymentDataInfo>
            <h4>Free shipping</h4>
            <p>from $100</p>
          </PaymentDataInfo>
        </CardsPaymentData>
        <CardsPaymentData>
          <MdWifiProtectedSetup />
          <PaymentDataInfo>
            <h4>90 days</h4>
            <p>for free return</p>
          </PaymentDataInfo>
        </CardsPaymentData>
        <CardsPaymentData>
          <MdSecurity />
          <PaymentDataInfo>
            <h4>Payment</h4>
            <p>Secure system</p>
          </PaymentDataInfo>
        </CardsPaymentData>
        <CardsPaymentData>
          <MdLoyalty />
          <PaymentDataInfo>
            <h4>Only best</h4>
            <p>brands</p>
          </PaymentDataInfo>
        </CardsPaymentData>
      </WrapperPaymentData>
    </Container>
  );
};

export default PaymentData;
