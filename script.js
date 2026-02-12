// Sunrise
let sunHeight;
let horizon = 200;

function setup(){
    createCanvas(400,400);
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
    circle(200, sunHeight, 160);

    // Line of horizon
    stroke("black");
    line(0, horizon, 400, horizon);

    // Grass
    fill("green");
    rect(0, horizon, 400, 200);
}