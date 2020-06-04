function setup() {
    createCanvas(400, 400); // weight,height: tạo 1 khung hình chữ nhật
    w = width / 3;
    h = height / 3;
}

function draw() {
    background(255);
    strokeWeight(4);

    line(w,0,w,height)
    line(w*2, 0, w*2, height); // x1,y1,x2,y2 -> vẽ 1 đường thằng từ (x1,y1) -> (x2,y2)
    line(0, h, width, h)
    
}