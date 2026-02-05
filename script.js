function setup(){
    createCanvas(500, 500, WEBGL); // Dimension of canvas
}

function draw(){
    background(220); // Dimension of background
    background("#c1fff2"); // Color of background
    rect(100, 100, 100, 123, 123); // rect(x, y, size, height, border-radius)
    rect(250, 250, 30, 20);

    rotateY(frameCount * 0.01); // Rotation Y of rectangle rotateY(frameCount * speed)
    rotateX(frameCount * 0.01); // Rotation X of rectangle rotateX(frameCount * speed)
    rect(0, 0, 150, 150, 123);

    rect(30, 20, 55, 50, 20, 15, 10, 5); // rect(x, y, size, height, border-radius top-left, top-right, bottom-right, bottom-left)
    rect(30, 20, 60, 60, 20, 15, 10, 5);
}