import styled from "styled-components";
import { device } from "../../device";

export const WrapperCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;

  @media ${device.mobileM} {
    min-height: 630px;
  }
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
  @media ${device.tablet} {
    & p {
      &:nth-child(1) {
        width: 100px;
      }
      &:nth-child(2) {
        width: 50px;
      }
      &:nth-child(3) {
        width: 15px;
      }
      &:nth-child(4) {
        width: 250px;
      }
    }
  }
  @media ${device.mobileM} {
    justify-content: space-around;

    & p {
      &:nth-child(1) {
        width: auto;
      }
      &:nth-child(2) {
        width: auto;
      }
      &:nth-child(3) {
        display: none;
      }
      &:nth-child(4) {
        width: auto;
        margin-right: 1rem;
      }
    }
  }
`;

export const ItemListCart = styled.div`
  width: 65%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ContainerCartItem = styled.div`
  width: 100%;
  height: 360px;
  overflow-y: auto;
  overflow-x: hidden;

  @media ${device.mobileM} {
    height: 420px;
  }
`;
