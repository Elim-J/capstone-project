import React, { useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import { Button } from '@mui/material'; 
import { useCallback, useState } from "react";
import { quickSort } from './quicksort.js';
import { QuickSortPivots } from '../../../constants/SortingAlgs.js';
import '../../../css/quicksort.css';

export default function QuickSortWrapper() {

  let tempInts = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

  const [vid, setVid] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [currentSpeed, setCurrentSpeed] = useState(500);
  const [timeoutId, setTimeoutId] = useState(null);
  const [pivot, setPivot] = useState('random');
  const [ints, setInts] = useState(tempInts);
  let frame = useRef(currentFrame);

  useEffect(() => {
    // handleRandomArr();
    setVid(quickSort(Array.from({length: 10}, () => Math.floor(Math.random() * 100)), QuickSortPivots.Random));
  }, []);

  const handleRandomArr = () => {
    setCurrentFrame(0);
    frame.current = 0;
    setVid(quickSort(Array.from({length: 10}, () => Math.floor(Math.random() * 100)), QuickSortPivots.Random));
  };

  const handleStepForward = () => {
    if(vid && frame.current < vid.length - 1){
      console.log("stepping forward " + frame.current);
      setCurrentFrame(frame.current + 1);
      frame.current++;
    }
  };
  
  const handleStepBackward = () => {
    if(vid && frame.current > 0){
      console.log("stepping back");
      setCurrentFrame(frame.current - 1);
      frame.current--;
    }
  };

  const handlePlayAndPause = () => {
        
    if (isPaused) {
        setIsPaused(false);
        console.log("In Play/Pause rnnnnnn")

        const stepForward = () => {
          if(frame.current < vid.length - 2){
            handleStepForward();
            console.log("in play" );
            const timeoutId = setTimeout(stepForward, currentSpeed);
            setTimeoutId(timeoutId);
          }
          else
          {
            handlePause();
          }
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

const handlePivot = (e) => {
  setPivot(e);
  setCurrentFrame(0);
  frame.current = 0;
  setVid()
}

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

        {vid[frame.current]?.rootTree &&
        <Tree
          data={vid[frame.current].rootTree}
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
          <label className="dropdown">
                        <select className="form-select algorithm-dropdown-toggle" id="alg-select"
                            onChange={(e) => {
                                handlePivot(e.target.value);
                            }}
                            defaultValue={QuickSortPivots.Random}>
                                {Object.values(QuickSortPivots).map(val => (
                                    <option
                                        aria-selected="true"
                                        key={val}
                                        value={val}
                                        >
                                        {val}
                                    </option>
                                    )
                                )}
                        </select>
                    </label>
      </>
    );
  }