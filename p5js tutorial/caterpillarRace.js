// Coordinates
let startLine = 40;
let finishLine = 450;

// Caterpillar
// let circX = startLine;
// let circY = 250;
//let segments = 6;
let spacing = 20;
let segmentSize = 50;
let eyeSize = 15;
let numCaterpillar = 3;
let posCaterpillarEnds = [];
let isRacing = false;

function setup(){
    createCanvas(500, 500);

    // FPS
    frameRate(2);

    // Position of last segment into the array
    for (let i = 0; i < numCaterpillar; i++){
        posCaterpillarEnds.push(startLine);
    }
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

    if (isRacing){
        moveCaterpillars();
    }else{
        writeStart();
    }

    drawMultipleCaterpillars();
}


function drawCaterpillar(x, y, segments){
    // Draw and move the caterpillar main body
    for (let i = 0; i < segments; i++){
        stroke(0);
        fill(255, 0, 255);
        circle(x, y, segmentSize);
        
        x += spacing;
    }

    // Draw and move the caterpillar eyes
    fill(0);
    stroke(255);
    strokeWeight(3);
    circle(x, y - eyeSize, eyeSize);
    circle(x - eyeSize, y - eyeSize, eyeSize);
}

function drawMultipleCaterpillars(){
    for (let i = 0; i < numCaterpillar; i++){
        let padding = height / numCaterpillar;
        let y = (i + 0.5) * padding;
        let crawl = round(random(3, 6));
        drawCaterpillar(posCaterpillarEnds[i], y, crawl);
    }
}

function moveCaterpillars(){
    for (let i = 0; i < numCaterpillar; i++){
        let move = random(5, 30);
        posCaterpillarEnds[i] += move;
    }
}

function mousePressed(){
    isRacing = true;
}

function writeStart(){
    // Text decoration
    textSize(24);
    fill(255);
    textAlign(CENTER);
    noStroke();

    // Text
    text("Click to start!", width / 2, height / 2);
}

function checkWinner(){
    for (let i = 0; i < posCaterpillarEnds.length; i++){
        if (posCaterpillarEnds >= finishLine){
            // Text decoration
            textSize(24);
            fill(0, 100, 0);
            textAlign(CENTER);
            noStroke();

            // Text
            text(`Caterpillar ${i + 1} wins!`, width / 2, height / 2);
            
            noLoop(); // Stop draw() loop
        }
    }
}