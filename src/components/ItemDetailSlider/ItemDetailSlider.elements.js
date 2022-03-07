import styled from "styled-components";
import { device } from "../../device";

export const SliderContainer = styled.div`
  position: relative;
`;
export const ImageSelected = styled.img`
  float: right;
  width: calc(100% - 70px);
  animation: 1s fadeIn;

  @keyframes fadeIn {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Carrousel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100%;

  & img {
    opacity: 0.7;
    cursor: pointer;
    object-fit: cover;
    height: 80px;

    object-position: center;
    margin: 5px 0;
    transition: all 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    width: 3.75rem;

    & img {
      height: 3.75rem;
    }
  }
`;
