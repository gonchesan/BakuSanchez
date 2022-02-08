import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyle";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: ${({ secondary }) => (secondary ? "60px" : "0")};
  height: ${({ secondary }) => (secondary ? "40px" : "60px")};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.darkSlategray : theme.white};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: ${({ secondary }) =>
    secondary ? "flex-end" : "space-between"};
  align-items: center;
  height: 65px;

  ${Container}
`;

export const NavLogo = styled.img`
  height: 56px;
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
  position: relative;
  height: 100%;
  padding: 0 20px;
  background-color: ${({ active, theme }) =>
    active ? theme.red : "transparent"};
  margin: 0px 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.red};
  }

  @media screen and (max-width: 960px) {
    margin: 18px 0;
  }
`;

export const DropdownMenu = styled.ul`
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  background-color: ${({ theme }) => theme.white};
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  transition: all 0.3s ease;
  position: absolute;
  top: 40px;
  left: 0;
`;

export const DropdownItem = styled.li`
  position: relative;
  height: 100%;

  width: 100%;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.red};
  margin: 0px 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.red};
  }
`;

export const DropdownLink = styled(Link)`
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
  font-size: inherit;
  text-transform: inherit;
  outline: none;
  border: none;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  background-color: inherit;
  color: inherit;
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  display: inline-block;
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  padding: 7px 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: ${({ activeClassName }) => (activeClassName ? "1" : "0.7")};
  outline: none;
  border: none;
  background-color: transparent;
  color: #fdfcfd;

  &:hover {
    opacity: 1;
  }
`;

export const NavItemBtn = styled.button`
  cursor: pointer;
  white-space: nowrap;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  padding: 7px 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: ${({ active }) => (active ? "1" : "0.7")};
  outline: none;
  border: none;
  background-color: transparent;
  color: #fdfcfd;

  &:hover {
    opacity: 1;
  }
`;

export const WidgetContainer = styled.li`
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0px 8px;

  @media screen and (max-width: 960px) {
    margin: 18px 0;
  }
`;

export const WidgetItemBtn = styled(NavItemBtn)`
  ${NavItemBtn}
  width: 100%;
  height: 100%;

  position: relative;
  color: ${({ theme }) => theme.gray};
  opacity: 1;
  & svg {
    width: 100%;
    height: 100%;
    padding: 4px;
  }
  & span {
    position: absolute;
    top: 10%;
    display: inline-block;
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
    font-size: 0.8rem;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    padding-top: 3px;
  }

  &:hover {
    opacity: 0.87;
  }
`;
