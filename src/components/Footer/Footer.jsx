import React from "react";
import {
  FooterItem,
  SocialMediaContainer,
  WrapperFooter,
} from "./Footer.elements";
import { ReactComponent as Logo } from "../../assets/images/logo-Baku.svg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <WrapperFooter>
      <FooterItem>
        <Logo style={{ height: "100px" }} />
        <SocialMediaContainer>
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTwitterSquare />
        </SocialMediaContainer>
      </FooterItem>
      <FooterItem>About us</FooterItem>
      <FooterItem>Contact us</FooterItem>
      <FooterItem>Sign uf for updates </FooterItem>
      <FooterItem>
        &copy; {new Date().getFullYear()} Baku ecommerce. All Rights Reserved
      </FooterItem>
    </WrapperFooter>
  );
};

export default Footer;
