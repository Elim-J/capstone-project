import React from 'react'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-6.svg'
import {
  ToolsContainer,
  ToolsWrapper,
  ToolsCard,
  ToolsIcon,
  ToolsH1,
  ToolsH2,
  ToolsP
} from './ToolsElements'

const Tools = () => {
  return (
    <ToolsContainer id='tools'>
      <ToolsH1>Our Tools</ToolsH1>
      <ToolsWrapper>
        <ToolsCard>
          <ToolsIcon src={Icon1} />
          <ToolsH2>Algorithms</ToolsH2>
          <ToolsP>View and play step-by-step, all the algorithms available for your needs.</ToolsP>
        </ToolsCard>
          <ToolsCard>
          <ToolsIcon src={Icon2} />
          <ToolsH2>Data Structures</ToolsH2>
          <ToolsP>Study a variety of Data Structures to improve your knowledge. </ToolsP>
        </ToolsCard>
        <ToolsCard>
          <ToolsIcon src={Icon3} />
          <ToolsH2>Scrum Board</ToolsH2>
          <ToolsP>Keep track of your personal projects using our very own Project Manager.</ToolsP>
        </ToolsCard>
      </ToolsWrapper>
    </ToolsContainer>
  )
}

export default Tools