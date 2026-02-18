let cols = 20; // Game columns
let rows = 15; // Game rows
let gridSize = 20; // Dimension of grid

// Window dimension
let winWidth = cols * gridSize;
let winHeight = rows * gridSize;

// Snake options and settings
let food = {x: 0, y: 0};
let snake = {
    x: 0,
    y: 0,
    xSpeed: 0,
    ySpeed: 0,
    body: []
};

// Game settings
let score = 0;
let gamePaused = false;
let gameOver = false;
let gameStarted = false;
let fps = 5;

function drawFood(){
    // Food cordinates
    let x = food.x * gridSize;
    let y = food.y * gridSize;

    // Food style
    fill(255, 255, 0);
    square(x, y, gridSize);
}

function moveFood(){ // Move randomly the food
    food.x = random(random(cols));
    food.y = random(random(rows));
}

function resetSnake(){
    // Start at the center
    snake.x = floor(cols / 2);
    snake.y = floor(rows / 2);

    // Move the snake to the right
    snake.xSpeed = 1;
    snake.ySpeed = 0;

    snake.body = []; // array to manage the body

    let head = { // head segment
        x: snake.x,
        y: snake.y
    }

    snake.body.push(head); // add the head to the body
}

function checkEdges(){ // function for end the game when snake collides with an edge
    // Right edge
    if (snake.x === cols){
        gameOver = true;
        return;
    }

    // Left edge
    if (snake.x === -1){
        gameOver = true;
        return;
    }

    // Top edge
    if (snake.y === -1){
        gameOver = true;
        return;
    }

    // Bottom edge
    if (snake.y === rows){
        gameOver = true;
        return;
    }
}

function moveSnake(){ // Moves snake foward
    snake.x += snake.xSpeed;
    snake.y += snake.ySpeed;
}