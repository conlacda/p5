let w; // width /3;
let h; // height /3;

let boundaryX = 5;
let boundaryY = 5;
let board = [];
function initBoard() {
  row = [];
  for (let i = 0; i < boundaryX; i++) {
    row.push("");
  }
  for (i = 0; i < boundaryY; i++) {
    board.push(row);
  }
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
    if (currentPlayer == human) {
      currentPlayer = computer;
    }
    currentPlayer = currentPlayer == human ? computer : human;
  }
}

function draw() {
  background(255);
  strokeWeight(4); // độ đậm của đường vẽ line()

  for (let i =1;i< boundaryX;i++){ // vẽ tất cả các thanh dọc
      line(w*i,0,w*i,height)
  }
  for (let j =1;j<boundaryY;j++){ 
      line(0,h*j,width,h*j)
  }
  
//   line(w, 0, w, height);
//   line(w * 2, 0, w * 2, height); // x1,y1,x2,y2 -> vẽ 1 đường thằng từ (x1,y1) -> (x2,y2)
//   line(0, h, width, h);
//   line(0, h * 2, width, h * 2);

}