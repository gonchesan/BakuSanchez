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
  background-color: #f54457;
  color: #f8f8f8;
  font-size: 20px;
  outline: none;
  padding: 6px;
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid #a39595;

  & span {
    margin: 0 8px;
    font-size: 15px;
  }

  &:hover {
    transition: 0.3s all;
    background-color: #db394a;
  }
  &:disabled {
    background-color: #f8979e;
    border: 1px solid #ccc8c8;
    color: #e7e7e7d3;
  }
`;

export const CounterNumber = styled.span`
  background-color: #fdfcfd;
  border-top: 1px solid #f54457;
  border-bottom: 1px solid #f54457;
  padding: 4px 14px;
  color: #595f6a;
`;

export const CountButton = styled.button`
  background-color: #f54457;
  color: #f8f8f8;
  padding: 2px 12px;
  text-align: center;
  border-radius: ${({ left }) => (left ? "6px 0 0 6px" : "0 6px 6px 0")};
  outline: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.3s all;

  &:disabled {
    background-color: #f8979e;
  }
`;
