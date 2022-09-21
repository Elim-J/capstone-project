export function bubbleSort(ints){
    // each frame is
    let intsCopy = [...ints];
    let vid = [];
    let hasSwapped = false;
    let passes = 0;
    do {
        ++passes;
        hasSwapped = false;
        vid.push(generateFrame(intsCopy, hasSwapped, passes, 'Iterating over array', 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}', []));
        for (let i = 0; i < intsCopy.length - passes; i++){
            vid.push(generateFrame(intsCopy, hasSwapped, passes, 'Checking ' + intsCopy[i+1] + ' < ' + intsCopy[i] + ' ?', 'if (arr[i + 1] < arr[i]) {\n   ... \n}', [i, i+1]));
            if (intsCopy[i] > intsCopy[i+1]){
                const swap = intsCopy[i];
                intsCopy[i] = intsCopy[i+1];
                intsCopy[i+1] = swap;
                hasSwapped = true;
                vid.push(generateFrame(intsCopy, hasSwapped, passes, 'Swapped ' + intsCopy[i+1] + ' and ' + intsCopy[i], 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;', [i, i+1]));
            }
        }
    } while(hasSwapped);
    vid.push(generateFrame(intsCopy, hasSwapped, passes, 'Finished', 'return arr;', []))
    return vid;
}

function generateFrame(ints, hasSwapped, passes, message, code, highlightedValues){
    let frame = [{hasSwapped: hasSwapped, thisPass: passes, message: message, code: code}];
    for (let i = 0; i < ints.length; i++){
        let color = 'red';
        if (highlightedValues.includes(i)){
            color = 'blue';
        }
        frame.push({val: ints[i], color: color});
    }
    return frame;
}