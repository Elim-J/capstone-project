import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Row } from '../AlgoInfoSection/AlgoElementsStyles';
import { data, sliderSettings } from './AlgoData';
import {
	ToolsContainerBlue,
	ToolsWrapper,
	ToolsCard,
	ToolsIcon,
	ToolsH1,
	ToolsH2,
	ToolsP,
	ButtonContainer,
	ReviewSlider,
	CardButton
  } from '../Tools/ToolsElements'

const AlgoInfoSection = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<ToolsContainerBlue id='tools'>
			<ToolsH1>Choose an algorithm to visualize</ToolsH1>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
						{data.map((el, index) => (
							<ToolsWrapper>
								<ToolsCard>
								<ToolsIcon src={el.image} />
								<ToolsH2>{el.title}</ToolsH2>
								<ToolsP>{el.description}</ToolsP>
								</ToolsCard>
								<CardButton to={el.link}>Learn More</CardButton>
							</ToolsWrapper>
									))}
			</ReviewSlider>
		</ToolsContainerBlue>
		
	);
};

export default AlgoInfoSection;