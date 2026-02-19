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
        name: 'OS'
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

function drawRam(){

}