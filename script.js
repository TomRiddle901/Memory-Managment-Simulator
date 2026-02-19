// Dati RAM
let ramBlocks = []; // Blocchi RAM
let processes = []; // Processi in attesa di allocazione

let ramSize = 512; // Dimenzione della RAM
let osSize = 30; // Dimenzione del Sistema Operativo caricato in RAM

function setup(){
    createCanvas(1520, 700);
    initRam();
}

function draw(){
    background(200, 200, 200);
    drawRam();
}

function initRam(){
    ramBlocks = [];

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

function addProcess(size){
    let proc = {}; // Oggetto processo
    proc.name = "P" + (processes.length + 1); // Nome del processo
    proc.size = size; // Dimenzione del processo

    processes.push(proc); // Inserisci processo
}

// Algoritmo First Fit
function firstFit(){
    if (processes.length === 0){
        console.warn("Nessun processo");
        return;
    }

    let proc = processes.shift(); // Prende il primo elemento dall'array

    for (let i = 0; i < ramBlocks.length; i++){
        let block = ramBlocks[i];

        if (block.free && block.size >= proc.size){
            let remaining = block.size - proc.size;

            // Blocco occupato
            let usedBlock = {};
            usedBlock.size = proc.size;
            usedBlock.free = false;
            usedBlock.process = proc;
            usedBlock.color = [random(50, 255), random(50, 255), random(50, 255)];

            // sostituisce il blocco libero
            ramBlocks[i] = usedBlock;

            // Nuovo blocco libero se rimane spazio
            if (remaining > 0){
                let freeBlock = {};
                freeBlock.size = remaining;
                freeBlock.free = true;
                freeBlock.process = null;
                freeBlock.color = [220, 220, 220];

                ramBlocks.splice(i + 1, 0, freeBlock);
            }

            console.log("Allocato: " + proc.name + " Frammentazione: " + remaining + " MB");
            return;
        }
    }

    console.warn(proc.name + " NON allocato -> memoria insufficente");
}

// Algoritmo Best Fit
function bestFit(){

}

// Algoritmo worst fit
function worstFit(){

}

// Deallocazione di un processo
function deallocation(){

}

// Unione dei buchi della RAM
function mergeFreeBlocks(){

}