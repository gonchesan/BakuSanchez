import styled from "styled-components";

export const ItemCountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ isDetailView }) => isDetailView && "column"};
  margin: 8px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ isDetailView }) => isDetailView && "10px 0"};

  & p {
    margin: 0px 16px;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textGray};
  }
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: #d31726;
  width: ${({ isDetailView }) => isDetailView && "100%"};
  margin: ${({ isDetailView }) => isDetailView && "10px 0"};
  color: #f8f8f8;
  font-size: 20px;
  outline: none;
  padding: ${({ isDetailView }) => (isDetailView ? "9px" : "6px")};
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  z-index: 100;

  & svg {
    background-color: ${({ isDetailView }) =>
      isDetailView ? "transparent" : "#a1121e"};
    height: ${({ isDetailView }) => (isDetailView ? "18px" : "32px")};
    width: ${({ isDetailView }) => (isDetailView ? "18px" : "32px")};
    border-radius: ${({ isDetailView }) => (isDetailView ? "0px" : "4px")};
    padding: ${({ isDetailView }) => (isDetailView ? "0px" : "5px")};
  }

  & span {
    margin: 0 8px;
    font-size: 15px;
    font-weight: 500;
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
  padding: 4px 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.textGray};
  z-index: 100;
  cursor: default;
`;

export const CountButton = styled.button`
  background-color: ${({ theme }) => theme.black};
  color: #f8f8f8;
  height: 28px;
  width: 28px;
  text-align: center;
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
