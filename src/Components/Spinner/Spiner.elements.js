import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & span {
    text-transform: uppercase;
    position: absolute;
    top: 75px;
    font-family: "Courier New", Courier, monospace;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 9px;
    color: #3a3a3a;
    left: 23%;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  transform-origin: 50%;
  left: 50%;
  background-color: #db394a;
  animation: circle 0.5s alternate infinite ease;

  @keyframes circle {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }
`;

export const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  left: 50%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
`;
