import React, { useEffect } from 'react';
import Tree from 'react-d3-tree';
import { Button } from '@mui/material'; 
import { useCallback, useState } from "react";
import { quickSort } from './quicksort.js';
import '../../../css/quicksort.css';


const qsTree = {
    elements: [1,2,3,4],
    attributes: {
        highlightRed: '0-3',
    },
    children: [
        {
            elements: [1,2],
            attributes: {
                highlight: ''
            },
            children: [
                {
                    elements: [8,2],
                    attributes: {
                        hightlight: 'blue',
                    }
                }
                
            ]
        },
        {
            elements: [1,2,5,7],
            attributes: {
                highlight: 'red',
            },
            children: [

            ]
        }
    ]

};

//style={containerStyles}
export default function App() {

  const [vid, setVid] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [currentSpeed, setCurrentSpeed] = useState(500);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    // handleRandomArr();
    setVid(quickSort([13, 0, 29, 21, 2, 25, 10, 19, 3, 10], 'random'));
  }, []);

  const handleRandomArr = () => {
    setCurrentFrame(0);
    setVid(quickSort(Array.from({length: 10}, () => Math.floor(Math.random() * 100)), 'random'));
  };

  const handleStepForward = () => {
    if(vid && currentFrame < vid.length - 1){
      console.log("stepping forward " + currentFrame);
      setCurrentFrame(currentFrame + 1);
    }
  };
  
  const handleStepBackward = () => {
    if(vid && currentFrame > 0){
      console.log("stepping back");
      setCurrentFrame(currentFrame - 1);
    }
  };

  const handlePlayAndPause = () => {
        
    if (isPaused) {
        setIsPaused(false);

        const stepForward = () => {
            handleStepForward();
            console.log("in play" );
            const timeoutId = setTimeout(stepForward, currentSpeed);
            setTimeoutId(timeoutId);
        }

        const timeoutId = setTimeout(stepForward, currentSpeed);
        setTimeoutId(timeoutId);
    } else {
        handlePause();
        // setTimeoutId(null);
    }
};

const handlePause = () => {
  if(!isPaused){
      setIsPaused(true);
      clearTimeout(timeoutId);
      setTimeoutId(null);
  }
};

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g className="r3dt-node">
      
      {/* <rect r="15" x="0" y="10" width="130" height="100" fill="none"></rect> */}
      <g className="r3dt-label">
          <text>{nodeDatum.data}</text>
      </g>
      
    </g>
  );

  const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
    const [translate, setTranslate] = useState(defaultTranslate);
    const [dimensions, setDimensions] = useState();
    const containerRef = useCallback((containerElem) => {
      if (containerElem !== null) {
        const { width, height } = containerElem.getBoundingClientRect();
        setDimensions({ width, height });
        setTranslate({ x: width / 2, y: height / 4 });
      }
    }, []);

    return [dimensions, translate, containerRef];
  };

    const [dimensions, translate, containerRef] = useCenteredTree();
    return (
      <>
      {console.log('rerender')}
      <div className="tree-container" ref={containerRef}>

        {vid[currentFrame]?.rootTree &&
        <Tree
          data={vid[currentFrame].rootTree}
          dimensions={dimensions}
          translate={translate}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="vertical"
          pathFunc="straight"
          depthFactor="35"
        />}
        
      </div>
          <Button onClick={handleStepBackward}>Step back</Button>
          <Button onClick={handlePlayAndPause}>Play/Pause</Button>
          <Button onClick={handleStepForward}>Step forward</Button>
          <Button onClick={handleRandomArr}>Generate Random Data</Button>
          
      </>
    );
  }