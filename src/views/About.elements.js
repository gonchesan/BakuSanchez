import styled from "styled-components";
import { device } from "../device";

export const WrapperAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  @media ${device.mobileM} {
    flex-direction: column;
  }
`;

export const SectionAbout = styled.div`
  margin-top: 2rem;
  width: 50%;
  position: relative;

  & img {
    width: 35rem;
    height: 25rem;
    object-fit: cover;
    float: right;
    margin-right: 2rem;
    border-radius: 4px;
    position: relative;
  }

  @media ${device.tablet} {
    & img {
      width: 20rem;
    }
  }
  @media ${device.mobileM} {
    margin-top: 0.5rem;
    width: 100%;
    & img {
      position: absolute;
      width: 22rem;
      height: 85vh;
      mix-blend-mode: darken;
      margin-right: 0;
      opacity: 0.1;
    }
  }
`;

export const TextAbout = styled.p`
  color: ${({ theme }) => theme.gray};
  font-size: 0.97rem;
  font-weight: 500;
  margin-top: 2.5rem;
  &:nth-child(1) {
    margin-top: 0;
  }

  @media ${device.tablet} {
    margin-top: 1.5rem;
  }
`;
