import React, { useState, useRef } from "react";
import { Button, ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const PathfindActionBar = ({grid, setGrid, currentFrame, setCurrentFrame, vid, setVid, speed, setSpeed, isPaused, setIsPaused}) => {

    const [timeoutId, setTimeoutId] = useState(null);

    const currentSpeed = useRef(speed);
    let frame = useRef(currentFrame);
    
    const handleStepForward = () => {
        if(vid && currentFrame < vid.length - 1){
            console.log('stepping forward');
            // console.log('currentSpeed: ' + currentSpeed.current);
            // console.log('currentFrame: ' + frame.current);

            // console.log(vid[frame.current++].grid);
            setGrid(vid[++frame.current].grid);
            setCurrentFrame(frame.current);
        }
        
    };


    const handleStepBackward = () => {
        if(vid && currentFrame > 0){
            //pause here
            console.log('stepping backward');
            setGrid(vid[--frame.current].grid);
            setCurrentFrame(frame.current);
        }
    };

    const handleReset = () => {
        frame.current = 0;
        setCurrentFrame(frame.current);
        setGrid(vid[frame.current].grid);
    }

    const handleSkipToEnd = () => {
        frame.current = vid.length - 1;
        setCurrentFrame(frame.current);
        setGrid(vid[frame.current]  .grid);
    }

    const handlePlayAndPause = () => {
        
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
    };

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
                <ButtonGroup size="large" color="black">
                    <Button variant="text" onClick={handleReset}>
                        <SkipPreviousIcon/>
                    </Button>
                    <Button variant="text" onClick={handleStepBackward}>
                        <NavigateBeforeIcon/>
                    </Button>
                    <Button size="large" variant="text" onClick={handlePlayAndPause}>
                        {isPaused ? <PlayArrowIcon/> : <PauseIcon/>}
                        {/* <PlayArrowIcon/> */}
                    </Button>
                    <Button variant="text" onClick={handleStepForward}>
                        <NavigateNextIcon/>
                    </Button>
                    <Button variant="text" onClick={handleSkipToEnd}>
                        <SkipNextIcon/>
                    </Button>
                    
                    {/* <Button variant="text" onClick={handleIncreaseSpeed}>
                        Increase Speed
                    </Button>
                    <Button variant="text" onClick={handleDecreaseSpeed}>
                        Decrease Speed
                    </Button>     */}
                </ButtonGroup>
                
            </ThemeProvider>
        </div>

    );
};

export default PathfindActionBar;