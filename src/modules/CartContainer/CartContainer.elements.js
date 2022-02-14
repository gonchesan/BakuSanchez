import styled from "styled-components";
import { Button } from "../../globalStyle";

export const WrapperCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

export const HeaderListCart = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;

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
  width: 65%;
`;

export const ContainerCartItem = styled.div`
  width: 100%;
  height: 360px;
  overflow-y: auto;
`;
