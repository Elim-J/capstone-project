import React, { useState, useRef } from "react";
import { Button, ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import { bubbleSort } from './bubblesort';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { SortingAlgs } from "../../../constants/SortingAlgs";

const ActionBar = ({currentFrame, setCurrentFrame, vid, setVid, speed, setSpeed, isPaused, setIsPaused}) => {

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

    function setAlg(event){
        
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

    return (
        <div className="actionbar">
            <ThemeProvider theme={btnTheme}>
                    <label className="dropdown">
                        <select className="form-select algorithm-dropdown-toggle" id="alg-select"
                            onChange={(e) => {
                                // console.log(e.target.value);
                                // onSearch(e.target.value);
                                setAlg(e.target.value);
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
                    <Button variant="text" onClick={handleReset}>
                        <SkipPreviousIcon/>
                    </Button>
                    <Button variant="text" onClick={handleStepBackward}>
                        <NavigateBeforeIcon/>
                    </Button>
                    <Button size="large" variant="text" onClick={handlePlayAndPause}>
                        {isPaused ? <PlayArrowIcon/> : <PauseIcon/>}
                    </Button>
                    <Button variant="text" onClick={handleStepForward}>
                        <NavigateNextIcon/>
                    </Button>
                    <Button variant="text" onClick={handleSkipToEnd}>
                        <SkipNextIcon/>
                    </Button>
                    <Button variant="text" onClick={() =>{
                        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
                        setVid(bubbleSort(randomArr));
                        setCurrentFrame(0);
                    }}> 
                        <ShuffleIcon/>
                    </Button>
                    <Button variant="text" onClick={handleIncreaseSpeed}>
                        Increase Speed
                    </Button>
                    <Button variant="text" onClick={handleDecreaseSpeed}>
                        Decrease Speed
                    </Button>    
                </ButtonGroup>
                
            </ThemeProvider>
        </div>

    );
};

export default ActionBar;