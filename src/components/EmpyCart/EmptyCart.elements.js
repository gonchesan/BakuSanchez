import styled from "styled-components";
import { ButtonOutline } from "../../globalStyle";

export const Illustration = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const EmpyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  text-align: center;
  margin: 0 auto;
  width: 50%;

  & h4 {
    color: ${({ theme }) => theme.crimson};
  }

  & p {
    color: ${({ theme }) => theme.mediumBlack};
    display: inline-block;
    width: 50%;
    margin: 1rem auto;
  }

  & ${ButtonOutline} {
    width: 30%;
    margin: 0 auto;
  }
`;
