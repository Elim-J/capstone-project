import { QuickSortPivots } from "../../../constants/SortingAlgs";

export function quickSort(arr, pivotType) {
    let isDonePartitioning = false;
    let rootOfTree = { elements: [], leftSubTree: null, rightSubTree: null, highlight: false };
    for (let i = 0; i < arr.length; i++) {
        let ele = { val: arr[i], color: 'black' };
        rootOfTree.elements.push(ele);
    }

    let vid = [generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Starting...', '[Highlight starting code]', [], [0, 1, 2, 4, 5, 6])];

    while (!sorted(rootOfTree)) {

        if (!isDonePartitioning) {
            let nodeToPartition = findNextNodeToPartition(rootOfTree);
            let pivotVal;
            let pivotPos;
            if (pivotType == QuickSortPivots.Last){
                pivotPos = nodeToPartition.elements.length - 1;
                pivotVal = nodeToPartition.elements[pivotPos].val;
            }
            else if (pivotType == QuickSortPivots.Middle){
                pivotPos = Math.floor(nodeToPartition.elements.length / 2);
                pivotVal = nodeToPartition.elements[pivotPos].val;
            }
            else if (pivotType == QuickSortPivots.First){
                pivotPos = 0;
                pivotVal = nodeToPartition.elements[pivotPos].val;
            }
            else{
                pivotPos = Math.floor(Math.random() * (nodeToPartition.elements.length));
                pivotVal = nodeToPartition.elements[pivotPos].val;
            }
            nodeToPartition.elements[pivotPos].color = 'green';
            // vid.push(generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Picking Pivot', '[Highlight code]', []));

            let leftSubTree = { elements: [], leftSubTree: null, rightSubTree: null, highlight: false };
            let rightSubTree = { elements: [], leftSubTree: null, rightSubTree: null, highlight: false };
            for (let i = 0; i < nodeToPartition.elements.length; i++) {
                if (i != pivotPos && nodeToPartition.elements[i].val < pivotVal){
                    let ele = { val: nodeToPartition.elements[i].val, color: 'blue' };
                    leftSubTree.elements.push(ele);
                }
            }
            nodeToPartition.leftSubTree = leftSubTree;
            let partitioningElements = [];
            for (let i = 0; i < nodeToPartition.elements.length; i++) {
                partitioningElements.push(nodeToPartition.elements[i]);
            }
            nodeToPartition.elements = [{ val: pivotVal, color: 'green' }];

            // vid.push(generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Created left sub tree...', '[Highlight ending code]', []));

            for (let i = 0; i < partitioningElements.length; i++) {
                if (i != pivotPos && partitioningElements[i].val >= pivotVal) {
                    let ele = { val: partitioningElements[i].val, color: 'red' };
                    rightSubTree.elements.push(ele);
                }
            }
            nodeToPartition.rightSubTree = rightSubTree;
            vid.push(generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Create Branches...', '[Highlight ending code]', [], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]));

            nodeToPartition.elements[0].color = 'black';

            for (let i = 0; i < leftSubTree.elements.length; i++) {
                leftSubTree.elements[i].color = 'black';
            }
            for (let i = 0; i < rightSubTree.elements.length; i++) {
                rightSubTree.elements[i].color = 'black';
            }

            isDonePartitioning = !isBeingPartitioned(rootOfTree);

        } else {    //Begin the merge if done partitioning
            let nodeToMerge = findNextNodeToMerge(rootOfTree);
            nodeToMerge.highlight = true;

            // vid.push(generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Merging this tree...', '[Highlight ending code]', []));

            let newElements = [];
            if (nodeToMerge?.leftSubTree) { //gather left subtree elements
                for (let i = 0; i < nodeToMerge.leftSubTree.elements.length; i++) {
                    newElements.push(nodeToMerge.leftSubTree.elements[i]);
                }
            }
            newElements.push(nodeToMerge.elements[0]) //gather pivot
            if (nodeToMerge?.rightSubTree) { //gather right subtree elements
                for (let i = 0; i < nodeToMerge.rightSubTree.elements.length; i++) {
                    newElements.push(nodeToMerge.rightSubTree.elements[i]);
                }
            }
            nodeToMerge.elements = newElements;
            nodeToMerge.leftSubTree = null;
            nodeToMerge.rightSubTree = null;
            nodeToMerge.highlight = false;

            vid.push(generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Merged...', '[Highlight ending code]', [], [17]));
        }
    }

    vid.push(generateFrame(JSON.parse(JSON.stringify(rootOfTree)), 'Returning...', '[Highlight ending code]', [], [17]));
    return vid;
}

function sorted(tree) {
    if (tree.leftSubTree != null || tree.rightSubTree != null) {
        return false;
    }

    let currentMax = tree.elements[0].val;
    for (let i = 1; i < tree.elements.length; i++) {
        if (tree.elements[i].val < currentMax) {
            return false;
        }
        else {
            currentMax = tree.elements[i].val;
        }
    }

    return true;
}

function findNextNodeToMerge(tree) {
    let prevDepthNodes = [tree];
    let nextNodeToMerge;

    while (true) {
        let currentDepthNodes = [];
        for (let i = 0; i < prevDepthNodes.length; i++) {
            let hasChildren = false;
            let hasGrandChildren = false;

            //has left child
            if (prevDepthNodes[i].leftSubTree != null) {
                hasChildren = true;
                currentDepthNodes.push(prevDepthNodes[i].leftSubTree);
                //check if has grandchildren on left child
                if (prevDepthNodes[i].leftSubTree.leftSubTree != null || prevDepthNodes[i].leftSubTree.rightSubTree != null) {
                    hasGrandChildren = true;
                }
            }
            //has right child
            if (prevDepthNodes[i].rightSubTree != null) {
                hasChildren = true;
                currentDepthNodes.push(prevDepthNodes[i].rightSubTree);
                //check if has grandchildren on right child
                if (prevDepthNodes[i].rightSubTree.leftSubTree != null || prevDepthNodes[i].rightSubTree.rightSubTree != null) {
                    hasGrandChildren = true;

                }
            }

            if (hasChildren && !hasGrandChildren) {
                nextNodeToMerge = prevDepthNodes[i];
                return nextNodeToMerge;
            }
        }
        prevDepthNodes = currentDepthNodes;
    }
}

function findNextNodeToPartition(tree) {
    let prevDepthNodes = [tree];
    let foundNextNodeToPartition = false;
    let nextNodeToPartition;

    while (!foundNextNodeToPartition) {
        let currentDepthNodes = [];
        for (let i = 0; i < prevDepthNodes.length; i++) {
            if (prevDepthNodes[i].elements.length > 1) {
                foundNextNodeToPartition = true;
                nextNodeToPartition = prevDepthNodes[i];
            }
            if (prevDepthNodes[i]?.leftSubTree) {
                currentDepthNodes.push(prevDepthNodes[i].leftSubTree);
            }
            if (prevDepthNodes[i]?.rightSubTree) {
                currentDepthNodes.push(prevDepthNodes[i].rightSubTree);
            }
        }
        prevDepthNodes = currentDepthNodes;
    }
    return nextNodeToPartition;
}

function isBeingPartitioned(tree) {
    let prevDepthNodes = [tree];
    while (prevDepthNodes.length > 0) {
        let currentDepthNodes = [];
        for (let i = 0; i < prevDepthNodes.length; i++) {
            if (prevDepthNodes[i].elements?.length > 1) {
                return true;
            }
            if (prevDepthNodes[i]?.leftSubTree) {
                currentDepthNodes.push(prevDepthNodes[i].leftSubTree);
            }
            if (prevDepthNodes[i]?.rightSubTree) {
                currentDepthNodes.push(prevDepthNodes[i].rightSubTree);
            }
        }
        prevDepthNodes = currentDepthNodes;
    }

    return false;
}


function generateFrame(tree, message, code, deprecated, highlightedLines) {
    let frame = { rootTree: fixTree(tree), message: message, code: code, highlightedLines: highlightedLines};

    return frame;
}

function fixTree(rootOfTree){
    let fixedRootOfTree = {data: fixData(rootOfTree.elements), children: [], attributes: null};
    let prevNodes = [rootOfTree];
    let prevFixedNodes = [fixedRootOfTree];
    while (prevNodes.length != 0){
        let newNodes = [];
        let newFixedNodes = [];
        prevNodes.forEach((node, i) => {
            if (node.leftSubTree != null){
                let fixedNode = {data: fixData(node.leftSubTree.elements), children: [], attributes: null};
                prevFixedNodes[i].children.push(fixedNode);
                newNodes.push(node.leftSubTree);
                newFixedNodes.push(fixedNode);
            }
            if (node.rightSubTree != null){
                let fixedNode = {data: fixData(node.rightSubTree.elements), children: [], attributes: null};
                prevFixedNodes[i].children.push(fixedNode);
                newNodes.push(node.rightSubTree);
                newFixedNodes.push(fixedNode);
            }
        })
        prevNodes = newNodes;
        prevFixedNodes = newFixedNodes;
    }
    return fixedRootOfTree;
}

function fixData(elements){
    let data = '[';
    elements.forEach(element => {
        data += element.val + ', ';
    });
    data += ']'
    data = data.replace(', ]', ']');
    return data;
}

//last
//middle
//first
//otherwise, random
// console.log(JSON.stringify(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1], 'random')));
