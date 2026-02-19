// Game window settings
let cols = 20;
let rows = 15;
let gridSize = 21;
let winWidth = cols * gridSize;
let winHeight = rows * gridSize;

let food = { x: 0, y: 0 };
let snake = {
    x: 0,
    y: 0,
    xSpeed: 0,
    ySpeed: 0,
    body: [],
};
let score = 0;
let gamePaused = false;
let gameOver = false;
let gameStarted = false;
let fps = 5;

function drawFood() { // Function for draw a square apple
    let x = food.x * gridSize;
    let y = food.y * gridSize;
    fill(255, 0, 0);
    square(x, y, gridSize);
}

function moveFood() {
    // function for move the food into a random location
    food.x = floor(random(cols));
    food.y = floor(random(rows));
}

function resetSnake() { // Function for reset the snake data
    // Start at the center.
    snake.x = floor(cols / 2);
    snake.y = floor(rows / 2);

    // Move to the right.
    snake.xSpeed = 1;
    snake.ySpeed = 0;

    // Array to manage the body.
    snake.body = [];

    // Create a head segment.
    let head = {
        x: snake.x,
        y: snake.y,
    };

    snake.body.push(head); // Add the head to the body.
}

function checkEdges() { // End the game when snake collides the center
    // Right edge
    if (snake.x === cols) {
        gameOver = true;
        return;
    }

    // Left edge
    if (snake.x === -1) {
        gameOver = true;
        return;
    }

    // Top edge
    if (snake.y === -1) {
        gameOver = true;
        return;
    }

    // Bottom edge
    if (snake.y === rows) {
        gameOver = true;
        return;
    }
}

function moveSnake() {
    // Function for move the snake foward
    snake.x = snake.x + snake.xSpeed;
    snake.y = snake.y + snake.ySpeed;
}

function updateBody() { // function for update the snake body segments position
    // Update the end of the tail.
    for (let i = snake.body.length - 1; i > 0; i -= 1) {
        snake.body[i].x = snake.body[i - 1].x;
        snake.body[i].y = snake.body[i - 1].y;
    }

    // Update the head.
    snake.body[0].x = snake.x;
    snake.body[0].y = snake.y;
}

function drawSnake() {
    // Function for draw the snake
    fill(0, 255, 0);
    for (let segment of snake.body) {
        let x = segment.x * gridSize;
        let y = segment.y * gridSize;
        square(x, y, gridSize);
    }
}

function changeDir(xSpeed, ySpeed) {
    // Function for update the snake movement
    snake.xSpeed = xSpeed;
    snake.ySpeed = ySpeed;
}

function checkFood() { // Function for manage the snake diet
    if (snake.x === food.x && snake.y === food.y) {
        // Add a new body segment.
        let segment = { x: -1, y: -1 };
        snake.body.push(segment);

        // Update the score.
        score += 10;

        // Place the food in a random location.
        moveFood();
    }
}

function checkSelf() {
    // Function for end the game when the sknake collides with the edges
    for (let i = 1; i < snake.body.length; i += 1) {
        let segment = snake.body[i];
        if (snake.x === segment.x && snake.y === segment.y) {
            gameOver = true;
            return;
        }
    }
}

// Functions for button control
function goUp() {
    snake.xSpeed = 0;
    snake.ySpeed = -1;
}

function goDown() {
    snake.xSpeed = 0;
    snake.ySpeed = 1;
}

function goLeft() {
    snake.xSpeed = -1;
    snake.ySpeed = 0;
}

function goRight() {
    snake.xSpeed = 1;
    snake.ySpeed = 0;
}

function keyPressed() {// Built-in p5.js function for keyboard buttons pressing
    // ARROW control
    if (keyCode === UP_ARROW) {
        goUp();
    }
    if (keyCode === DOWN_ARROW) {
        goDown();
    }
    if (keyCode === LEFT_ARROW) {
        goLeft();
    }
    if (keyCode === RIGHT_ARROW) {
        goRight();
    }
}

function startGame() {
    score = 0;
    gameStarted = true;
    gamePaused = false;
    if (gameOver === true) {
        resetSnake();
        gameOver = false;
    }
    loop();
}

function pauseGame() {
    gamePaused = true;
}

function displayStartMessage() {
    // Display start message
    textSize(20);
    textAlign(CENTER);
    fill(255, 0, 0);
    text('Press ▶ to Start', width / 2, height / 2);
}

function displayEndMessage() {
    // Display end message
    background(0);
    textSize(40);
    textAlign(CENTER);
    fill(255, 0, 0);
    text('Game Over', width / 2, height / 2);
    textSize(14);
    text('Press ▶ to Start', width / 2, height / 2 + 50);
}