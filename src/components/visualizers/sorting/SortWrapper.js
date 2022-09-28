import React, {useState, useEffect, useRef} from 'react';
import Rectangle from './Rectangle';
import '../../../css/Sorting.css';
import { bubbleSort } from './bubblesort';
import { Button, ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';


const SortWrapper = () => {
    // const [intervalId, setIntervalId] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [vid, setVid] = useState([]);
    const [speed, setSpeed] = useState(250); //initial play speed in ms
    const [isPaused, setIsPaused] = useState(true);
    
    const currentSpeed = useRef(speed);

    useEffect(() => {
        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
        let sortedArrFrames = bubbleSort(randomArr);
        setVid(sortedArrFrames);
        setCurrentFrame(0);
        setIsPaused(true);
    }, []);

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



    //
    //move to actionbar component with all other buttons eventually
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const btnTheme = createTheme({
        palette: {
            black: createColor('#000000'),
            white: createColor('#ffffff'),
        },
    });
    //

    return (
        <>
            <div className='sort-wrapper'>
                {console.log('Current frame: ' + currentFrame + "vid.length:" + vid.length)}
                {currentFrame > vid.length - 1 && setCurrentFrame(vid.length - 1)}
                {vid && vid[currentFrame] && vid[currentFrame].map((element, i) => {
                    if (i !== 0){
                        return <Rectangle key={i} data={element.val} color={element.color}/>
                    }
                })}
            </div>
            <div>Delay (ms): {speed}</div>
            <div>{isPaused && 'Paused'}{!isPaused && 'Playing'}</div>
            <div>Delay (ms): {speed}</div>
            <div>{vid && vid[currentFrame] && vid[currentFrame][0].message}</div>
            <div>{vid && vid[currentFrame] && vid[currentFrame][0].code}</div>
            
            {/* {console.log('Printing frame: ' , vid[currentFrame])} */}
            <div className="actionbar">
                <ThemeProvider theme={btnTheme}>
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
        </>
    )
}

export default SortWrapper