//nodes: [node1, node2, ...]
//node: {isStart, isEnd, isExplored, edges: [edge1, edge2, ...]}
//edge: {node, cost}
function dijkstra(nodes) {
    let foundStartingPos;
    let startingNode;
    let cheapestPathToEndSoFar;
    let queue = [];
    let vid;
    nodes.forEach(node => {
        if (node.isStart){
            if (foundStartingPos){
                throw "Multiple starting positions";
            } else {
                foundStartingPos = true;
                startingNode = node;
            }
        }
    })
    if (!foundStartingPos){
        throw "No starting position";
    }

    startingNode.prevNode = null;
    startingNode.runningTotal = 0;
    startingNode.isExplored = true;
    queue.push(startingNode);
    while(queue.length != 0){
        let lowestCostSoFar = queue[0].runningTotal;
        let posOfNode = 0;
        let nodesToRemove = [];
        queue.forEach((node, i) => {
            if (cheapestPathToEndSoFar && node.runningTotal > cheapestPathToEndSoFar){
                nodesToRemove.push(node);
            }
            if (node.runningTotal < lowestCostSoFar){
                posOfNode = i;
                lowestCostSoFar = node.runningTotal;
            }
        })
        let searchNode = queue.splice(posOfNode, 1);
        queue = queue.filter(node => {
            return !nodesToRemove.includes(node);
        })
        searchNode = searchNode[0];
        searchNode.isExplored = true;
        searchNode.edges.forEach(edge => {
            if (!edge.node.isExplored){//new node we havent seen 
                edge.node.prevNode = searchNode;
                edge.node.runningTotal = searchNode.runningTotal + edge.cost;
                if (edge.node.isEnd && (!cheapestPathToEndSoFar || edge.node.runningTotal < cheapestPathToEndSoFar)){
                    cheapestPathToEndSoFar = edge.node.runningTotal;
                }
                queue.push(edge.node);
            } else if(edge.node.runningTotal && edge.node.runningTotal > edge.cost + searchNode.runningTotal){ //cheaper path to a node we have seen
                edge.node.prevNode = searchNode;
                edge.node.runningTotal = searchNode.runningTotal + edge.cost;
            }
        })
    }
    let path = [];
    nodes.forEach(node => {
        if (node.isEnd && node.runningTotal && node.runningTotal == cheapestPathToEndSoFar){
            let currentNode = node;
            while (currentNode != null) {
                path.push(currentNode);
                currentNode = currentNode.prevNode;
            }
            path.reverse();
            // vid.push(generateFrame(nodes, 'returning path', '', path));
            return path;
        }
    })

    return null;
}

let startNode = {isStart: true, isEnd: false, edges: []};
let leftPathNode1 = {isStart: false, isEnd: false, edges: []};
let leftPathNode2 = {isStart: false, isEnd: false, edges: []};
let rightPathNode1 = {isStart: false, isEnd: false, edges: []};
let endNode = {isStart: false, isEnd: true, edges: []};
startNode.edges.push({node: leftPathNode1, cost: 1});
startNode.edges.push({node: rightPathNode1, cost: 1});
leftPathNode1.edges.push({node: leftPathNode2, cost: 1});
leftPathNode2.edges.push({node: endNode, cost: 5});
rightPathNode1.edges.push({node: endNode, cost: 5});
let testGraph = [];
testGraph.push(startNode);
testGraph.push(leftPathNode1);
testGraph.push(leftPathNode2);
testGraph.push(rightPathNode1);
testGraph.push(endNode);

console.log((dijkstra(testGraph)));