import styled, { createGlobalStyle } from "styled-components";
import { device } from "./device";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;

        /* width */
        &::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.outlineGray};
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.crimson};
          border-radius: 4px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: ${({ theme }) => theme.red};
        }
      }
    body{
        background-color: #F1F1F1;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Header = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 3rem;
  border-bottom: 2px solid #595f6a70;
  position: relative;
  color: ${({ theme }) => theme.mediumBlack};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme, secondary, isDetailView }) =>
    isDetailView && secondary ? theme.lightPink : theme.crimson};
  width: ${({ isDetailView }) => isDetailView && "100%"};
  margin: ${({ isDetailView }) => isDetailView && "0 0 8px 0"};
  color: ${({ theme, secondary, isDetailView }) =>
    isDetailView && secondary ? theme.red : theme.white};
  font-size: 20px;
  outline: none;
  padding: ${({ isDetailView }) => (isDetailView ? "10px" : "6px")};
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  z-index: 100;

  & svg {
    background-color: ${({ isDetailView }) =>
      isDetailView ? "transparent" : "#a1121e"};
    height: ${({ isDetailView }) => (isDetailView ? "18px" : "26px")};
    width: ${({ isDetailView }) => (isDetailView ? "18px" : "26px")};
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

  @media ${device.tablet} {
    width: ${({ isDetailView }) => (isDetailView ? "100%" : "11rem")};
    justify-content: ${({ isDetailView }) =>
      isDetailView ? "center" : "start"};
    margin: ${({ isDetailView }) =>
      isDetailView ? "0 0 8px 0 " : "0rem 0.4rem 0rem 0.7rem"};
    & svg {
      margin: 0rem 0.4rem 0rem 0.7rem;
    }
  }
`;

export const ButtonOutline = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  margin: 0 0 8px 0;
  color: ${({ theme, secondary }) => (secondary ? theme.red : theme.white)};
  font-size: 0.95rem;
  outline: none;
  padding: 6px 14px 6px 4px;
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, secondary }) => (secondary ? theme.red : theme.white)};
  z-index: 100;

  & svg {
    background-color: transparent;
    height: 26px;
    width: 26px;
    border-radius: 4px;
    padding: 4px;
  }

  &:hover {
    transition: 0.3s all;
    background-color: ${({ theme }) => theme.lightPink};
  }
`;

export const ButtonLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.crimson};
  font-size: 0.95rem;
  outline: none;
  padding: 6px 14px 6px 4px;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  z-index: 100;
  opacity: 0.7;

  & svg {
    background-color: transparent;
    height: 26px;
    width: 26px;
    border-radius: 4px;
    padding: 4px;
  }

  &:hover {
    transition: 0.3s all;
    opacity: 1;
    transform: translateX(-2px);
  }
`;

export default GlobalStyle;
