import styled from "styled-components";

export const WrapperPaymentData = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
`;

export const CardsPaymentData = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;

  & svg {
    width: 32px;
    height: 32px;
    margin: 0 20px;
    color: ${({ theme }) => theme.crimson};
  }
`;

export const PaymentDataInfo = styled.div`
  & h4 {
    color: ${({ theme }) => theme.crimson};
  }
  font-weight: 500;
  color: ${({ theme }) => theme.textBlack};
`;
