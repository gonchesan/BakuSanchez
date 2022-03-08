import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import CartWidget from "../CartWidget/CartWidget";
import UserWidget from "../UserWidget/UserWidget";
import Logo from "../../assets/images/logo-Baku.svg";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
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

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setRouteActive("/");
    } else if (location.pathname === "/cart") {
      setRouteActive("/cart");
    } else if (location.pathname.includes("/shop")) {
      setRouteActive("/shop");
    } else if (location.pathname === "/contact-us") {
      setRouteActive("contact-us");
    } else if (location.pathname === "/about-us") {
      setRouteActive("about-us");
    }
  }, [location.pathname]);

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
          <Link onClick={closeMobileMenu} to="/">
            <NavLogo src={Logo} alt="image logo" />
          </Link>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            <WidgetContainer>
              <WidgetItemBtn>
                <UserWidget />
                <label>See Profile</label>
              </WidgetItemBtn>
            </WidgetContainer>
            <WidgetContainer>
              <WidgetItemBtn to="/cart" name="/cart" onClick={closeMobileMenu}>
                <CartWidget />
                <label>View Cart</label>
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
              <StyledNavLink
                activeclassname={toString(routeActive === "contact-us")}
                to="/contact-us"
                name="contact-us"
                onClick={closeMobileMenu}
              >
                Contact us
              </StyledNavLink>
            </NavItem>
            <NavItem active={routeActive === "about-us"}>
              <StyledNavLink
                activeclassname={toString(routeActive === "about-us")}
                to="/about-us"
                name="about-us"
                onClick={closeMobileMenu}
              >
                About us
              </StyledNavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
