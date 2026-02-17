function setup(){
    createCanvas(500, 500);
    frameRate(1);
}

function draw(){
    background("lightblue");

    textSize(100);
    text(flower.emoji, flower.x, flower.y); // Display flower object

    let myFlower = createFlowers();

    // Create an ellipse using myFlower properties
    fill(myFlower.color);
    ellipse(myFlower.x, myFlower.y, myFlower.size);

    let flower1 = createFlowers();
    drawFlower(flower1);
}

function createFlowers(){
    let flower = {
        x: random(20, 380),
        y: random(20, 380),
        size: random(20, 80),
        lifespan: random(255, 300),
        color: color(random(255), random(255), random(255))
    };

    return flower;
}

function drawFlower(flower){
    noSroke();
    fill(flower.color);

    // Draw pedals
    ellipse(flower.x, flower.y, flower.size / 2, flower.size);
    ellipse(flower.x, flower.y, flower.size, flower.size / 2);

    //Draw the circle
    fill(255, 204, 0);
    ellipse(flower.x, flower.y, flower.size / 2);
}