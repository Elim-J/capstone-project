import React, {useState, useEffect, useRef} from 'react';
import Rectangle from './Rectangle';
import '../../../css/Sorting.css';
import { bubbleSort } from './bubblesort';


const SortWrapper = () => {
    // const [intervalId, setIntervalId] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [vid, setVid] = useState([]);
    const [speed, setSpeed] = useState(1); //initial play speed in ms
    const [isPaused, setIsPaused] = useState(true);
    
    const currentSpeed = useRef(speed);

    useEffect(() => {
        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
        let sortedArrFrames = bubbleSort(randomArr);
        setVid(sortedArrFrames);
        setIsPaused(true);
    }, []);

    function handleStepForward() {
        if(currentFrame < vid.length - 1){
            setCurrentFrame(currentFrame => currentFrame + 1);
        }
    }

    function handleStepBackward() {
        if(currentFrame > 0){
            setCurrentFrame(currentFrame => currentFrame - 1);
        }
    }

    function handleSkipToBeginning() {
        setCurrentFrame(0);
    }

    function handleSkipToEnd() {
        setCurrentFrame(vid.length - 1);
    }

    function handlePlay() {
        if (isPaused) {
            setIsPaused(false);

            const stepForward = () => {
                handleStepForward();
                const timeoutId = setTimeout(stepForward, currentSpeed.current);
                setTimeoutId(timeoutId);
            }

            const timeoutId = setTimeout(stepForward, currentSpeed.current);
            setTimeoutId(timeoutId);
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

    return (
        <>
            <div className='sort-wrapper'>
                {console.log('Current frame: ' + currentFrame)}
                {currentFrame > vid.length - 1 && setCurrentFrame(vid.length - 1)}
                {vid && vid[currentFrame] && vid[currentFrame].map((element, i) => {
                    if (i !== 0){
                        return <Rectangle key={i} data={element.val} color={element.color}/>
                    }
                })}
            </div>
            <div>{isPaused && 'Paused'}{!isPaused && 'Playing'}</div>
            <div>Delay (ms): {speed}</div>
            <div>{vid && vid[currentFrame] && vid[currentFrame][0].message}</div>
            <div>{vid && vid[currentFrame] && vid[currentFrame][0].code}</div>
            
            {/* {console.log('Printing frame: ' , vid[currentFrame])} */}
            <button className='center-button' onClick={() =>{
                const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
                setVid(bubbleSort(randomArr));
                setCurrentFrame(0);
            }}>
                Generate Random Data
            </button>
            <button onClick={handleStepBackward}>
                Step Backward
            </button>
            <button onClick={handleStepForward}>
                Step Forward
            </button>
            <button onClick={handleSkipToBeginning}>
                Skip to beginning
            </button>
            <button onClick={handleSkipToEnd}>
                Skip to End
            </button>
            <button onClick={handlePlay}>
                Play
            </button>
            <button onClick={handlePause}>
                Pause
            </button>
            <button onClick={handleIncreaseSpeed}>
                Increase Speed
            </button>
            <button onClick={handleDecreaseSpeed}>
                Decrease Speed
            </button>
        </>
    )
}

export default SortWrapper