let scores = {
    X: 10,
    O: -10,
    tie: 0
}

let w; // width /3;
let h; // height /3;

let boundaryX = 3;
let boundaryY = 3;
let board = [];
let connect = 3 // số connect để chiến thắng

let human = "X";
let computer = "O";
let currentPlayer = human;
let gameOver = false;
let winner = null;

let bestMove;