import { Container } from "../../globalStyle";
import {
  CardsPaymentData,
  PaymentDataInfo,
  WrapperPaymentData,
} from "./PaymentData.elements";
import {
  MdLocalShipping,
  MdSecurity,
  MdLoyalty,
  MdWifiProtectedSetup,
} from "react-icons/md";

const PaymentData = () => {
  const infoPaymentData = [
    {
      logo: MdLocalShipping,
      title: "Free shipping",
      subtitle: "from $100",
    },
    { logo: MdSecurity, title: "90 days", subtitle: "for free return" },
    { logo: MdLoyalty, title: "Payment", subtitle: "Secure system" },
    { logo: MdWifiProtectedSetup, title: "Only best", subtitle: "brands" },
  ];

  return (
    <Container>
      <WrapperPaymentData>
        {infoPaymentData.map((element, index) => {
          const { logo, title, subtitle } = element;
          const Icon = logo;
          return (
            <CardsPaymentData key={index}>
              <Icon />
              <PaymentDataInfo>
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </PaymentDataInfo>
            </CardsPaymentData>
          );
        })}
      </WrapperPaymentData>
    </Container>
  );
};

export default PaymentData;
