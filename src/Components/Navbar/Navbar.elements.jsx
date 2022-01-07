import styled from "styled-components";
import { Button, Container } from "../../globalStyle";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 65px;
  background-color: #fdfcfd;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;

  ${Container}
`;

export const NavLogo = styled.img`
  height: 64px;
  cursor: pointer;
  justify-self: flex-start;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  @media screen and (max-width: 960px) {
    position: absolute;
    width: 100%;
    height: 90vh;
    top: 70px;
    left: ${({ click }) => (click ? "0%" : "-100%")};
    background-image: linear-gradient(to top, #f0e6e6 0%, #f5eeee 100%);
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  margin: 0px 8px;
  @media screen and (max-width: 960px) {
    margin: 18px 0;
  }
`;

export const NavItemBtn = styled.button`
  cursor: pointer;
  white-space: nowrap;
  padding: 10px 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: ${({ active }) => (active ? "1" : "0.7")};
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ active }) => (active ? "#DB394A" : "#595F6A")};
  border-bottom: 2px solid
    ${({ active }) => (active ? "#DB394A" : "transparent")};
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonLogin = styled(Button)`
  position: relative;
  background: transpartent;
  text-transform: uppercase;
  color: #f54457;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(253, 243, 244, 0.3);
    color: #df253b;
  }

  &:before {
    display: block;
    content: "";
    top: 0;
    left: -10px;
    position: absolute;
    height: 100%;
    border-left: 4px solid #df253b;
  }

  @media screen and (max-width: 960px) {
    &:before {
      display: none;
    }
  }
`;

export const ButtonSignUp = styled(Button)`
  background-color: #f54457;
  background: linear-gradient(to bottom, #f1404e 5%, #df253b 100%);
  box-shadow: inset 0px 1px 0px 0px #cf866c;
  color: #f8f8f8;
  text-transform: uppercase;
  font-size: 0.9rem;
  border: 1px solid transparent;
  &:hover {
    background: linear-gradient(to bottom, #df253b 5%, #f1404e 100%);
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
