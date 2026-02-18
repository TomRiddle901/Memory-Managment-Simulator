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