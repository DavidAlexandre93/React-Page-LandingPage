import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "./../assets/images/logo.png";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterDescriptionWrapper,
  FooterLogo,
  FooterDescription,
  FooterLinkItens,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterDescriptionWrapper>
              <FooterLogo src={logo} onClick={toggleHome} />
              <FooterDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FooterDescription>
            </FooterDescriptionWrapper>
            <FooterLinksWrapper>
              <FooterLinkItens>
                <SocialIconLink>
                  <FooterLink to="/">+1-543-123-4567</FooterLink>
                </SocialIconLink>
                <SocialIconLink>
                  <FooterLink to="/">example@fylo.com</FooterLink>
                </SocialIconLink>
              </FooterLinkItens>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItens>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">Jobs</FooterLink>
                <FooterLink to="/">Press</FooterLink>
                <FooterLink to="/">Blog</FooterLink>
              </FooterLinkItens>
              <FooterLinkItens>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Terms</FooterLink>
                <FooterLink to="/">Privacy</FooterLink>
              </FooterLinkItens>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <SocialMediaWrap>
                <SocialIconLink>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink>
                  <FaInstagram />
                </SocialIconLink>
              </SocialMediaWrap>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <WebsiteRights>
            {`All rights reserved ® ${new Date().getFullYear()}`}
          </WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
