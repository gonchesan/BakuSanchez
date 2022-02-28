import styled from "styled-components";

export const WrapperNotFound = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse;

  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`;

export const IllustrationNotFound = styled.div`
  width: 500px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const NotFoundText = styled.div`
  & h1 {
    font-family: "Oswald";
    text-transform: uppercase;
    font-weight: 400;
    color: ${({ theme }) => theme.crimson};
    margin-bottom: 1rem;
  }
  & p {
    color: ${({ theme }) => theme.mediumBlack};
    margin: 0.25rem auto;
  }
  & a {
    color: ${({ theme }) => theme.crimson};
    text-decoration: none;
  }
`;
