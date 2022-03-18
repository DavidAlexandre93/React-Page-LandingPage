import styled from "styled-components";
import bg from "./../../components/assets/images/illustration-intro.png";
import bgCurvy from "./../../components/assets/images/bg-curvy-desktop.svg";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const IntroContainer = styled.div`
  background: hsl(217, 28%, 15%) url(${bgCurvy}) no-repeat bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  background-size: 100% 35%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const IntroBg = styled.div`
  background: url(${bg}) no-repeat top;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 820px) {
    background-size: 100%;
  }
`;

export const IntroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  height: 100%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const IntroH1 = styled.h1`
  color: hsl(0, 0%, 100%);
  width: 80%;
  font-size: 42px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 28px;
  }
`;

export const IntroP = styled.p`
  margin-top: 24px;
  color: hsl(0, 0%, 100%);
  width: 50%;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const IntroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
