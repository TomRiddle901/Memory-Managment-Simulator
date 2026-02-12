// Sunrise
let sunHeight;
let horizon = 200;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(0);

    sunHeight = mouseY;

    // Sun
    fill("yellow");
    circle(200, sunHeight, 160);

    // Line of horizon
    stroke("green");
    line(0, horizon, 400, horizon);
}