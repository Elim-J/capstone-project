export function selectionsort(ints){
    let vid = [generateFrame(ints, 'Starting...', '[Highlight starting code]', [])];
    for (let i = 0; i < ints.length; i++){
        let currentMin = ints[i];
        let currentMinPos = i;
        vid.push(generateFrame(ints, 'Starting selection loop...', '', [i]));
        for (let j = i + 1; j < ints.length; j++){
            vid.push(generateFrame(ints, 'Comparing...', '', [currentMinPos, j]));
            if (ints[j] < currentMin){
                vid.push(generateFrame(ints, 'Changing selection...', '', [j]))
                currentMin = ints[j];
                currentMinPos = j;
            }
        }
        if (currentMinPos != i){
            ints = swap(ints, i, currentMinPos);
            vid.push(generateFrame(ints, 'Finished selection...', '', [i, currentMinPos]))
        }
    }
    vid.push(generateFrame(ints, 'Returning...', '[Highlight code]', []));
    return vid;
}

function swap(ints, x, y){
    let temp = ints[x];
    ints[x] = ints[y];
    ints[y] = temp;
    return ints;
}

function generateFrame(ints, message, code, highlightedValues){
    let frame = [{message: message, code: code}];
    for (let i = 0; i < ints.length; i++){
        let color = 'red';
        if (highlightedValues.includes(i)){
            color = 'blue';
        }
        frame.push({val: ints[i], color: color});
    }
    return frame;
}

// console.log(insertSort([3,2,1,5,6,7,4,6,4]));