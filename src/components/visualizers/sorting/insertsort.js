export function insertSort(ints){
    let vid = [generateFrame(ints, 'Starting...', '[Highlight starting code]', [], [0,1,2,3])];
    for (let i = 1; i < ints.length; i++){
        let currentVal = ints[i];
        let j = i - 1;
        while (j >= 0 && currentVal < ints[j]){
            vid.push(generateFrame(ints, 'Comparing...', '[Highlight code]', [j + 1, j], [4,5,6,7]));
            let temp = ints[j + 1];
            ints[j + 1] = ints[j];
            ints[j] = temp;
            j--;
        }
        // ints[j + 1] = currentVal;
        vid.push(generateFrame(ints, 'Inserting...', '[Highlight code]', [j + 1], [8]));
    }
    vid.push(generateFrame(ints, 'Returning...', '[Highlight code]', [], [11]));
    return vid;
}

function generateFrame(ints, message, code, highlightedValues, highlightedCode){
    let frame = [{message: message, code: code}];
    for (let i = 0; i < ints.length; i++){
        let color = 'red';
        if (highlightedValues.includes(i)){
            color = 'blue';
        }
        frame.push({val: ints[i], color: color, highlightedLines: highlightedCode});
    }
    return frame;
}