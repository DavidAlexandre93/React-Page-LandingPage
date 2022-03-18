import React, { useState } from "react";
import { Button } from "./../Button/ButtonElement";
import {
  IntroContainer,
  IntroBg,
  IntroContent,
  IntroH1,
  IntroP,
  IntroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./IntroElement";

const IntroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <IntroContainer id="home">
      <IntroBg />
      <IntroContent>
        <IntroH1>
          All your files in one secure location, accessible anywhere.
        </IntroH1>
        <IntroP>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </IntroP>
        <IntroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </IntroBtnWrapper>
      </IntroContent>
    </IntroContainer>
  );
};

export default IntroSection;
