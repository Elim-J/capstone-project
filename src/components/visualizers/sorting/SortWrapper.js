import React, {useState, useEffect} from 'react';
import Rectangle from './Rectangle';
import '../../../css/Sorting.css';
import { bubbleSort } from './bubblesort';
import CodeContent from './CodeContent';
import ActionBar from './Actionbar';
import { SortingAlgs } from '../../../constants/SortingAlgs';

const SortWrapper = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [vid, setVid] = useState([]);
    const [speed, setSpeed] = useState(500); //initial play speed in ms
    const [isPaused, setIsPaused] = useState(true);
    const [alg, setAlg] = useState(SortingAlgs.BubbleSort);
    
    useEffect(() => {
        const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
        let sortedArrFrames = bubbleSort(randomArr);
        setVid(sortedArrFrames);
        setCurrentFrame(0);
        setIsPaused(true);
    }, []);

    const highlightCodeLine = (lines) => {
        const prevHighlight = document.querySelectorAll('.highlight');
        prevHighlight?.forEach((element, i) => {
            element.className = '';
        });
        lines?.forEach((element, i) => {
            document.getElementById(`code-${element}`).className ='highlight';
        });
    }

    return (
        <div className="sort-wrapper">

            {/* This should probably be its own component */}
            <div className="sorting-content">
                <div className='graph-wrapper'>
                    {console.log('Current frame: ' + currentFrame + "vid.length:" + vid.length)}
                    {currentFrame > vid.length - 1 && setCurrentFrame(vid.length - 1)}
                    {vid && vid[currentFrame] && vid[currentFrame].map((element, i) => {
                        if (i !== 0){
                            highlightCodeLine(element.highlightedLines);
                            return <Rectangle key={i} data={element.val} color={element.color}/>
                        }
                    })}
                </div>

                
                {/* pass in const of alg probably from enum */}
                <div className="code-wrapper">
                    <CodeContent alg="BubbleSort"/>
                </div>
                
                
            </div>

            {/* Remove this eventually */}
            <div>Delay (ms): {speed}</div>
            <div>{isPaused && 'Paused'}{!isPaused && 'Playing'}</div>
            <div>{vid && vid[currentFrame] && vid[currentFrame][0].message}</div>
            <div>{vid && vid[currentFrame] && vid[currentFrame][0].code}</div>
            
            
            <ActionBar 
                currentFrame={currentFrame}
                setCurrentFrame={setCurrentFrame}
                vid={vid}
                setVid={setVid}
                speed={speed}
                setSpeed={setSpeed}
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                alg={alg}
                setAlg={setAlg}
                />
        </div> 
    )
}

export default SortWrapper