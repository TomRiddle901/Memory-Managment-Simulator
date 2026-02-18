let winWidth = 400;
let winHeight = 300;

function setup(){
    let canvas = createCanvas(winWidth, winHeight);

    let gameBoyEmulator = createDiv();
    gameBoyEmulator.id("game-boy-emulator"); // Game boy emulator container

    let gameContainer = createDiv();
    gameContainer.id("game-container"); // Game boy emulator container

    let scoreContainer = createDiv("Score: ");
    scoreContainer.id("score-container"); // Game boy emulator score container

    let scoreSpan = createP("0");
    scoreSpan.id("score"); // Score element

    let gameBoyText = createDiv("GameBoy");
    gameBoyText.id("game-boy-text"); // Game boy text

    let buttonContainer = createDiv();
    buttonContainer.id("button-container"); // Game boy buttons container

    let arrowButtons = createDiv();
    arrowButtons.id("arrow-buttons"); // Game boy arrow buttons container

    let leftRightButtons = createDiv();
    leftRightButtons.id("left-right-buttons"); // Game boy left/right buttons

    let actionbuttons = createDiv();
    actionbuttons.id("action-buttons"); // Game boy action buttons
}

function draw(){
    background(51);
}