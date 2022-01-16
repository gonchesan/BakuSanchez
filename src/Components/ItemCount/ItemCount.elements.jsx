import styled from "styled-components";

export const ItemCountContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartButton = styled.button`
  cursor: pointer;
  position: relative;
  background-color: #f1f1f1;
  color: #f54457;
  font-size: 20px;
  outline: none;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid #a39595;

  &:hover {
    transition: 0.3s all;
    transform: scale(1.1);
  }
`;

export const CounterNumber = styled.span`
  background-color: #fdfcfd;
  border-top: 1px solid #f54457;
  border-bottom: 1px solid #f54457;
  padding: 6px 24px;
  color: #595f6a;
`;

export const CountButton = styled.button`
  background-color: #f54457;
  color: #f8f8f8;
  padding: 4px 12px;
  text-align: center;
  border-radius: ${({ left }) => (left ? "12px 0 0 12px" : "0 12px 12px 0")};
  outline: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.3s all;

  &:disabled {
    background-color: #f8979e;
  }
`;
