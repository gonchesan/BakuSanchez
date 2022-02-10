import styled from "styled-components";

export const WrapperSelect = styled.div`
  display: flex;
  justify-content: start;
  align-content: center;
  position: relative;
`;

export const SelectedOptions = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 80%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  display: flex;
  align-content: center;

  & p {
    margin: auto 0;
    padding-left: 10px;
    width: 80%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ButtonArrow = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.mediumBlack};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  outline: none;
  width: 40px;
  height: 40px;
  & svg {
    width: 60%;
    height: 60%;
  }
`;

export const Options = styled.ul`
  list-style: none;
  decoration: none;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  z-index: 999;
  top: 40px;
  border-radius: 0 0 6px 6px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const Option = styled.li`
  padding: 4px 0 6px 10px;
  color: ${({ theme }) => theme.mediumBlack};
  z-index: 999;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.crimson};
    color: ${({ theme }) => theme.white};
  }
`;
