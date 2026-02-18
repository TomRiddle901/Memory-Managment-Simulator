let winWidth = 400;
let winHeight = 300;

function setup(){
    let canvas = createCanvas(winWidth, winHeight);

    let gameBoyEmulator = createDiv();
    gameBoyEmulator.id("game-boy-emulator"); // Game boy emulator container

    let gameContainer = createDiv();
    gameContainer.id("game-container"); // Game boy emulator container

    let scoreContainer = createDiv();
    scoreContainer.id("score-container"); // Game boy emulator score container
}

function draw(){
    background(51);
}