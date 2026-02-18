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

    let body = select('body');

    // Connecting containers to the body
    body.child(gameBoyEmulator);
    body.child(gameContainer);
    body.child(buttonContainer);

    // Connecting elements to the respective containers
    scoreContainer.child(scoreSpan);
    gameContainer.child(scoreContainer);
    gameContainer.child(canvas);
    buttonContainer.child(arrowButtons);
    buttonContainer.child(actionbuttons);

    // Style for the Game Boy emulator container
    gameBoyEmulator.style("background-color", "#8b8b8b");
    gameBoyEmulator.style("border", "10px solid #000000");
    gameBoyEmulator.style("border-radius", "10px");
    gameBoyEmulator.style("box-shadow", "0 0 20px rgba(0, 0, 0, 0.8)");

    // Style for the button container
    buttonContainer.style("display", "flex");
    buttonContainer.style("align-items", "center");
    buttonContainer.style("justify-content", "space-between");
    buttonContainer.style("margin-top", "20px");

    // Style for the arrow button container
    arrowButtons.style("display", "flex");
    arrowButtons.style("align-items", "center");
}

function draw(){
    background(51);
}