// Sunrise
let sunHeight;
let horizon = 360;

function setup(){
    createCanvas(1280,720);
}

function draw(){
    sunHeight = mouseY;

    // Change background color based on sun height
    if (sunHeight < horizon){
        background("lightblue");
    }else{
        background("darkblue");
    }

    // Sun
    fill("yellow");
    circle(640, sunHeight, 160);

    // Line of horizon
    stroke("black");
    line(0, horizon, 1280, horizon);

    // Grass
    fill("green");
    rect(0, horizon, 1280, 720);
}