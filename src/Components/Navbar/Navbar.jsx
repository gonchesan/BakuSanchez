import React, { useEffect, useState } from "react";

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
  MobileIcon,
  WidgetItemBtn,
  WidgetContainer,
  DropdownMenu,
  DropdownItem,
  DropdownItemBtn,
} from "./Navbar.elements";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [routeActive, setRouteActive] = useState("/");
  const [category, setCategory] = useState("");

  let navigate = useNavigate();
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = (event) => {
    setRouteActive(event.target.name);
    if (routeActive === "shop/figures") {
      setCategory("figures");
    } else if (routeActive === "shop/plushies") {
      setCategory("plushies");
    } else if (routeActive === "shop/manga") {
      setCategory("manga");
    }

    setClick(false);
  };

  useEffect(() => {
    if (category === "figures") {
      navigate(`shop/category/${category}`);
    } else if (category === "plushies") {
      navigate(`shop/category/${category}`);
    } else if (category === "manga") {
      navigate(`shop/category/${category}`);
    } else {
      navigate(`${routeActive}`);
    }
  }, [routeActive]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={Logo} alt="image logo" />
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            <WidgetContainer>
              <WidgetItemBtn>
                <CartWidget />
              </WidgetItemBtn>
            </WidgetContainer>
            <WidgetContainer>
              <WidgetItemBtn>
                <UserWidget />
              </WidgetItemBtn>
            </WidgetContainer>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <Nav secondary>
        <NavbarContainer secondary>
          <NavMenu click={click}>
            <NavItem active={routeActive === "/"}>
              <NavItemBtn
                name="/"
                active={routeActive === "/"}
                onClick={closeMobileMenu}
              >
                Home
              </NavItemBtn>
            </NavItem>
            <NavItem
              active={routeActive === "shop" || routeActive?.includes("shop")}
            >
              <NavItemBtn
                active={routeActive === "shop" || routeActive?.includes("shop")}
                name="shop"
                onClick={closeMobileMenu}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Shop
                <DropdownMenu isHovered={hover}>
                  <DropdownItem>
                    <DropdownItemBtn
                      onClick={closeMobileMenu}
                      name="shop/category/figures"
                    >
                      Figure & Dolls
                    </DropdownItemBtn>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItemBtn
                      onClick={closeMobileMenu}
                      name="shop/category/plushies"
                    >
                      Plushies
                    </DropdownItemBtn>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItemBtn
                      onClick={closeMobileMenu}
                      name="shop/category/manga"
                    >
                      Mangas
                    </DropdownItemBtn>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItemBtn
                      onClick={closeMobileMenu}
                      name="shop/category/clothing"
                    >
                      Clothing
                    </DropdownItemBtn>
                  </DropdownItem>
                </DropdownMenu>
              </NavItemBtn>
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
