import styled from "styled-components";
import { Button } from "../../globalStyle";
import { device } from "../../device";

export const WrapperItemCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  margin: 8px 0;

  //Price detail
  & p:nth-child(4) {
    display: block;
    width: 100px;
    white-space: nowrap;
    color: ${({ theme }) => theme.black};
    font-weight: 500;
    font-size: 0.9rem;
  }

  //Price subtotal
  & p:nth-child(5) {
    display: block;
    width: 100px;
    white-space: nowrap;
    color: ${({ theme }) => theme.crimson};
    font-weight: 600;
    font-size: 0.9rem;
  }
  @media ${device.tablet} {
    & p:nth-child(4) {
      margin-left: 0.5rem;
      width: 75px;
    }
    & p:nth-child(5) {
      margin-left: 1.5rem;
      width: 105px;
    }
  }
  @media ${device.mobileM} {
    & p:nth-child(4) {
      display: none;
    }
    & p:nth-child(5) {
      width: 45px;
      margin-left: 0.5rem;
    }
  }
`;

export const ImageItemCart = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  margin: 8px 0;
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  }
  @media ${device.mobileM} {
    width: 45px;
    height: 45px;
  }
`;

export const InfoItemCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;

  //Title
  & p:nth-child(1) {
    display: block;
    height: 38px;
    width: 200px;
    color: ${({ theme }) => theme.darkSlategray};
    font-size: 0.9rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  //Serie or author/illustrator
  & p:nth-child(2) {
    color: ${({ theme }) => theme.gray};
    opacity: 0.6;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    width: 10rem;
    & p:nth-child(1) {
      width: 150px;
    }
  }

  @media ${device.mobileM} {
    & p:nth-child(1) {
      margin-left: 0.5rem;
      width: 80px;
      height: 100%;
      font-size: 0.8rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & p:nth-child(2) {
      margin-left: 0.5rem;
      font-size: 0.75rem;
    }
  }
`;

export const ButtonRemoveItem = styled(Button)`
  background: transparent;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 110px;
`;
