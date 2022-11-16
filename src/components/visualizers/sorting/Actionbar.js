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
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { SortingAlgs } from "../../../constants/SortingAlgs";
import { useNavigate } from 'react-router-dom';

const ActionBar = ({currentFrame, setCurrentFrame, vid, setVid, speed, setSpeed, isPaused, setIsPaused, openCode, setOpenCode, openInfo, setOpenInfo, alg, setAlg}) => {

    const [timeoutId, setTimeoutId] = useState(null);

    const currentSpeed = useRef(speed);
    
    function handleStepForward() {
        if(currentFrame < vid.length - 1){
            handlePause();
            setCurrentFrame(currentFrame => currentFrame + 1);
        }
    }

    function handleStepBackward() {
        if(currentFrame > 0){
            handlePause();
            setCurrentFrame(currentFrame => currentFrame - 1);
        }
    }

    function handleReset() {
        handlePause();
        setCurrentFrame(0);
    }

    function handleSkipToEnd() {
        handlePause();
        setCurrentFrame(vid.length - 1);
    }

    function handlePlayAndPause() {
        if (isPaused) {
            setIsPaused(false);

            const stepForward = () => {
                handleStepForward();
                console.log("in play");
                const timeoutId = setTimeout(stepForward, currentSpeed.current);
                setTimeoutId(timeoutId);
            }

            const timeoutId = setTimeout(stepForward, currentSpeed.current);
            setTimeoutId(timeoutId);
        } else {
            setIsPaused(true);
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        
    }
    
    function handlePause() {
        if (!isPaused) {
            setIsPaused(true);
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    }

    function handleIncreaseSpeed(){
        if (speed - 10 > 0){
            setSpeed(speed => {
                currentSpeed.current = speed - 10;
                return speed - 10;
            });
        }
    }

    function handleDecreaseSpeed(){
        setSpeed(speed => {
            currentSpeed.current = speed + 10;
            return speed + 10;
        });
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

    function handleShuffle(){
        let vid;
        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));        
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

    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const btnTheme = createTheme({
        palette: {
            black: createColor('#000000'),
            white: createColor('#ffffff'),
        },
    });

    let navigate = useNavigate();

    return (
        <div className="actionbar">
            <ThemeProvider theme={btnTheme}>
                    <label className="dropdown">
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
                    <Button variant="text" title="Randomize" onClick={() =>{
                        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
                        setVid(bubbleSort(randomArr));
                        setCurrentFrame(0);
                    }}> 
                        <ShuffleIcon/>
                    </Button>
                    <Button variant="text" title="Decrease speed" onClick={handleDecreaseSpeed}>
                        <KeyboardDoubleArrowDownIcon/>
                    </Button>   

                    <Button variant="text" title="Increase speed" onClick={handleIncreaseSpeed}>   
                        <KeyboardDoubleArrowUpIcon/>
                    </Button>
                    
                    <Button variant="text" title={openCode ? "Hide Code" : "Show code"} onClick={() => setOpenCode(!openCode)}>
                        {openCode ? <CodeOffIcon/> : <CodeIcon/>}
                    </Button>

                    <Button variant="text" title="Info" onClick={() => setOpenInfo(!openInfo)}>
                        <HelpIcon/>
                    </Button>
                </ButtonGroup>
                
            </ThemeProvider>
        </div>

    );
};

export default ActionBar;