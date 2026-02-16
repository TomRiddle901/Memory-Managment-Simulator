// Sunrise
let sunHeight = 600;
let horizon = 360;

// Colors for sunrise
let greenVal = 0;
let redVal = 0;

function setup(){
    createCanvas(1280,720);
    noStroke();
}

function draw(){
    sky();

    sun();

    // Line of horizon
    stroke("black");
    line(0, horizon, 1280, horizon);

    // Grass
    fill("green");
    rect(0, horizon, 1280, 720);

    mountains();
    trees();

    // Reduce sun height by 2 until it reaches 130
    if (sunHeight > 130){
        sunHeight -= 2;
    }

    // Increase color variable by 4 or 1 during sunrise
    if (sunHeight < 480){
        redVal += 4;
        greenVal++;
    }
}

function sky(){
    background(redVal, greenVal, 0);
}

function sun(){
    fill(255, 135, 5, 60);
    circle(640, sunHeight, 160);
    fill(255, 100, 0, 100);
    circle(640, sunHeight, 160);
}

function mountains(){
    fill(200, 200, 200);
    triangle(200, 400, 520, 253, 800, 400);
    fill(150, 150, 150);
    triangle(200, 400, 520, 253, 350, 400);

    fill(200, 200, 200);
    triangle(-40, 400, 150, 200, 400, 400);
    fill(150, 150, 150);
    triangle(-40, 400, 150, 200, 50, 400);

    fill(200, 200, 200);
    triangle(650, 400, 1150, 60, 1350, 400);
    fill(150, 150, 150);
    triangle(1600, 400, 1150, 60, 1270, 400);
}

function trees(){
    fill(100, 50, 0);
    rect(100, 300, 20, 100);
    fill(0, 100, 0);
    triangle(50, 300, 110, 200, 170, 300);

    fill(100, 50, 0);
    rect(200, 300, 20, 100);
    fill(0, 100, 0);
    circle(210, 250, 100);

    fill(100, 50, 0);
    rect(300, 300, 20, 100);
    fill(0, 100, 0);
    triangle(250, 300, 310, 200, 370, 300);

    fill(100, 50, 0);
    rect(450, 300, 20, 100);
    fill(0, 100, 0);
    circle(460, 250, 100);

    fill(100, 50, 0);
    rect(500, 300, 20, 100);
    fill(0, 100, 0);
    triangle(450, 300, 510, 200, 570, 300);

    fill(100, 50, 0);
    rect(620, 300, 20, 100);
    fill(0, 100, 0);
    circle(630, 250, 100);

    fill(100, 50, 0);
    rect(700, 300, 20, 100);
    fill(0, 100, 0);
    triangle(650, 300, 710, 200, 770, 300);

    fill(100, 50, 0);
    rect(790, 300, 20, 100);
    fill(0, 100, 0);
    circle(800, 250, 100);

    fill(100, 50, 0);
    rect(900, 300, 20, 100);
    fill(0, 100, 0);
    triangle(850, 300, 910, 200, 970, 300);

    fill(100, 50, 0);
    rect(980, 300, 20, 100);
    fill(0, 100, 0);
    circle(990, 250, 100);

    fill(100, 50, 0);
    rect(1100, 300, 20, 100);
    fill(0, 100, 0);
    triangle(1050, 300, 1110, 200, 1170, 300);

    fill(100, 50, 0);
    rect(1200, 300, 20, 100);
    fill(0, 100, 0);
    circle(1210, 250, 100);
}