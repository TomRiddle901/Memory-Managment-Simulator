// Coordinates
let startLine = 40;
let finishLine = 450;

// Caterpillar
let circX = startLine;
let circY = 250;
let segments = 6;
let spacing = 20;
let segmentSize = 50;
let eyeSize = 15;

function setup(){
    createCanvas(500, 500);

    // FPS
    frameRate(2);
}

function draw(){
    background(121, 96, 76);

    // Start and finish lines
    noStroke();
    fill(0, 255, 0);
    rect(finishLine, 0, 20, 500);

    noStroke();
    fill(0, 0, 0);
    rect(startLine, 0, 5, 500);

    drawCaterpillar();

    // Srtop simulation when caterpillar reaches finish line
    if (circX > finishLine){
        noLoop();
    }
}

function drawCaterpillar(){
    let x = circX;

    // Draw and move the caterpillar main body
    for (let i = 0; i < segments; i++){
        stroke(0);
        fill(255, 0, 255);
        circle(x, circY, segmentSize);
        
        x += spacing;
    }

    circX += spacing;

    // Draw and move the caterpillar eyes
    fill(0);
    stroke(255);
    strokeWeight(3);
    circle(x, circY - eyeSize, eyeSize);
    circle(x - eyeSize, circY - eyeSize, eyeSize);
}