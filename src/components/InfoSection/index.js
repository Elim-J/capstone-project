import React from 'react'
import { ButtonR } from '../ButtonElement'
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
 } from './InfoElements'

const InfoSection = ({
  lightBg, id,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel ,
  image ,
  description,
  headline,
  primary,
  dark,
  dark2
  }) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine} </TopLine>
                <Heading lightText={lightText}>{headline} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonR 
                    to='/login'
                    smooth={"true"}
                    duration={500}                    
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</ButtonR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image.default} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection