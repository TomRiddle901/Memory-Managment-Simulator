// Sunrise
let sunHeight = 600;
let horizon = 360;

// Colors for sunrise
let greenVal = 0;
let redVal = 0;

function setup(){
    createCanvas(1280,720);
    nostroke(); // Removes shape outlines
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