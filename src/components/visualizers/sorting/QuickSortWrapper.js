import React, { useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import { useCallback, useState } from "react";
import { quickSort } from './quicksort.js';
import { QuickSortPivots, SortingAlgs } from '../../../constants/SortingAlgs.js';
import { Speed, DefaultSpeed } from "../../../constants/SharedConstants";
import CodeContent from '../shared/CodeContent';
import '../../../css/quicksort.css';
import QuickSortActionBar from './QuickSortActionBar.js';

export default function QuickSortWrapper() {

  let tempInts = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

  const [vid, setVid] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  // const [currentSpeed, setCurrentSpeed] = useState(500);
  const [timeoutId, setTimeoutId] = useState(null);
  const [pivot, setPivot] = useState('random');
  const [ints, setInts] = useState(tempInts);
  const [speed, setSpeed] = useState(DefaultSpeed);
  const [openCode, setOpenCode] = useState(true);
  let frame = useRef(currentFrame);

  const currentSpeed = useRef(speed);

  useEffect(() => {
    // handleRandomArr();
    setInts(Array.from({length: 10}, () => Math.floor(Math.random() * 100)));
    setVid(quickSort(ints, QuickSortPivots.Random));
  }, []);

  useEffect(() => {
    highlightCodeLine(vid[currentFrame]?.highlightedLines);
  }, [currentFrame]);

  const getMessage = () => {
    if (vid && vid[currentFrame] && vid[currentFrame].message){
        return vid[currentFrame].message;
    } else {
        return "";
    }
  };

  const highlightCodeLine = (lines) => {
    console.log('highlighting ' + lines);
    const prevHighlight = document.querySelectorAll('.highlight');
    prevHighlight?.forEach((element, i) => {
        element.className = '';
    });
    lines?.forEach((element, i) => {
        document.getElementById(`code-${element}`).className = 'highlight';
    });
  };

  const handleRandomArr = () => {
    setCurrentFrame(0);
    setInts(Array.from({length: 10}, () => Math.floor(Math.random() * 100)));
    frame.current = 0;
    setVid(quickSort(ints, QuickSortPivots.Random));
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

  function handleChangeSpeed(e){
    if (e == Speed.FourX){
        setSpeed(speed => {
                        currentSpeed.current = DefaultSpeed / 4;
                        return DefaultSpeed / 4;
                    });
    }
    else if (e == Speed.TwoX){
        setSpeed(speed => {
            currentSpeed.current = DefaultSpeed / 2;
            return DefaultSpeed / 2;
        });
    }
    else if (e == Speed.OneX){
        setSpeed(speed => {
            currentSpeed.current = DefaultSpeed;
            return DefaultSpeed;
        });
    }
    else if (e == Speed.HalfX){
        setSpeed(speed => {
            currentSpeed.current = DefaultSpeed * 2;
            return DefaultSpeed * 2;
        });
    }
    else if (e == Speed.QuarterX){
        setSpeed(speed => {
            currentSpeed.current = DefaultSpeed * 4;
            return DefaultSpeed * 4;
        });
    }
}

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
  setVid(quickSort(ints, e));
}

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g className="r3dt-node">
      
      {/* <rect r="15" x="0" y="10" width="130" height="100" fill="none"></rect> */}
      <g className="r3dt-label">
          <text className='Numbers' style={{fontSize:'35px', fontStyle:'normal'}}>{nodeDatum.data}</text>
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
  const separation = { nonSiblings: 4, siblings: 4 }
  const scaleExtent= { min: 0.1, max: 3 }
  
  return (
    <>
    <div className='body'>

        {vid[frame.current]?.rootTree &&
        <Tree
          data={vid[frame.current].rootTree}
          dimensions={dimensions}
          translate={translate}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="vertical"
          pathFunc="straight"
          depthFactor="150"
          separation = {separation}
          scaleExtent = {scaleExtent}
        />}
                  <div className="code-wrapper">
                    <CodeContent 
                    alg={SortingAlgs.QuickSort} 
                    open={openCode} 
                    setOpen={setOpenCode}
                    getMessage={getMessage}
                    pivot={pivot}
                    />
                </div>
        
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
            <label className="dropdown">
                        <select className="form-select algorithm-dropdown-toggle" id="alg-select"
                            onChange={(e) => {
                                handleChangeSpeed(e.target.value);
                            }}
                            defaultValue={Speed.OneX}>
                                {Object.values(Speed).map(val => (
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
