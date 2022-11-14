// import React, { useState, useEffect, useRef } from "react";
// import Square from "./Square";
// import "../../../css/BFS.css";
// import { bfs, generateRandomGrid } from "./bfs";

// const GRID_COLS = 20;
// const GRID_ROWS = 10;
// const NUM_OF_STARTING_BLOCKS = 5;

// const BFSWrapper = () => {
//   // const [intervalId, setIntervalId] = useState(null);
//   const [timeoutId, setTimeoutId] = useState(null);
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [vid, setVid] = useState([]);
//   const [speed, setSpeed] = useState(1); //initial play speed in ms
//   const [isPaused, setIsPaused] = useState(true);

//   const currentSpeed = useRef(speed);

//   useEffect(() => {
//     setVid(generateRandomGrid(GRID_ROWS, GRID_COLS, NUM_OF_STARTING_BLOCKS));
//     setIsPaused(true);
//   }, []);

//   function handleStepForward() {
//     if (currentFrame < vid.length - 1) {
//       handlePause();
//       setCurrentFrame((currentFrame) => currentFrame + 1);
//     }
//   }

//   function handleStepBackward() {
//     if (currentFrame > 0) {
//       handlePause();
//       setCurrentFrame((currentFrame) => currentFrame - 1);
//     }
//   }

//   function handleReset() {
//     setCurrentFrame(0);
//   }

//   function handleSkipToEnd() {
//     setCurrentFrame(vid.length - 1);
//   }

//   function handlePlay() {
//     if (isPaused) {
//       setIsPaused(false);

//       const stepForward = () => {
//         handleStepForward();
//         const timeoutId = setTimeout(stepForward, currentSpeed.current);
//         setTimeoutId(timeoutId);
//       };

//       const timeoutId = setTimeout(stepForward, currentSpeed.current);
//       setTimeoutId(timeoutId);
//     }
//   }

//   function handlePause() {
//     if (!isPaused) {
//       setIsPaused(true);
//       clearTimeout(timeoutId);
//       setTimeoutId(null);
//     }
//   }

//   function handleIncreaseSpeed() {
//     if (speed - 10 > 0) {
//       setSpeed((speed) => {
//         currentSpeed.current = speed - 10;
//         return speed - 10;
//       });
//     }
//   }

//   function handleDecreaseSpeed() {
//     setSpeed((speed) => {
//       currentSpeed.current = speed + 10;
//       return speed + 10;
//     });
//   }

//   return (
//     <>
//       <div className="bfs-wrapper">
//         {console.log("Current frame: " + currentFrame)}
//         {currentFrame > vid.length - 1 && setCurrentFrame(vid.length - 1)}
//         {vid &&
//           vid[currentFrame] &&
//           vid[currentFrame].map((element, i) => {
//             if (i !== 0) {
//               return (
//                 <Square key={i} data={element.val} color={element.color} />
//               );
//             }
//           })}
//       </div>
//       <div>
//         {isPaused && "Paused"}
//         {!isPaused && "Playing"}
//       </div>
//       <div>Delay (ms): {speed}</div>
//       <div>{vid && vid[currentFrame] && vid[currentFrame][0].message}</div>
//       <div>{vid && vid[currentFrame] && vid[currentFrame][0].code}</div>

//       {/* {console.log('Printing frame: ' , vid[currentFrame])} */}
//       <button
//         className="center-button"
//         onClick={() => {
//           const randomArr = Array.from({ length: 20 }, () =>
//             Math.floor(Math.random() * 30)
//           );
//           setVid(bfs(randomArr));
//           setCurrentFrame(0);
//         }}
//       >
//         Generate Random Data
//       </button>
//       <button onClick={handleStepBackward}>Step Backward</button>
//       <button onClick={handleStepForward}>Step Forward</button>
//       <button onClick={handleReset}>Reset</button>
//       <button onClick={handleSkipToEnd}>Skip to End</button>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//       <button onClick={handleIncreaseSpeed}>Increase Speed</button>
//       <button onClick={handleDecreaseSpeed}>Decrease Speed</button>
//     </>
//   );
// };

// export default BFSWrapper;
