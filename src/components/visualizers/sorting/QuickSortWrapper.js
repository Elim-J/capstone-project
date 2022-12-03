import React, { useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import { useCallback, useState } from "react";
import { quickSort } from './quicksort.js';
import { QuickSortPivots, SortingAlgs } from '../../../constants/SortingAlgs.js';
import { Speed, DefaultSpeed } from "../../../constants/SharedConstants";
import CodeContent from '../shared/CodeContent';
import '../../../css/quicksort.css';
import QuickSortActionBar from './QuickSortActionBar.js';

//style={containerStyles}
export default function QuickSortWrapper() {

  let tempInts = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

  const [vid, setVid] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(500);
  const [timeoutId, setTimeoutId] = useState(null);
  const [pivot, setPivot] = useState(QuickSortPivots.Random);
  const [ints, setInts] = useState(tempInts);
  const [openCode, setOpenCode] = useState(true);
  const [alg, setAlg] = useState(SortingAlgs.QuickSort)
  let frame = useRef(currentFrame);

  useEffect(() => {
    // handleRandomArr();
    setInts(Array.from({length: 10}, () => Math.floor(Math.random() * 100)));
    setVid(quickSort(ints, QuickSortPivots.Random));
  }, []);

  useEffect(() => {
    highlightCodeLine(vid[currentFrame]?.highlightedLines);
  }, [currentFrame]);

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g className="r3dt-node">
      
      {/* <rect r="15" x="0" y="10" width="130" height="100" fill="none"></rect> */}
      <g className="r3dt-label">
          <text className='Numbers' style={{fontSize:'35px', fontStyle:'normal'}}>{nodeDatum.data}</text>
      </g>
      
    </g>
  );

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

  const getMessage = () => {
    if (vid && vid[currentFrame] && vid[currentFrame].message){
        return vid[currentFrame].message;
    } else {
        return "";
    }
  };

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
    
    <QuickSortActionBar
      currentFrame={currentFrame}
      setCurrentFrame={setCurrentFrame}
      vid={vid}
      setVid={setVid}
      speed={speed}
      setSpeed={setSpeed}
      isPaused={isPaused}
      setIsPaused={setIsPaused}
      pivot={pivot}
      setPivot={setPivot}
      ints={ints}
      setAlg={setAlg}
      // openCode={openCode}
      // setOpenCode={setOpenCode}
      // openInfo={openInfo}
      // setOpenInfo={setOpenInfo}
      />
    </div>  
    </>
  );
}