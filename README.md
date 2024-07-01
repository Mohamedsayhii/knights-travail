## Knights Travail

### Introduction

Welcome to my Knights Travails project! This project showcases the application of Breadth-First Search (BFS) algorithm to solve a classic chess problem. On a standard 8x8 chessboard, a knight can move from any square to any other square given enough turns. The knight's move consists of moving two steps forward and one step to the side or one step forward and two steps to the side, facing any direction.

### Problem Description

I built a function, `knightMoves`, that demonstrates the shortest possible way to get from one square to another, outputting all squares the knight will stop on along the way.

The chessboard is represented with 2-dimensional coordinates, and the function is designed to work as follows:

```
knightMoves([0,0], [1,2]) == [[0,0], [1,2]]
```

In some cases, there may be multiple shortest paths. For example:

```
knightMoves([0,0], [3,3]) == [[0,0], [2,1], [3,3]]
# or
knightMoves([0,0], [3,3]) == [[0,0], [1,2], [3,3]]

knightMoves([3,3], [0,0]) == [[3,3], [2,1], [0,0]]
# or
knightMoves([3,3], [0,0]) == [[3,3], [1,2], [0,0]]

knightMoves([0,0], [7,7]) == [[0,0], [2,1], [4,2], [6,3], [4,4], [6,5], [7,7]]
# or
knightMoves([0,0], [7,7]) == [[0,0], [2,1], [4,2], [6,3], [7,5], [5,6], [7,7]]
```

### Project Assignment

1. **Graph Implementation**: I implemented a graph to represent the 8x8 chessboard and the knight's possible moves.
2. **Shortest Path Function**: I created the `knightMoves` function to find the shortest path between two squares.
3. **Path Output**: The function outputs the full path from the starting square to the ending square.
4. **Move Validation**: All moves are validated to stay within the bounds of the board.
5. **Algorithm Selection**: I chose and implemented the BFS algorithm for this problem.

### Example Usage

Here's an example of how the function works:

```
> knightMoves([3,3], [4,3])
=> You made it in 3 moves! Here's your path:
   [3,3]
   [4,5]
   [2,4]
   [4,3]
```

### Conclusion

This project demonstrates my understanding and application of graph traversal algorithms in a practical scenario. I hope you find it as interesting as I did while building it. Happy coding!
