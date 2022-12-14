export function randomsort(ints){
    let sortedInts = JSON.parse(JSON.stringify(ints));
    sortedInts.sort(function(a,b){return a-b});
    console.log(sortedInts);
    let vid = [generateFrame(ints, 'Starting...', '[Highlight starting code]', [], [0])];
    if (isSorted(sortedInts, ints)){
        vid.push(generateFrame(ints, 'Already sorted... Returning arr...', '', [], [1, 3, 4]));
        return vid;
    }
    for (let i = 0; i < 1000; i++){
        ints = shuffle(ints);
        vid.push(generateFrame(ints, 'Shuffle...', '', [], [2, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]));
        vid.push(generateFrame(ints, 'Check if sorted...', '', [], [1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
        if (isSorted(sortedInts, ints)){
            vid.push(generateFrame(ints, 'Sorted!!! Returning arr...', '', [], [4]));
            return vid;
        }
    }
    vid.push(generateFrame(sortedInts, 'Gave up, too many tries (1000). Using a different alg :(', '', []));
    return vid;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function isSorted(sortedInts, ints){
    for (let i = 0; i < sortedInts.length; i++){
        if (sortedInts[i] != ints[i]){
            return false;
        }
    }
    return true;
}

function generateFrame(ints, message, code, highlightedValues, highlightCodeLine){
    let frame = [{message: message, code: code}];
    for (let i = 0; i < ints.length; i++){
        let color = 'red';
        if (highlightedValues.includes(i)){
            color = 'blue';
        }
        frame.push({val: ints[i], color: color, highlightedLines: highlightCodeLine});
    }
    return frame;
}

// console.log(randomsort([1,4,5,6,9,8]));