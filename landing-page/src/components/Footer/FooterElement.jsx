import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: hsl(216, 53%, 9%);
`;

export const FooterWrap = styled.div`
  width: 100%;
  padding: 80px 80px 5px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 980px) {
    padding: 32px 15px 5px 15px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const FooterDescriptionWrapper = styled.div`
  color: hsl(0, 0%, 100%);
  margin-bottom: 24px;

  @media screen and (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: 1.2rem;
  cursor: pointer;

  @media screen and (max-width: 980px) {
    width: 24%;
    height: 24%;
    margin-right: 5%;
  }
`;

export const FooterDescription = styled.p`
  width: 80%;
  font-size: 16px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: hsl(0, 0%, 100%);
`;

export const FooterLinkItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: hsl(0, 0%, 100%);

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.p`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: hsl(176, 68%, 64%);
    transition: 0.3s ease-out;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

export const SocialIconLink = styled.a`
  color: hsl(0, 0%, 100%);
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: hsl(176, 68%, 64%);
  }
`;

export const WebsiteRights = styled.small`
  color: hsl(221, 19%, 33%);
  font-size: 12px;
  text-align: center;
  margin: 30px 0 5px 0;
`;
