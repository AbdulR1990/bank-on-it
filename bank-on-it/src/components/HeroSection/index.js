import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight 
} from './HeroElements';

const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Online Banking Made Simpler</HeroH1>
          <HeroP>
            Sign Up for a New Account Today & Receive $500 in Credit Towards Your Next Payment!
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} 
            primary='true' dark='true'>
              Get Started Here {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;