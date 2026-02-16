// Coordinates
let startLine = 40;
let finishLine = 450;

// Caterpillar
let circX = startLine;
let circY = 250;

function setup(){
    createCanvas(500, 500);
    let segments = 6;
    let spacing = 20;
    let segmentSize = 50;
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

    // Caterpillar
    stroke(0);
    fill(255, 0, 255);
    circle(circX, circY, 50);

    // Caterpillar movement
    circX += 20;

    // Srtop simulation when caterpillar reaches finish line
    if (circX > finishLine){
        noLoop();
    }
}