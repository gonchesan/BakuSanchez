import styled from "styled-components";
import { device } from "../../device";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  margin-top: 0.5rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
`;
