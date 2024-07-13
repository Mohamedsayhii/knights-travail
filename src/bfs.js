const moves = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
];

function listIncludesList(list, target) {
    return list.some(
        (subArray) =>
            subArray.length === target.length &&
            subArray.every((value, index) => value === target[index]),
    );
}

const possibleMoves = (node) => {
    const neighbors = [];
    moves.forEach((element) => {
        const nodeNeighborX = node[0] + element[0];
        const nodeNeighborY = node[1] + element[1];
        if (
            nodeNeighborX >= 1 &&
            nodeNeighborX <= 8 &&
            nodeNeighborY >= 1 &&
            nodeNeighborY <= 8
        ) {
            neighbors.unshift([nodeNeighborX, nodeNeighborY]);
        }
    });
    return neighbors;
};

const bfs = (startingNode, desiredNode) => {
    const queue = [[startingNode]];
    const visited = [];

    while (queue.length > 0) {
        const path = queue.pop();
        const currentNode = path[path.length - 1];
        if (listIncludesList(visited, currentNode)) continue;

        visited.push(currentNode);
        if (
            desiredNode[0] === currentNode[0] &&
            desiredNode[1] === currentNode[1]
        ) {
            return path;
        }

        const currentNodeNeighbors = possibleMoves(currentNode);
        currentNodeNeighbors.forEach((neighbor) => {
            const newPath = path.slice();
            newPath.push(neighbor);
            queue.unshift(newPath);
        });
    }
    return 'nada';
};

export default bfs;
