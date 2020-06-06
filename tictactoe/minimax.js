
function findBestMove() {
    bestScore = -Infinity;
    for (let i = 0; i < boundaryX; i++){
        for (let j = 0; j < boundaryY; j++){
            if (board[i][j] == "") {
                board[i][j] = currentPlayer;
                let score = minimax(board);
                board[i][j] = "";
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = [i, j];
                }
            }
        }
    }
    console.log(bestMove);
}
function minimax(board,isMaximizing) {
    // board: trạng thái bảng hiện tại
    // isMaximizing: đánh dấu xem mình là bên nào
    // trả về điểm số của nước đi đó
    let result = checkWinner();
    
    return 1;
}