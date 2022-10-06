function insertSort(ints){
    let vid = [generateFrame(ints, 'Starting...', '[Highlight starting code]', [])];
    for (let i = 1; i < ints.length; i++){
        let currentVal = ints[i];
        let j = i - 1;
        while (j >= 0 && currentVal < ints[j]){
            vid.push(generateFrame(ints, 'Comparing...', '[Highlight code]', [i, j]));
            ints[j + 1] = ints[j];
            j--;
        }
        ints[j + 1] = currentVal;
        vid.push(generateFrame(ints, 'Inserting...', '[Highlight code]', [i, j]));
    }
    vid.push(generateFrame(ints, 'Returning...', '[Highlight code]', []));
    return vid;
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

console.log(JSON.stringify(insertSort([])));