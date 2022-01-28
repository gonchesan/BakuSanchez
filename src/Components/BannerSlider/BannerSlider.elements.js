import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const ButtonContainers = styled.div`
  position: absolute;
  top: 45%;
  padding: 0 60px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonSlider = styled.button`
  background-color: #595f6a87;
  border: none;
  outline: none;
  width: 48px;
  height: 48px;
  text-align: center;
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.3s;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  & svg {
    height: 100%;
    width: 100%;
    padding: 12px;
  }
`;
