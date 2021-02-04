
let generateBoard = function(whiteQueen, blackQueen) {
  let size = 8;
  let board = [];
  //empty board
  for (i = 0; i < size; i++) {
    let line = [];
    for (j = 0; j < size; j++) {
      line.push(0);
    }
    board.push(line);
  }
  //add queens
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
};

let queenThreat = function(board) {
  
  let queens = [];

  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queens.push([i,j]);
      }
    }
  }

  if (queens[0][0] === queens[1][0] || queens[0][1] === queens[1][1]) {
    return true;
  } else if (Math.abs(queens[0][0] - queens[1][0]) === Math.abs(queens[0][1] - queens[1][1])) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
