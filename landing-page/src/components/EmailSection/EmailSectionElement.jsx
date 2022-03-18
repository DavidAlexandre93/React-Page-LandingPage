import styled from "styled-components";

export const EmailSectionContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    hsl(218, 28%, 13%) 65%,
    hsl(216, 53%, 9%) 35%
  );
  display: flex;
  justify-content: center;
`;

export const EmailSectionWrapper = styled.div`
  background: hsl(219, 30%, 18%);
  width: 50%;
  color: hsl(0, 0%, 100%);
  padding: 30px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 920px) {
    width: 95%;
  }
`;

export const EmailSectionH1 = styled.h1`
  margin-bottom: 30px;
`;

export const EmailSectionP = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 720px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 60%;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 15px;
  margin-right: 15px;

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
