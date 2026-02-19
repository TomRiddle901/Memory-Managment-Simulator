function setup() {
    let canvas = createCanvas(winWidth, winHeight);

    // Create the game boy emulator container
    let gameBoyEmulator = createDiv();
    gameBoyEmulator.id('game-boy-emulator');

    // Create the game container
    let gameContainer = createDiv();
    gameContainer.id('game-container');

    // Create the game boy text
    let gameBoyText = createDiv('GameBoy');
    gameBoyText.id('game-boy-text');
    gameBoyText.style('margin', '10px 145px');
    gameBoyText.style('font-size', '25px');
    gameBoyText.style('color', '#fff');
    gameBoyText.style("background-color", "#0077b6");
    gameBoyText.style('padding', '10px');
    gameBoyText.style('border-radius', '5px');

    gameBoyText.style('font-family', 'PressStart2P-Regular');

    // Create the button container
    let buttonContainer = createDiv();
    buttonContainer.id('button-container');

    // Create the arrow buttons container
    let arrowButtons = createDiv();
    arrowButtons.id('arrow-buttons');

    // Create an up button
    let upButton = createButton('&#9650;');
    upButton.id('up');
    // Set its styles
    upButton.style('color', 'white');
    upButton.style('background-color', 'red');
    upButton.style('width', '40px');
    upButton.style('height', '40px');
    arrowButtons.child(upButton);
    upButton.style('margin-bottom', '10px');
    upButton.style('border-radius', '5px');
    // Add a callback function
    upButton.mouseClicked(goUp);

    // Create the container for the left and right buttons
    let leftRightContainer = createDiv();
    arrowButtons.child(leftRightContainer);

    // Create the left button
    let leftButton = createButton('&#9664;');
    leftButton.id('left');
    // Set its styles
    leftButton.style('color', 'white');
    leftButton.style('background-color', 'red');
    leftButton.style('width', '40px');
    leftButton.style('height', '40px');
    leftButton.style('margin-right', '30px');
    leftButton.style('border-radius', '5px');
    // Add it to the leftRightContainer
    leftRightContainer.child(leftButton);
    // Add a callback function
    leftButton.mouseClicked(goLeft);

    // Create the right button
    let rightButton = createButton('&#9654;');
    rightButton.id('right');
    // Set its styles
    rightButton.style('color', 'white');
    rightButton.style('background-color', 'red');
    rightButton.style('width', '40px');
    rightButton.style('height', '40px');
    rightButton.style('margin-left', '5px');
    rightButton.style('border-radius', '5px');
    // Add it to the leftRightContainer
    leftRightContainer.child(rightButton);
    // Add a callback function
    rightButton.mouseClicked(goRight);

    // Create the down button
    let downButton = createButton('&#9660;');
    arrowButtons.child(downButton);
    downButton.id('down');
    // Set its styles
    downButton.style('color', 'white');
    downButton.style('background-color', 'red');
    downButton.style('width', '40px');
    downButton.style('height', '40px');
    downButton.style('margin-top', '10px');
    downButton.style('border-radius', '5px');
    // Add a callback function
    downButton.mouseClicked(goDown);

    // Create the action buttons container
    let actionButtons = createDiv();
    actionButtons.id('action-buttons');

    // Create the play button
    let playButton = createButton('▶');
    actionButtons.child(playButton);
    playButton.id('play');
    // Set its styles
    playButton.style('background-color', 'blue');
    playButton.style('color', 'white');
    playButton.style('width', '60px');
    playButton.style('height', '60px');
    playButton.style('font-size', '24px');
    // Make it a circle
    playButton.style('border-radius', '50%');
    // Add spacing
    playButton.style('margin-right', '10px');
    // Add a callback function
    playButton.mouseClicked(startGame);

    // Create the pause button
    let pauseButton = createButton('❚❚');
    pauseButton.id('pause');
    // Set its styles
    pauseButton.style('background-color', 'blue');
    pauseButton.style('color', 'white');
    pauseButton.style('width', '60px');
    pauseButton.style('height', '60px');
    pauseButton.style('font-size', '24px');
    // Make it a circle
    pauseButton.style('border-radius', '50%');
    actionButtons.child(pauseButton);
    // Add a callback function
    pauseButton.mouseClicked(pauseGame);

    // Set styles for the game boy emulator container
    gameBoyEmulator.style('background-color', '#8b8b8b');
    gameBoyEmulator.style('border', '10px solid #000');
    gameBoyEmulator.style('border-radius', '10px');
    gameBoyEmulator.style('padding', '20px');

    // Set styles for the button container
    buttonContainer.style('display', 'flex');
    buttonContainer.style('align-items', 'center');
    buttonContainer.style('justify-content', 'space-between');
    buttonContainer.style('margin-top', '20px');

    // Set styles for the arrow buttons container
    arrowButtons.style('display', 'flex');
    arrowButtons.style('flex-direction', 'column');
    arrowButtons.style('align-items', 'center');

    // Set styles for the action buttons container
    actionButtons.style('display', 'flex');
    actionButtons.style('align-items', 'center');

    // Add elements to their respective containers
    gameContainer.child(canvas);
    buttonContainer.child(arrowButtons);
    buttonContainer.child(actionButtons);

    // Add containers to the main container
    gameBoyEmulator.child(gameContainer);
    gameBoyEmulator.child(gameBoyText);
    gameBoyEmulator.child(buttonContainer);

    // Add the gameBoyEmulator to the sketch
    let body = select('body');
    // Add emulator as the first child element in the page's body.
    body.child(gameBoyEmulator);

    // snakeGame.js
    frameRate(fps);

    // Move the food to a random location.
    moveFood();

    // Reset the snake.
    resetSnake();
}

function draw() {
    background(51);

    // Skip the rest of the draw function if the game hasn't started.
    if (gameStarted === false) {
        displayStartMessage();
        return;
    }

    // Update the game state.
    if (gamePaused === false) {
        moveSnake();
        checkEdges();
        checkSelf();
        checkFood();
        updateBody();
    }

    // Draw the snake and its food.
    drawFood();
    drawSnake();

    // Skip the rest of the draw function if the game has ended
    if (gameOver === true) {
        displayEndMessage();
        noLoop();
    }

    // Update the score.
    textAlign(RIGHT);
    fill(255);
    text(`Score: ${score}`, width - 10, 20);
    textSize(15)
}