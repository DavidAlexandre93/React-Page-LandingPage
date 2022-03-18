import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "hsl(217, 28%, 15%)" : "transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;

//LinkR = Link react-router
export const NavLogo = styled(LinkR)`
  color: hsl(0, 0%, 100%);
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: hsl(0, 0%, 100%);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);

    svg {
      width: 1.8em;
      height: 1.8em;
      cursor: pointer;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

//LinkS = Link react-scroll
export const NavLinks = styled(LinkS)`
  color: hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid hsl(176, 68%, 64%);
  }

  &:hover {
    color: hsl(0, 3%, 85%);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: hsl(176, 68%, 64%);
  white-space: nowrap;
  padding: 10px 22px;
  color: hsl(218, 28%, 13%);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: hsl(0, 0%, 100%);
    color: hsl(218, 28%, 13%);
  }
`;
