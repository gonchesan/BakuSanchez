import styled from "styled-components";

export const ToastWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 120px;
  right: ${({ visible }) => (visible ? "25px" : "0px")};
  max-width: 375px;
  overflow: hidden;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.greenBg};
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.greenOutline};
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.15s linear, right 0.3s;
  border-radius: 0.5rem;
  z-index: 999;
`;

export const BackgroundIcon = styled.div`
  margin: 0px 0.5rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.greenNotification};
  overflow: hidden;
  color: ${({ theme }) => theme.white};
  min-width: 38px;
  min-height: 38px;

  & svg {
    padding: 3px;
    overflow: hidden;
    color: ${({ theme }) => theme.white};
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

// export const ToastHeader = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0px 0.75rem;
//   color: ${({ theme }) => theme.mediumBlack};
//   /* background-color: rgba(255, 255, 255, 0.85); */
//   background-clip: padding-box;
//   /* border-bottom: 1px solid rgba(0, 0, 0, 0.05); */

//   & strong {
//     margin-right: auto !important;
//   }
// `;

export const ButtonClose = styled.div`
  padding: 0;
  text-align: center;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 4px;
  margin: 0px 0.75rem;
`;

export const ToastBody = styled.div`
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.textBlack};
`;
