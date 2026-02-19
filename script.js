// Dati RAM
let ramBlocks = []; // Blocchi RAM
let processes = []; // Processi in attesa di allocazione

let ramSize = 512; // Dimenzione della RAM
let osSize = 30; // Dimenzione del Sistema Operativo caricato in RAM

function setup(){
    createCanvas(1520, 700);
    canvas.parent("canvasContainer");
    initRam();
}

function draw(){
    background(200, 200, 200);
    drawRam();
}

function initRam(){
    // Aggiorna dimensione RAM da input
    let inputRam = select("#ramSize").value();
    if (inputRam !== ""){
        ramSize.parseInt(inputRam);
    }

    ramblocks = [];

    // Blocco del SO sempre occupato
    let osBlock = {}; // Oggetto blocco OS
    osBlock.size = osSize;
    osBlock.free = false;
    osBlock.process = {
        name: 'Sistema Operativo'
    }
    osBlock.color = [220, 220, 220];

    ramBlocks.push(osBlock); // Inserisco il blocco del sistema operativo nella RAM

    // Memoria libera
    let freeBlock = {};
    freeBlock.size = ramSize - osSize;
    freeBlock.free = true;
    freeBlock.process = null; // Nessun processo all'interno della RAM libera
    freeBlock.color = [220, 220, 220];

    ramBlocks.push(freeBlock); // Inserisco il blocco della memoria libera

    processes = [];
    renderProcessList();
    updateCalculations("Reset RAM completato!");
}

function drawRam() {
    let ramX = 67;
    let ramY = 40;
    let ramW = 300;
    let ramH = 600;

    // Rettangolo principale RAM
    stroke(0);
    fill(255);
    rect(ramX, ramY, ramW, ramH);

    let currentY = ramY;

    for (let i = 0; i < ramBlocks.length; i++){
        let block = ramBlocks[i];

        // Altezza in base alla dimensione del processo
        let h = (block.size / ramSize) * ramH;

        fill(block.color);
        rect(ramX, currentY, ramW, h); // Rettangolo del processo

        fill(0);
        textSize(14);
        if (block.free){
            text("Libera - " + block.size + " MB", ramX + 10, currentY + 20); // Testo per quanta RAM libera rimane
        }else{
            text(block.process.name + " - " + block.size + " MB", ramX + 10, currentY + 20); // Testo per la dimensione del processo
        }

        currentY = currentY + h; // Scende sotto il processo aggiunto
    }
}

// Aggiungi un processo
function addProcess(){
    let inputSize = select("#procSize").value;
    if (inputSize !== "" || parseInt(inputSize) <= 0){
        alert("Inserisci dimensione del processo valida");
        return;
    }

    let proc = {}; // Oggetto processo
    proc.name = "P" + (processes.length + 1); // Nome del processo
    proc.size = parseInt(inputSize); // Dimenzione del processo
    processes.push(proc); // Inserisci processo

    renderProcessList();
}

// Mostra i processi in attesa
function renderProcessList(){
    let list = select("#processList").value;
    list.html(""); // Pulisce la lista
    for (let i = 0; i < processes.length; i++){
        let li = createElement("li", processes[i].name + " - " + processes[i].size + " MB");
        list.child(li);
    }
}

// Call algoritmo First Fit
function firstFit(){
    allocateProcess("first");
}

// Call algoritmo Best Fit
function bestFit(){

}

// Call algoritmo worst fit
function worstFit(){

}

// Deallocazione di un processo
function deallocation(){

}

// Unione dei buchi della RAM
function mergeFreeBlocks(){

}