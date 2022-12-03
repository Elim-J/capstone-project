import React, { useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import { useCallback, useState } from "react";
import { quickSort } from './quicksort.js';
import '../../../css/quicksort.css';
import QuickSortActionBar from './QuickSortActionBar.js';


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
                        highlight: 'blue',
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
export default function QuickSortWrapper() {

  const [vid, setVid] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(500);
  // const [timeoutId, setTimeoutId] = useState(null);
  let frame = useRef(currentFrame);

  useEffect(() => {
    // handleRandomArr();
    setVid(quickSort([13, 0, 29, 21, 2, 25, 10, 19, 3, 10], 'random'));
  }, []);


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
        
      />}
      
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
      // openCode={openCode}
      // setOpenCode={setOpenCode}
      // openInfo={openInfo}
      // setOpenInfo={setOpenInfo}
      />
    </div>  
    </>
  );
}