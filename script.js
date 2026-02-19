// RAM
let emptyRam = [];
let usedRam = [];
let process = [];

function setup(){
    createCanvas(1520, 700);
}

function draw(){
    background(200, 200, 200);

    // Div rettangolo RAM
    let ramDiv = createDiv();
    ramDiv.id("ramDiv");

    ramDiv.child(
        fill(255, 255, 255),
        rect(67, 40, 300, 600));

    // DIV sistema operativo (rimane sempre alla stessa dimensione)
    let systemProcessDiv = createDiv();
    systemProcessDiv.id('systemProcessDiv');

    systemProcessDiv.child(
        fill(150, 140, 40),
        rect(67, 40, 300, 30));
    systemProcessDiv.child(
        fill(0),
        textSize(15),
        text("Sistema Operativo", 150, 60));

    // Aggiungi tutto al body
    let body = select('body');
    body.child(ramDiv);
    body.child(systemProcessDiv);
}