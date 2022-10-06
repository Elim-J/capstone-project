import React from 'react';
import Tree from 'react-d3-tree';
import { useCallback, useState } from "react";

// import '../../../css/quicksort.css';

// // This is a simplified example of an org chart with a depth of 2.
// // Note how deeper levels are defined recursively via the `children` property.

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

}
const containerStyles = {
  width: "100vw",
  height: "100vh"
};

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g className="r3dt-node">
    {/* <circle r="15"></circle> */}
    {/* <rect r="15" x="0" y="10" width="130" height="100" fill="none"></rect> */}
    <g className="r3dt-label">
        <text>[{nodeDatum.elements.toString()}]</text>
    </g>
    
  </g>
);

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const [dimensions, setDimensions] = useState();
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [dimensions, translate, containerRef];
};


export default function App() {
    const [dimensions, translate, containerRef] = useCenteredTree();
    return (
      <div style={containerStyles} ref={containerRef}>
        <Tree
          data={qsTree}
          dimensions={dimensions}
          translate={translate}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="vertical"
          pathFunc="straight"
        />
      </div>
    );
  }