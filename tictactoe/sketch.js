let w; // width /3;
let h; // height /3;

let boundaryX = 5;
let boundaryY = 5;
let board = [];
function initBoard() {
  row = [];
  board = Array.from({ length: boundaryX }, () =>
    Array.from({ length: boundaryY }, () => "")
  );
}
let human = "X";
let computer = "O";
let currentPlayer = human;
function setup() {
  createCanvas(400, 400); // weight,height: tạo 1 khung hình chữ nhật
  w = width / boundaryX;
  h = height / boundaryY;
  initBoard();
}

function mousePressed() {
  // mouseX, mouseY : tọa độ khi ấn chuột

  let i = floor(mouseX / w);
  let j = floor(mouseY / h);

  if (board[i][j] == "") {
    board[i][j] = currentPlayer;
    currentPlayer = currentPlayer == human ? computer : human;
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
}
