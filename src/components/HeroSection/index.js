import React, { useState } from 'react'
import Video from '../../videos/video1.mp4';
import { Button } from '../ButtonElement'
import { 
  HeroContainer,
  HeroBg,
  Videobg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
 } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id='home'>
      <HeroBg>
        <Videobg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>CS Studying Made Easy </HeroH1>
        <HeroP>
          A Web App built by CS students, for CS students.
          <br></br>
        </HeroP>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HeroP>
          Sign up for a new account to start tracking your progress today!
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={"true"}
          duration={500}
          
          exact='true'
          offfset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection