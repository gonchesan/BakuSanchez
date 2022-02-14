import styled from "styled-components";
import { Button } from "../../globalStyle";

export const CheckoutInfo = styled.div`
  width: 35%;
  margin: 0 0 0 30px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 8px;
`;

export const WrapperSummaryInfo = styled.div`
  display: flex;
  justify-content: ${({ flexStart }) =>
    flexStart ? "flex-start" : "space-between"};

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7) {
    flex-direction: column;
  }
`;

export const InputCode = styled.input`
  height: 2.5rem;
  margin-right: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  padding-left: 10px;
  font-size: 1rem;
`;

export const SummaryButton = styled(Button)`
  font-size: 0.9rem;
  height: 2.5rem;
  width: ${({ small }) => (small ? "100px" : "100%")};
`;

export const AlertPromo = styled.p`
  margin: 8px 0;
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
