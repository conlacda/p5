let w; // width /3;
let h; // height /3;

let boundaryX = 5;
let boundaryY = 5;
let board = [];
let connect = 5 // số connect để chiến thắng
function initBoard() {
  row = [];
  board = Array.from({ length: boundaryX }, () =>
    Array.from({ length: boundaryY }, () => "")
  );
}
let human = "X";
let computer = "O";
let currentPlayer = human;
let gameOver = false;
let winner = "";
function setup() {
  createCanvas(400, 400); // weight,height: tạo 1 khung hình chữ nhật
  w = width / boundaryX;
  h = height / boundaryY;
  initBoard();
}

function value(x, y) {
  // lấy ra giá trị của bảng và trả về null nếu nằm ngoài bảng
  if (outOfBoard(x, y)) return "";
  return board[x][y];
}

function checkHorizontal(x, y) {
  // hàm này lấy ra 1 hàng ngang bắt đầu từ điểm (x,y) và kiểm tra xem mảng đó có chỉ 1 loại X,O hay ko
  let spot_array = [];
  for (let i = 0; i < connect; i++){
    spot_array.push(value(x + i, y));
  }
  let unique = [... new Set(spot_array)];
  unique = JSON.stringify(unique);
  if ( unique === JSON.stringify([human]) || unique === JSON.stringify([computer])) {
    winner = unique[0]
    gameOver = true;
  }
}
function checkVertical(x,y) {
  let spot_array = [];
  for (let j = 0; j < connect; j++) {
    spot_array.push(value(x, y+j));
  }
  let unique = [... new Set(spot_array)];
  unique = JSON.stringify(unique);
  if (unique === JSON.stringify([human]) || unique === JSON.stringify([computer])) {
    winner = unique[0]
    gameOver = true;
  }
}
function checkDiagonal(x,y) {
  // Check đường chéo
  let spot_array = [];
  let unique;
  // Đường chéo sang phải
  for (let i = 0; i < connect; i++){
    spot_array.push(value(x + i, y + i))
  }
  unique = [... new Set(spot_array)];
  unique = JSON.stringify(unique);
  if (unique === JSON.stringify([human]) || unique === JSON.stringify([computer])) {
    winner = unique[0]
    gameOver = true;
  }
  // Đường chéo sang trái
  spot_array = []
  for (let i = 0; i < connect; i++) {
    spot_array.push(value(x - i, y + i))
  }
  unique = [... new Set(spot_array)];
  unique = JSON.stringify(unique);
  if (unique === JSON.stringify([human]) || unique === JSON.stringify([computer])) {
    winner = unique[0]
    gameOver = true;
  }
}

function checkWinner() {
  // 1 vòng lặp qua tất cả các ô và kiểm tra xem ô đó có phải ô đầu tiên trong chuỗi 3 cái liên tục ko 
  // Cách khác: kiểm tra xem ô vừa đánh có tạo ra connect-3 để thắng ko (vì những ô khác đã kiểm tra vào lần trước và lần kiểm tra sau kiểm tra lại gây thừa thao tác)
  // Horizontal
  for (let i = 0; i < boundaryX; i++){
    for (let j = 0; j < boundaryY; j++){
      checkHorizontal(i, j);
      checkVertical(i, j);
      checkDiagonal(i, j);
    }
  }
}

function outOfBoard(x, y) {
  return (0 > x || x >= boundaryX || y >= boundaryY || y < 0);   
}
function mousePressed() {
  // mouseX, mouseY : tọa độ khi ấn chuột

  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  if (!outOfBoard(i, j)) {
    if (board[i][j] == "") {
      board[i][j] = currentPlayer;
      currentPlayer = currentPlayer == human ? computer : human;
    }
    checkWinner();
  }
}

function draw() {
  background(255);
  strokeWeight(4); // độ đậm của đường vẽ line()
  let i;
  let j;
  for (i = 1; i < boundaryX; i++) {
    // vẽ tất cả các thanh dọc
    line(w * i, 0, w * i, height);
  }
  for (j = 1; j < boundaryY; j++) {
    // vẽ tất cả các thanh ngang
    line(0, h * j, width, h * j);
  }
  for (i = 0; i < boundaryX; i++) {
    for (j = 0; j < boundaryY; j++) {
      spot = board[i][j];
      // lấy ra tâm của mỗi ô
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let r = w / 4;
      if (spot == human) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      } else if (spot == computer) {
        noFill(); // sau lệnh này "các" hình vẽ sẽ trong suốt
        ellipse(x, y, r * 2);
      }
    }
  }
  if (gameOver) {
    noLoop(); // dừng hàm draw() 
    alert(winner + ' wins');
  }
}
