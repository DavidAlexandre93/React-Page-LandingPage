import React from "react";
import { Button } from "./../Button/ButtonElement";
import {
  EmailSectionContainer,
  EmailSectionWrapper,
  EmailSectionH1,
  EmailSectionP,
  InputWrap,
  Input,
} from "./EmailSectionElement";

const EmailSection = () => {
  return (
    <>
      <EmailSectionContainer>
        <EmailSectionWrapper>
          <EmailSectionH1>Get early access today</EmailSectionH1>
          <EmailSectionP>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </EmailSectionP>
          <InputWrap>
            <Input placeholder="email@example.com" />
            <Button
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary="true"
              dark="true"
            >
              Get Started For Free
            </Button>
          </InputWrap>
        </EmailSectionWrapper>
      </EmailSectionContainer>
    </>
  );
};

export default EmailSection;
