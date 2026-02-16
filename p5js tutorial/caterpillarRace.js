// Coordinates
let startLine = 40;
let finishLine = 450;


function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(121, 96, 76);

    fill(0, 255, 0);
    rect(finishLine, 0, 20, 500);

    noStroke();
    fill(0, 0, 0);
    rect(startLine, 0, 5, 500);
}