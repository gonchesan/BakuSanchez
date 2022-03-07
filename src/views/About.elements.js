import styled from "styled-components";
import { device } from "../device";

export const WrapperAbout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
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
