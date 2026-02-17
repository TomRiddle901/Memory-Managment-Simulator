let flowersArray = [];

function setup(){
    createCanvas(500, 500);
    frameRate(1);
}

function draw(){
    background("lightblue");

    let flower1 = createFlowers();
    drawFlower(flower1);

    for (let flower of flowersArray){
        drawFlower(flower);
    }
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
    noStroke();
    fill(flower.color);

    // Draw pedals
    ellipse(flower.x, flower.y, flower.size / 2, flower.size);
    ellipse(flower.x, flower.y, flower.size, flower.size / 2);

    //Draw the circle
    fill(255, 204, 0);
    ellipse(flower.x, flower.y, flower.size / 2);
}

function flowerPower(){
    for (let i = 0; i < 20; i++){
        let multiFlowers = createFlowers();
        drawFlower(multiFlowers);
    }
}