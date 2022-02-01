import styled from "styled-components";
import { CartButton } from "../ItemCount/ItemCount.elements";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0;
`;
export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
export const InfoWrapper = styled.div`
  width: 35%;
  padding: 0 2rem;
`;

export const TittleDetail = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.gray};
`;

export const PriceDetail = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.red};
  letter-spacing: 0.2px;
  margin-bottom: 0.2rem;

  & span {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const StockDetail = styled.div`
  display: inline-block;
  background-color: #f54457;
  color: #fdfcfd;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 2px 14px;
  border-radius: 14px;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 24px;
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.textGray};
`;
