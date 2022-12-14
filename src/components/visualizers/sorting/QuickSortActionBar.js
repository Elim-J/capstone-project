import React, { useState, useRef } from "react";
import { Button, ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import { bubbleSort } from './bubblesort';
import { insertSort } from "./insertsort";
import { randomsort } from "./randomsort";
import { selectionsort } from "./selectionsort";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import HelpIcon from '@mui/icons-material/Help';
import { SortingAlgs } from "../../../constants/SortingAlgs";
import { quickSort } from './quicksort.js';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { QuickSortPivots } from "../../../constants/SortingAlgs";
const QuickSortActionBar = ({currentFrame, setCurrentFrame, vid, setVid, speed, setSpeed, isPaused, setIsPaused, openCode, setOpenCode, openInfo, setOpenInfo, pivot, setPivot, ints, setAlg}) => { //, alg, setAlg

    const [timeoutId, setTimeoutId] = useState(null);

    let frame = useRef(currentFrame);
    let currentSpeed = useRef(speed);
    
    const handleRandomArr = () => {
        handlePause();
        setCurrentFrame(0);
        frame.current = 0;
        setVid(quickSort(Array.from({length: 10}, () => Math.floor(Math.random() * 100)), 'random'));
      };
    
      const handleStepForward = () => {
        if(vid && frame.current < vid.length - 1){
          console.log("stepping forward " + currentFrame);
          handlePause();
          setCurrentFrame(frame.current + 1);
          frame.current++;
        }
      };
      
      const handleStepBackward = () => {
        if(vid && frame.current > 0){
          console.log("stepping back");
          handlePause();
          setCurrentFrame(frame.current - 1);
          frame.current--;
        }
      };
    
      const handlePlayAndPause = () => {
        console.log(currentSpeed.current);
        if (isPaused) {
            setIsPaused(false);
            console.log("In Play/Pause rnnnnnn")
    
            const stepForward = () => {
              if(frame.current < vid.length - 2){
                handleStepForward();
                console.log("in play" );
                const timeoutId = setTimeout(stepForward, currentSpeed.current);
                setTimeoutId(timeoutId);
              }
              else
              {
                handlePause();
              }
            }
    
            const timeoutId = setTimeout(stepForward, currentSpeed.current);
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
    
    const handleReset = () => {
        handlePause();
        frame.current = 0;
        setCurrentFrame(frame.current);
    };

    const handleSkipToEnd = () => {
        handlePause();
        frame.current = vid.length - 1;
        setCurrentFrame(frame.current);
    };

    function handleIncreaseSpeed(){
        if (speed - 10 > 0){
            setSpeed(speed => {
                currentSpeed.current = speed - 10;
                return speed - 10;
            });
        }
        console.log(currentSpeed.current);
    }

    function handleDecreaseSpeed(){
        setSpeed(speed => {
            currentSpeed.current = speed + 10;
            return speed + 10;
        });
        console.log(currentSpeed.current);
    }

    function handlePickAlg(alg){
        setAlg(alg);
        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
        let vid;
        if (alg == SortingAlgs.BubbleSort){
            vid = bubbleSort(randomArr);
        } else if (alg == SortingAlgs.InsertSort){
            vid = insertSort(randomArr);
        } else if (alg == SortingAlgs.RandomSort){
            vid = randomsort(randomArr);
        } else if (alg == SortingAlgs.SelectionSort){
            vid = selectionsort(randomArr);
        }
        setVid(vid);
        setCurrentFrame(0);
    }

    let navigate = useNavigate();
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const btnTheme = createTheme({
        palette: {
            black: createColor('#000000'),
            white: createColor('#ffffff'),
        },
    });

    return (
        <div className="actionbar">
            <ThemeProvider theme={btnTheme}>
                    {/* <label className="dropdown">
                        <select className="form-select algorithm-dropdown-toggle" id="alg-select"
                            onChange={(e) => {
                                // console.log(e.target.value);
                                // onSearch(e.target.value);
                                if(e.target.value == SortingAlgs.QuickSort)
                                {
                                    navigate('/quicksort');
                                }
                                handlePickAlg(e.target.value);
                            }}
                            defaultValue={SortingAlgs.BubbleSort}>
                                {Object.values(SortingAlgs).map(val => (
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
                    </label> */}
                    <label className="dropdown">
                        <select className="form-select algorithm-dropdown-toggle" id="alg-select"
                            onChange={(e) => {
                                // console.log(e.target.value);
                                // onSearch(e.target.value);
                                if(e.target.value != SortingAlgs.QuickSort)
                                {
                                    navigate('/sorting');
                                }
                                handlePickAlg(e.target.value);
                            }}
                            defaultValue={SortingAlgs.QuickSort}>
                                {Object.values(SortingAlgs).map(val => (
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
                <ButtonGroup size="large" color="black">
                    <Button variant="text" title="Skip to beginning" onClick={handleReset}>
                        <SkipPreviousIcon/>
                    </Button>
                    <Button variant="text" title="Step Backward"  onClick={handleStepBackward}>
                        <NavigateBeforeIcon/>
                    </Button>
                    <Button size="large" variant="text" title={isPaused ? "Play" : "Pause"} onClick={handlePlayAndPause}>
                        {isPaused ? <PlayArrowIcon/> : <PauseIcon/>}
                    </Button>
                    <Button variant="text" title="Step Forward" onClick={handleStepForward}>
                        <NavigateNextIcon/>
                    </Button>
                    <Button variant="text" title="Skip to end" onClick={handleSkipToEnd}>
                        <SkipNextIcon/>
                    </Button>
                    <Button variant="text" title="Randomize" onClick={handleRandomArr}> 
                        <ShuffleIcon/>
                    </Button>
                    <Button variant="text" title="Increase speed" onClick={handleIncreaseSpeed}>
                        <KeyboardDoubleArrowUpIcon/>
                    </Button>
                    <Button variant="text" title="Decrease speed" onClick={handleDecreaseSpeed}>
                        <KeyboardDoubleArrowDownIcon/>
                    </Button>    
                    <Button variant="text" title={openCode ? "Hide Code" : "Show code"} onClick={() => setOpenCode(!openCode)}>
                        {openCode ? <CodeOffIcon/> : <CodeIcon/>}
                    </Button>

                    <Button variant="text" title="Info" onClick={() => setOpenInfo(!openInfo)}>
                        <HelpIcon/>
                    </Button>
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
                </ButtonGroup>
                
            </ThemeProvider>
        </div>

    );
};

export default QuickSortActionBar;