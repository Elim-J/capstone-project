export const PathfindingAlgs = {
    None: "--",
    Astar: "A*",
    Bfs: "Bfs",
    Dijkstra: "Dijkstra",
}

export const StartingGrid = [[{"isStart":true,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false}],[{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":false,"isBlocked":false,"isExplored":false},{"isStart":false,"isEnd":true,"isBlocked":false,"isExplored":false}]];