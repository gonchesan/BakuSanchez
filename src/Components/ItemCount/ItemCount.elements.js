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

export const StockDetail = styled.p`
  display: inline-block;
  color: ${({ theme }) => `${theme.red} !important`};
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
