import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//Widgets and others components
import CartWidget from "../CartWidget/CartWidget";
import UserWidget from "../UserWidget/UserWidget";

//Source and Icons
import Logo from "../../assets/images/logo-Baku.svg";
import { FaBars, FaTimes } from "react-icons/fa";

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
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [routeActive, setRouteActive] = useState("/");

  let navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  //To apply active status to "Home" <>
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setRouteActive("/");
    }
  });
  // </>

  const navigateToCategories = (event) => {
    setRouteActive(event.target.name);
    setHover(false);
    setClick(false);
    navigate(`/${event.target.name}`);
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
          <Link onClick={closeMobileMenu} name="logo" to="/">
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
                // activeclassname={value.toString()}.
                activeclassname={toString(
                  routeActive === "/" || routeActive === "logo"
                )}
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
                activeclassname={toString(
                  routeActive === "shop" || routeActive?.includes("shop")
                )}
              >
                Shop
              </StyledNavLink>
              <DropdownMenu
                isHovered={hover}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <DropdownItem>
                  <button
                    onClick={navigateToCategories}
                    name="shop/category/figures"
                  >
                    Figure & Dolls
                  </button>
                </DropdownItem>

                <DropdownItem>
                  <button
                    onClick={navigateToCategories}
                    name="shop/category/plushies"
                  >
                    Plushies
                  </button>
                </DropdownItem>

                <DropdownItem>
                  <button
                    onClick={navigateToCategories}
                    name="shop/category/manga"
                  >
                    Mangas
                  </button>
                </DropdownItem>
                <DropdownItem>
                  <button
                    onClick={navigateToCategories}
                    name="shop/category/clothing"
                  >
                    Clothing
                  </button>
                </DropdownItem>
              </DropdownMenu>
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
