import styled from "styled-components";

export const OverlaySpinner = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  z-index: 999;
`;

export const SpinnerWrapper = styled.div`
  z-index: 999999;

  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & span {
    text-transform: uppercase;
    position: absolute;
    top: 105px;
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 9px;
    color: ${({ theme }) => theme.black};
    left: 45%;
    z-index: 999999;
  }
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  transform-origin: 50%;
  left: 49%;
`;
