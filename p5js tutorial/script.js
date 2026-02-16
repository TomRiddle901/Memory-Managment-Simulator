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

    multiMountains();
    bushes();
    forest();

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

function mountains(x, y, size){
    fill(200, 200, 200);
    triangle(x, y, x+size, y-size, x+size*2, y);
    fill(150, 150, 150);
    triangle(x+size, y, x+size*2, y-size, x+size*3, y);
}

function multiMountains(){
    let x = 0;
    let y = horizon;
    
    for (let i = 0; i < 1000; i++){
        mountains(x, y, 200);
        x += 200;
    }
}

function tree(x, y, size){
    fill(100, 50, 0);
    rect(x-size, y, size*2, size*6);
    fill(0, 100, 0);
    triangle(x-size*3, y, x, y-size*8, x+size*3, y);
}

function treeLine(x){
    let y = -0.7 * x + 450;
    return y;
}

function forest(){
    let x = 150;
    let y = treeLine(x);

    for (let i = 0; i < 1000; i++){
        tree(x, y, 10);
        x += 50;
        y = treeLine(150);
    }
}

function bush(x, y, size){
    fill(0, 100, 0);
    circle(x, y, size*2);
    circle(x-size, y+size/2, size*2);
    circle(x+size, y+size/2, size*2);
}

function bushes(){
    let x = 100;
    let y = 500;

    for (let i = 0; i < 1000; i++){
        bush(x, y, 20);
        x += 100;
    }
}

function keyPressed(){
    redVal = 0;
    greenVal = 0;
    sunHeight = 600;
}