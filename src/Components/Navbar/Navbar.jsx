import React, { useState } from "react";

//Source and Icons
import Logo from "../../assets/images/logo-Baku.svg";
import { FaBars, FaTimes } from "react-icons/fa";

//Widgets and others components
import CartWidget from "../CartWidget/CartWidget";
import UserWidget from "../UserWidget/UserWidget";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavItemBtn,
  StyledNavLink,
  MobileIcon,
  WidgetItemBtn,
  WidgetContainer,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
} from "./Navbar.elements";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [routeActive, setRouteActive] = useState("/");

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = (event) => {
    setRouteActive(event.target.name);
    setHover(false);

    setClick(false);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link onClick={closeMobileMenu} name="/" to="/">
            <NavLogo src={Logo} alt="image logo" />
          </Link>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            <WidgetContainer>
              <WidgetItemBtn>
                <UserWidget />
              </WidgetItemBtn>
            </WidgetContainer>
            <WidgetContainer>
              <WidgetItemBtn>
                <CartWidget />
              </WidgetItemBtn>
            </WidgetContainer>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <Nav secondary>
        <NavbarContainer secondary>
          <NavMenu click={click}>
            <NavItem active={routeActive === "/"}>
              <StyledNavLink
                activeClassName={routeActive === "/" || routeActive === "logo"}
                to="/"
                name="/"
                onClick={closeMobileMenu}
              >
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem
              active={routeActive === "shop" || routeActive?.includes("shop")}
            >
              <StyledNavLink
                to="/shop"
                onClick={closeMobileMenu}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                name="shop"
                activeClassName={
                  routeActive === "shop" || routeActive?.includes("shop")
                }
              >
                Shop
                <DropdownMenu isHovered={hover}>
                  <DropdownItem>
                    <DropdownLink
                      onClick={closeMobileMenu}
                      name="shop/category/figures"
                      to="shop/category/figures"
                    >
                      Figure & Dolls
                    </DropdownLink>
                  </DropdownItem>

                  <DropdownItem>
                    <DropdownLink
                      onClick={closeMobileMenu}
                      name="shop/category/plushies"
                      to="shop/category/plushies"
                    >
                      Plushies
                    </DropdownLink>
                  </DropdownItem>

                  <DropdownItem>
                    <DropdownLink
                      onClick={closeMobileMenu}
                      name="shop/category/manga"
                      to="shop/category/manga"
                    >
                      Mangas
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownLink
                      onClick={closeMobileMenu}
                      name="shop/category/clothing"
                      to="shop/category/clothing"
                    >
                      Clothing
                    </DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              </StyledNavLink>
            </NavItem>
            <NavItem active={routeActive === "contact-us"}>
              <NavItemBtn
                onClick={closeMobileMenu}
                active={routeActive === "contact-us"}
                name="contact-us"
              >
                Contact us
              </NavItemBtn>
            </NavItem>
            <NavItem active={routeActive === "blog"}>
              <NavItemBtn
                onClick={closeMobileMenu}
                active={routeActive === "blog"}
                name="blog"
              >
                Blog
              </NavItemBtn>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
