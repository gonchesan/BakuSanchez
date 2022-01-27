import styled from "styled-components";

export const ItemCountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: #d31726;
  color: #f8f8f8;
  font-size: 20px;
  outline: none;
  padding: 6px;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  z-index: 100;

  & svg {
    background-color: #a1121e;
    height: 32px;
    width: 32px;
    border-radius: 4px;
    padding: 5px;
  }

  & span {
    margin: 0 8px;
    font-size: 15px;
  }

  &:hover {
    transition: 0.3s all;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    background-color: #a97a80;
    cursor: default;

    & svg {
      opacity: 0.4;
      background-color: #d31726;
    }
  }
`;

export const CounterNumber = styled.span`
  background-color: #fdfcfd;
  /* border-top: 1px solid #f54457;
  border-bottom: 1px solid #f54457; */
  padding: 4px 14px;
  font-weight: 700;
  color: #595f6a;
  z-index: 100;
  cursor: default;
`;

export const CountButton = styled.button`
  background-color: #191919;
  color: #f8f8f8;
  height: 28px;
  width: 28px;
  text-align: center;
  border-radius: ${({ left }) => (left ? "6px 0 0 6px" : "0 6px 6px 0")};
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.3s all;
  z-index: 100;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
