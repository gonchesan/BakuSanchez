import styled from "styled-components";

export const WrapperCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderListCart = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;
  /* background-color: mediumseagreen; */

  & p {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.mediumBlack};
    opacity: 0.87;

    &:nth-child(1) {
      width: 250px;

      white-space: nowrap;
    }
    &:nth-child(2) {
      width: 40px;
    }
    &:nth-child(3) {
      width: 30px;
    }
    &:nth-child(4) {
      width: 120px;
      white-space: nowrap;
    }
  }
`;

export const ItemListCart = styled.div`
  /* background-color: lightskyblue; */
  width: 65%;
`;

export const CheckoutTitle = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.black};
`;

export const CheckoutSubtitle = styled.p`
  display: block;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.mediumBlack};
  opacity: 0.87;
`;

export const CheckoutInfo = styled.div`
  width: 35%;
  height: 70vh;
  padding: 8px 16px;
  display: grid;
  background-color: lightsalmon;
  grid-template-columns: repeat(2, fr);
`;
