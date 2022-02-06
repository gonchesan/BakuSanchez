import styled from "styled-components";
import { Button } from "../../globalStyle";
import { theme } from "../../theme";

export const WrapperCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderListCart = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;

}
  /* background-color: mediumseagreen; */

  & p {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.mediumBlack};
    opacity: 0.87;
    
    
    
    &:nth-child(1) {
      width: 250px;

      white-space: nowrap;
    }
    &:nth-child(2) {
      width: 40px;
    }
    &:nth-child(3) {
      width: 30px;
    }
    &:nth-child(4) {
      width: 120px;
      white-space: nowrap;
    }
  }
`;

export const ItemListCart = styled.div`
  /* background-color: lightskyblue; */
  width: 65%;
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
  margin-bottom: 8px;

  &:nth-child(2) {
    text-align: right;
  }
`;

export const WrapperSummaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 2px 0; */

  &:nth-child(2) {
    justify-content: ${({ flexStart }) => flexStart && "flex-start"};
  }
  &:nth-child(3) {
    flex-direction: column;
  }

  &:nth-child(4) {
    flex-direction: column;
  }
`;

// export const SelectShipping = styled.select`
//   height: 2.5rem;
//   width: 80%;
//   /* margin: 0 auto; */
// `;

export const InputCode = styled.input`
  height: 2.5rem;
  margin-right: 16px;
`;

export const SummaryButton = styled(Button)`
  font-size: 0.9rem;
  height: 2.5rem;
  width: ${({ small }) => (small ? "100px" : "100%")};
`;

export const CheckoutInfo = styled.div`
  width: 35%;
  height: 70vh;
  margin: 0 0 0 30px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 8px;
`;
