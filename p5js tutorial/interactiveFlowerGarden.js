let flower = {
    x: 200,
    y: 100,
    emoji: '🌸'
};

function setup(){
    createCanvas(500, 500);

    console.log(flower);
}

function draw(){
    background("lightblue");

    text(flower.emoji, flower.x, flower.y); // Display flower object
}