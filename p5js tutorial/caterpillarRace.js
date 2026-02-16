// Coordinates
let startLine = 40;
let finishLine = 450;

// Caterpillar
let circX = startLine;
let circY = 250;

function setup(){
    createCanvas(500, 500);
    noStroke();
}

function draw(){
    background(121, 96, 76);

    fill(0, 255, 0);
    rect(finishLine, 0, 20, 500);

    fill(0, 0, 0);
    rect(startLine, 0, 5, 500);

    fill(255, 0, 255);
    circle(circX, circY, 50);
}