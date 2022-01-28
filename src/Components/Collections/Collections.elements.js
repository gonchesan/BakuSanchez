import styled from "styled-components";

export const WrapperCollection = styled.div`
  height: 70vh;
  margin: 1.5rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.45) 100%
  );
  transition: all 0.3s;
  opacity: 0;
`;

export const CardCollection = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(1);

  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  &:nth-child(2) {
    grid-row: 2;
  }
  &:nth-child(6) {
    grid-row: 1 /3;
    grid-column: 4;
  }

  &:hover {
    background: linear-gradient(45deg, #df253b -12.57%, #f1404e 118.13%);

    & ${Overlay} {
      opacity: 1;
    }
    & img {
      transition: all 0.5s;
      transform: scale(1.1);
    }

    & h5 {
      transform: translateY(-40px);
      opacity: 1;
    }
  }
  & img {
    margin: 0 auto;
    width: 80%;
    height: 80%;
    object-fit: contain;
  }

  & h5 {
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    text-transform: uppercase;
    opacity: 0;
  }
`;