import React from "react";

//Styled Components
import {
  ButtonSubscribe,
  FooterItem,
  InputSubscribe,
  LinksContainer,
  SocialMediaContainer,
  WrapperFooter,
} from "./Footer.elements";

//Icons
import { ReactComponent as Logo } from "../../assets/images/logo-Baku.svg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  let arrayLinks = [
    ["About Us", "More Search", "Blog", "Testimonials", "Events"],
    ["Services", "Supports", "Terms & Condition", "Privacy Policy"],
  ];
  return (
    <WrapperFooter>
      <FooterItem>
        <Logo style={{ height: "100px" }} />
        <SocialMediaContainer>
          <button>
            <FaFacebookSquare />
          </button>
          <button>
            <FaInstagramSquare />
          </button>
          <button>
            <FaTwitterSquare />
          </button>
        </SocialMediaContainer>
      </FooterItem>
      <FooterItem>
        <LinksContainer>
          <h4>Information</h4>
          {arrayLinks[0].map((element, index) => {
            return <button key={index}>{element}</button>;
          })}
        </LinksContainer>
      </FooterItem>
      <FooterItem>
        <LinksContainer>
          <h4>Helpful Links</h4>
          {arrayLinks[1].map((element, index) => {
            return <button key={index}>{element}</button>;
          })}
        </LinksContainer>
      </FooterItem>
      <FooterItem>
        <LinksContainer>
          <h4>Subscribe for updates</h4>
          <InputSubscribe type="text" />
          <ButtonSubscribe>
            <HiMail />
            Subscribe
          </ButtonSubscribe>
        </LinksContainer>
      </FooterItem>
      <FooterItem>
        &copy; {new Date().getFullYear()} Baku ecommerce. All Rights Reserved
      </FooterItem>
    </WrapperFooter>
  );
};

export default Footer;
