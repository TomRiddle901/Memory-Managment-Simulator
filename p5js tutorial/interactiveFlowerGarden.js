let flowersArray = [];

function setup(){
    createCanvas(500, 500);
    frameRate(1);

    flowerPower();
}

function draw(){
    background("lightblue");

    /*
    let flower1 = createFlowers();
    drawFlower(flower1);
    */

    for (let flowers of flowersArray){
        drawFlower(flowers);
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
    circle(flower.x, flower.y, flower.size / 2);
}

function flowerPower(){
    for (let i = 0; i < 20; i++){
        let flower = createFlowers();
        flowersArray.push(flower);
    }
}

function updateAndDrawFlowers(){
    for (let flower  of flowersArray) {
        drawFlower(flower);

        flower.size *= 0.99;
        flower.lifespan -= 1;

        if (flower.lifespan <= 0) {
            let i = flower.indexOf(flower);

            flower.splice(i, 1);
        }
    }
}

function mousePressed(){
    let flower = createFlowers();

    flower.x = mouseX;
    flower.y = mouseY;

    flowersArray.push(flower);
}