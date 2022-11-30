import styled from 'styled-components';
import { Row } from '../AlgoInfoSection/AlgoElementsStyles';
import Slider from 'react-slick';
import { Link as LinkR } from 'react-router-dom'

export const ToolsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  
  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`


export const ToolsContainerBlue = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1e1e2b;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  
  @media screen and (max-width: 768px) {
    height: 1300px;
  }
  @media screen and (min-height: 1081px) {
    height: 1440px;
  }
  @media screen and (min-height: 1800px) {
    height: 2160px;
  }
`


export const ToolsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
   grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px
  }
`


export const ToolsCard = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer
  }
`


export const ToolsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ToolsH1 = styled.h1`
  font-size: 2.5rem;
  color: #0076bf;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem
  }
`


export const ToolsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom:  10px;
`


export const ToolsP = styled.p`
  font-size: 1rem;
  text-align: center;
`


export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`


export const ReviewSlider = styled(Slider)`
	width: 100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`

export const CardButton = styled(LinkR)`
	background-color: #1d609c;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;
	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`