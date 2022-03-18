import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  height: 800px;
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

export const ServicesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 25px 0;
  padding: 0 50px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  width: 65%;
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 340px;
  padding: 15px;
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

export const ServicesIcon = styled.img`
  margin-bottom: 20px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
