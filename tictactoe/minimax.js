
function findBestMove() {
    // tìm ra tọa độ (x,y) tốt nhất cần đánh cho người chơi hiện tại
    // lặp qua tất cả các ô và tính điểm các ô đó
    let bestScore = -Infinity;
    let move = {};
    for (let i = 0; i < boundaryX; i++) {
        for (let j = 0; j < boundaryY; j++) {
            if (board[i][j] == "") {
                board[i][j] = currentPlayer;
                let score = minimax(board, 0, false);
                board[i][j] = "";
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    board[move.i][move.j] = currentPlayer;
    if (currentPlayer == human) {
        currentPlayer = computer;
    } else currentPlayer = human;
    console.log(bestScore);
}
function printScore() {
    console.log('-----------------------');
    console.log(currentPlayer);
    for (let i = 0; i < boundaryX; i++) {
        for (let j = 0; j < boundaryY; j++){
            if (board[i][j] == '') {
                board[i][j] = currentPlayer;
                console.log(i, j);
                console.log(minimax(board, 0, false));
                board[i][j] = '';
            }
        }
    }
}
function minimax(board, depth, isMaximizing) {
    // board: trạng thái bảng hiện tại
    // isMaximizing: đánh dấu xem mình là bên nào
    // trả về điểm số của nước đi đó
    // isMaximizing: tối đa số điểm của đối phương
    let result = checkWinner();
    if (result != "") {
        return scores[result];
    }
    if (isMaximizing) { // chọn ô cho mình số điểm lớn nhất
        let bestScore = -Infinity;
        for (let i = 0; i < boundaryX; i++) {
            for (let j = 0; j < boundaryY; j++) {
                // Nếu ô này chưa được đánh
                if (board[i][j] == '') {
                    board[i][j] = currentPlayer;
                    let score = minimax(board, depth + 1, false); // false ở đây để đảo qua cho lượt đối phương - tối thiểu số điểm của mình (tức là đối phương đánh ra nước tốt nhất)
                    board[i][j] = '';
                    bestScore = max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < boundaryX; i++) {
            for (let j = 0; j < boundaryY; j++) {
                if (board[i][j] == '') {
                    let opponent;
                    if (currentPlayer == human) {
                        opponent = computer;
                    } else opponent = human;
                    board[i][j] = opponent;
                    let score = minimax(board, depth + 1, true); // false ở đây để đảo qua cho lượt đối phương - tối thiểu số điểm của mình (tức là đối phương đánh ra nước tốt nhất)
                    board[i][j] = '';
                    bestScore = min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}