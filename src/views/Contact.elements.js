import styled from "styled-components";

export const WrapperForm = styled.div`
  background-color: #eff0f4;
  border: 2px solid #c9d3de;
  border-radius: 8px;
  display: flex;
  width: 70%;
  margin: 1.5rem auto;
`;

export const SectionContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: ${({ isLeft }) => (isLeft ? "60%" : "40%")};
  padding: 1.5rem;
  border-left: ${({ isRight }) => (isRight ? "2px solid #c9d3de" : "")};
`;

export const WrapperInputs = styled.div`
  margin-top: 1rem;
  display: flex;
`;

export const InputContact = styled.input`
  height: 2.5rem;
  margin-right: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  padding-left: 10px;
  font-size: 1rem;

  width: 90%;
`;

export const TextareaContact = styled.textarea`
  height: 5.5rem;
  margin-right: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  padding-left: 10px;
  font-size: 1rem;
  width: 100%;
  resize: none;
`;

export const ButtonContactSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.crimson} !important;
  margin: 1rem 0 8px 0;
  color: ${({ theme }) => theme.white} !important;
  font-size: 0.95rem;
  outline: none;
  padding: 8px 14px 8px 4px;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  width: 40%;
  z-index: 100;
  float: right;
`;

export const TitleContact = styled.p`
  color: ${({ theme }) => theme.mediumGray};
  font-size: 1.97rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const SubtitleContact = styled.p`
  color: ${({ theme }) => theme.gray};
  font-size: 0.97rem;
  font-weight: 500;
`;

export const ListInformationContact = styled.ul`
  border-top: 2px solid #c9d3de;
  border-bottom: 2px solid #c9d3de;
  list-style: none;
  margin: 2rem 0;
  padding: 1.5rem 0;

  & li {
    margin: 1.5rem 0;
    display: flex;
    justify-content: start;
    & svg {
      background-color: ${({ theme }) => theme.crimson};
      border-radius: 50%;
      padding: 2.5px;
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.white};
      margin-right: 0.5rem;
    }
  }
`;
