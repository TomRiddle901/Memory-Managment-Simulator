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

function updateBody(){ // Update position of the snake body segments
    // Update the end of the tail
    for (let i = snake.body.length; i > 0; i--){
        snake.body[i].x = snake.body[i - 1].x;
        snake.body[i].y = snake.body[i - 1].y;
    }

    // Update the head
    snake.body[0].x = snake.x;
    snake.body[0].y = snake.y;
}

function drawSnake(){
    fill(0, 255, 0); // snake color

    for (let segment of snake.body){
        let x = segment.x * gridSize;
        let y = segment.y * gridSize;
        square(x, y, gridSize);
    }
}

function changeDirection(xSpeed, ySpeed){
    // Update the snake direction
    snake.xSpeed = xSpeed;
    snake.ySpeed = ySpeed;
}

function checkFood(){ // function for manage the snake diet
    if (snake.x === food.x && snake.y === food.y){
        let segment = {x: -1, y: -1};
        snake.body.push(segment); // add a new segment of the body

        score += 10; // update the score

        moveFood(); // regenerate new food on a random location
    }
}

function checkSelf(){ // function for check self collision
    for (let i = 1; i < snake.body.length; i += 1){
        let segment = snake.body[i];
        if (snake.x === segment.x && snake.y === segment.y){
            gameOver = true;
            return;
        }
    }
}

// Functions for button control
function goUp(){
    snake.xSpeed = 0;
    snake.ySpeed = -1;
}

function goDown(){
    snake.xSpeed = 0;
    snake.ySpeed = 1;
}

function goLeft(){
    snake.xSpeed = -1;
    snake.ySpeed = 0;
}

function goRight(){
    snake.xSpeed = 1;
    snake.ySpeed = 0;
}

function keyPressed(){ // Built-in p5js function for keyboard buttons pressing
    if (keyCode === UP_ARROW){
        goUp();
    }
    if (keyCode === DOWN_ARROW){
        goDown();
    }
    if (keyCode === LEFT_ARROW){
        goLeft();
    }
    if (keyCode === RIGHT_ARROW){
        goRight();
    }
}