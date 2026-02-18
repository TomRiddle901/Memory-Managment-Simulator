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
    leftRightButtons.id("leftRightButton"); // Game boy left/right buttons

    let actionButtons = createDiv();
    actionButtons.id("action-buttons"); // Game boy action buttons

    let leftRightContainer = createDiv();
    leftRightContainer.id("leftRightContainer"); // Game Boy left right buttons container

    let body = select('body');

    // Connecting containers to the body
    body.child(gameBoyEmulator);
    gameBoyEmulator.child(gameContainer);
    gameBoyEmulator.child(gameBoyText);
    gameBoyEmulator.child(buttonContainer);

    // Connecting elements to the respective containers
    scoreContainer.child(scoreSpan);
    gameContainer.child(scoreContainer);
    gameContainer.child(canvas);
    buttonContainer.child(arrowButtons);
    buttonContainer.child(actionButtons);

    // Style for the Game Boy emulator container
    gameBoyEmulator.style("background-color", "#8b8b8b");
    gameBoyEmulator.style("border", "10px solid #000");
    gameBoyEmulator.style("border-radius", "10px");
    gameBoyEmulator.style("padding", "20px");
    gameBoyEmulator.style("box-shadow", "0 0 20px rgba(0, 0, 0, 0.8)");

    // Style for the button container
    buttonContainer.style("display", "flex");
    buttonContainer.style("align-items", "center");
    buttonContainer.style("justify-content", "space-between");
    buttonContainer.style("margin-top", "20px");

    // Style for the arrow button container
    arrowButtons.style("display", "flex");
    arrowButtons.style("flex-direction", "column");
    arrowButtons.style("align-items", "center");

    // Style for the action buttons container
    actionButtons.style("display", "flex");
    actionButtons.style("align-items", "center");

    // Style for Game Boy score container
    scoreContainer.style("position", "absolute");
    scoreContainer.style("margin-left", "340px");
    scoreContainer.style("color", "#fff");
    scoreContainer.style("margin-top", "5px");

    // Style for Game Boy text
    gameBoyText.style("margin", "10px 145px");
    gameBoyText.style("font-size", "25px");
    gameBoyText.style("color", "#fff");
    gameBoyText.style("background-color", "#0077b6");
    gameBoyText.style("padding", "5px");
    gameBoyText.style("border-radius", "5px");

    // Buttons
    let upButton = createButton('▲');
    upButton.id('up');
    // Up button style
    upButton.style('color', 'white');
    upButton.style('background-color', 'red');
    upButton.style('width', '40px');
    upButton.style('height', '40px');
    upButton.style('margin-bottom', '10px');
    upButton.style('border-radius', '5px');
    // Connection to the buttons container
    arrowButtons.child(upButton);

    // Connect arrow buttons to the buttons container
    arrowButtons.child(leftRightContainer);

    let leftButton = createButton('◀');
    leftButton.id('left');
    // Left button style
    leftButton.style('color', 'white');
    leftButton.style('background-color', 'red');
    leftButton.style('width', '40px');
    leftButton.style('height', '40px');
    leftButton.style('margin-right', '30px');
    leftButton.style('border-radius', '5px');
    // Connection to the buttons container
    leftRightContainer.child(leftButton);

    let rightButton = createButton('▶');
    rightButton.id('right');
    // Right button style
    rightButton.style('color', 'white');
    rightButton.style('background-color', 'red');
    rightButton.style('width', '40px');
    rightButton.style('height', '40px');
    rightButton.style('margin-left', '5px');
    rightButton.style('border-radius', '5px');
    // Connection to the buttons container
    leftRightContainer.child(rightButton);

    let downButton = createButton('▼');
    // Connection to the buttons container
    arrowButtons.child(downButton);
    downButton.id('down');
    // Down button style
    downButton.style('color', 'white');
    downButton.style('background-color', 'red');
    downButton.style('width', '40px');
    downButton.style('height', '40px');
    downButton.style('margin-top', '10px');
    downButton.style('border-radius', '5px');

    let playButton = createButton('▶');
    // Connection to the action buttons container
    actionButtons.child(playButton);
    playButton.id('play');
    // Play button style
    playButton.style('background-color', '#0000ff');
    playButton.style('color', 'white');
    playButton.style('width', '60px');
    playButton.style('height', '60px');
    playButton.style('border-radius','50%');
    playButton.style('margin-right', '10px');

    let pauseButton = createButton('❚❚');
    pauseButton.id('pause');
    // Pause button style
    pauseButton.style('background-color', '#0000ff');
    pauseButton.style('color', 'white');
    pauseButton.style('width', '60px');
    pauseButton.style('height', '60px');
    pauseButton.style('font-size', '24px');
    pauseButton.style('border-radius', '50%');
    // connection to the action buttons container
    actionButtons.child(pauseButton);
}

function draw(){
    background(51);
}