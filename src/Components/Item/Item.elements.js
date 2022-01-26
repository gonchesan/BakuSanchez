import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ItemBody = styled.div`
  position: relative;
  width: 100%;
  height: 73%;
  overflow: hidden;
`;

export const LikeButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-35%, 35%);
  background-color: #eeeeee;
  color: #cbcbcb;
  border: none;
  outline: none;
  height: 36px;
  width: 36px;
  font-size: 17px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  z-index: 99;
`;

export const BadgeCard = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transform: translate(25%, 75%);
  background-color: #f54457;
  padding: 4px 12px;
  z-index: 99;
  color: #fdfcfd;
  font-size: 12px;
  border-radius: 2px;
`;

export const ItemFooter = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 8px 12px;
  border-top: 1px solid #d7d1d4;
`;

export const CardDetail = styled.div`
  display: flex;
  width: 100%;
`;

export const Tittle = styled.p`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
  display: -webkit-box;
  line-height: 18px;
  max-height: 48px;
  color: #3a3a3a;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceDetail = styled.p`
  display: inline-block;
  white-space: nowrap;
  color: #db394a;
  width: 40%;
  font-weight: 800;
  padding-top: 12px;
  text-align: end;
`;
