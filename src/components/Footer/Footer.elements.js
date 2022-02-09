import styled from "styled-components";

export const WrapperFooter = styled.div`
  background-color: ${({ theme }) => theme.lightGray};
  width: 100%;
  /* height: 250px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 0px;
`;

export const FooterItem = styled.div`
  background-color: ${({ theme }) => theme.red};
  /* margin: 20px; */
  &:nth-child(5) {
    background-color: ${({ theme }) => theme.mediumBlack};
    color: ${({ theme }) => theme.white};
    padding: 10px 0;
    font-size: 0.8rem;
    grid-column: 1/5;
    text-align: center;
    /* margin: auto 0; */
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80%;
  height: 2rem;
  margin: 0 auto;

  & svg {
    color: ${({ theme }) => theme.gray};

    margin: 0 8px;
    height: 100%;
    width: 24px;
  }
`;