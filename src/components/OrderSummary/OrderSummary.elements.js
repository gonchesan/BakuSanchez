import { Field, Form } from "formik";
import styled from "styled-components";
import { Button } from "../../globalStyle";
import { device } from "../../device";

export const CheckoutInfo = styled.div`
  width: 35%;
  margin: 0 0 0 30px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 8px;

  @media ${device.tablet} {
    width: 45%;
    position: absolute;
    right: ${({ isOpen }) => (isOpen ? "0" : "-335px")};
    z-index: 105;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.3s linear;
  }
  @media ${device.mobileM} {
    width: 80%;
    right: ${({ isOpen }) => (isOpen ? "-294px" : "-4px")};
  }
`;

export const WrapperSummaryInfo = styled.div`
  display: flex;
  justify-content: ${({ flexStart }) =>
    flexStart ? "flex-start" : "space-between"};

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(6),
  &:nth-child(7) {
    flex-direction: column;
  }

  & select {
    height: 2.5rem;
    margin-right: 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.outlineGray};
    padding-left: 10px;
    font-size: 1rem;
  }
`;

export const InputCode = styled.input`
  height: 2.5rem;
  margin-right: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  padding-left: 10px;
  font-size: 1rem;
  width: 60%;
`;

export const StyledField = styled(Field)`
  height: 2.5rem;
  margin-right: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  padding-left: 10px;
  font-size: 1rem;
`;

export const StyledForm = styled(Form)`
  & div {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
      flex-direction: column;
    }

    &:nth-child(5) {
      & div {
        flex-direction: row;
      }
      margin-bottom: 4px;
    }

    &:nth-child(6) {
      flex-direction: row;
    }
  }
`;

export const SummaryButton = styled(Button)`
  font-size: 0.9rem;
  height: 2.5rem;
  width: ${({ small }) => (small ? "100px" : "100%")};
  justify-content: center;
`;

export const AlertPromo = styled.p`
  margin: 4px 0 0px 0;
  padding-left: 4px;
  color: ${({ theme, error }) => (error ? theme.red : theme.darkSlategray)};
  font-weight: 600;
  font-size: 0.8rem;
  opacity: ${({ showAlert }) => (showAlert ? "1" : "0")};
`;

export const CheckoutTitle = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.black};
`;

export const CheckoutSubtitle = styled.p`
  display: block;
  text-transform: uppercase;
  font-weight: 700;
  height: 1rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.mediumBlack};
  opacity: 0.87;
  margin: 8px 0;

  &:nth-child(2) {
    text-align: right;
    color: ${({ theme }) => theme.red};
    font-family: "Oswald", sans-serif;
    line-height: 0.5rem;
    font-size: 1.4rem;
    &::before {
      content: "$ ";
      font-size: 1.2rem;
    }
  }
`;

export const DetailButton = styled.button`
  position: absolute;
  top: 0;
  left: -10%;
  background-color: ${({ theme }) => theme.lightGray};
  outline: none;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px 0 0 8px;

  & svg {
    width: 100%;
    height: 100%;
    padding: 8px;
    color: ${({ theme }) => theme.mediumBlack};
  }

  @media ${device.mobileM} {
    left: -12%;
  }
`;
