import styled from "styled-components";

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
  width: 40%;
  padding: 0 2rem;
`;

export const TittleDetail = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  color: #595f6a;
`;

export const PriceDetail = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  color: #db394a;
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
  padding: 4px 16px;
  border-radius: 14px;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 20px;
  margin: 0.25rem 0;
  color: #595f6a;
`;
