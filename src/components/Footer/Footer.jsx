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
    {
      title: "Information",
      links: ["About Us", "More Search", "Blog", "Testimonials", "Events"],
    },
    {
      title: "Helpful Links",
      links: ["Services", "Supports", "Terms & Condition", "Privacy Policy"],
    },
  ];

  let iconsName = [FaFacebookSquare, FaInstagramSquare, FaTwitterSquare];

  return (
    <WrapperFooter>
      <FooterItem>
        <Logo />
        <SocialMediaContainer>
          {iconsName.map((element, index) => {
            const Icon = element;
            return (
              <button key={index}>
                <Icon />
              </button>
            );
          })}
        </SocialMediaContainer>
      </FooterItem>
      {arrayLinks.map((element, index) => {
        const { title, links } = element;
        return (
          <FooterItem key={index}>
            <LinksContainer>
              <h4>{title}</h4>
              {links.map((link, idx) => {
                return <button key={idx}>{link}</button>;
              })}
            </LinksContainer>
          </FooterItem>
        );
      })}
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
