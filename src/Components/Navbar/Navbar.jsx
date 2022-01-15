import React, { useState } from "react";

//Source and Icons
import Logo from "../../Assets/Images/logo-Baku.svg";
import { FaBars, FaTimes } from "react-icons/fa";

//Widgets and others components
import CartWidget from "../CartWidget/CartWidget";
import FavoriteWidget from "../FavoriteWidget/FavoriteWidget";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavItemBtn,
  MobileIcon,
  ButtonLogin,
  ButtonSignUp,
  WidgetItemBtn,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={Logo} alt="image logo" />
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem>
              <WidgetItemBtn>
                <CartWidget />
              </WidgetItemBtn>
            </NavItem>
            <NavItem>
              <WidgetItemBtn>
                <FavoriteWidget />
              </WidgetItemBtn>
            </NavItem>
            <NavItem>
              <ButtonLogin onClick={closeMobileMenu}>Log In</ButtonLogin>
            </NavItem>
            <NavItem>
              <ButtonSignUp onClick={closeMobileMenu}>Sign Up</ButtonSignUp>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <Nav secondary>
        <NavbarContainer secondary>
          <NavMenu click={click}>
            <NavItem>
              <NavItemBtn active onClick={closeMobileMenu}>
                Home
              </NavItemBtn>
            </NavItem>
            <NavItem>
              <NavItemBtn onClick={closeMobileMenu}>Figure & Dolls</NavItemBtn>
            </NavItem>
            <NavItem>
              <NavItemBtn onClick={closeMobileMenu}>Plushies</NavItemBtn>
            </NavItem>
            <NavItem>
              <NavItemBtn onClick={closeMobileMenu}>Books</NavItemBtn>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
