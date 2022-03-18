import styled from "styled-components";
import bgQuotes from "./../assets/images/bg-quotes.png";

export const TeamContainer = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(218, 28%, 13%);

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TeamWrapper = styled.div`
  background: url(${bgQuotes}) no-repeat 60px 60px;
  height: 400px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TeamCard = styled.div`
  width: 90%;
  color: hsl(0, 0%, 100%);
  background: hsl(219, 30%, 18%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const TeamP = styled.p`
  font-size: 1rem;
  margin-bottom: 25px;
`;

export const TeamMemberWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  inset: 5px 10px 0 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const TeamMemberName = styled.p`
  margin-left: 45px;
  font-size: 18px;
`;

export const TeamMemberJob = styled.p`
  margin-left: 45px;
  font-size: 12px;
`;
