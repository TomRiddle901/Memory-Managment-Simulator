// Dati RAM
let ramBlocks = []; // Blocchi RAM
let processes = []; // Processi in attesa di allocazione

let ramSize = 512; // Dimenzione della RAM
let osSize = 30; // Dimenzione del Sistema Operativo caricato in RAM

function setup(){
    createCanvas(1520, 700);
    select("#canvasContainer").child(canvas);
    initRam();
}

function draw(){
    background(200, 200, 200);
    drawRam();
}

function initRam(){
    // Aggiorna dimensione RAM
    let inputRam = select("#ramSize").value();
    if(inputRam !== "" && inputRam > 30){
        ramSize = parseInt(inputRam);
    }else{
        alert("Inserici un valore valido > 30!");
    }

    ramBlocks = [];

    // Blocco SO
    let osBlock = {};
    osBlock.size = osSize;
    osBlock.free = false;
    osBlock.process = { name: "Sistema Operativo" };
    osBlock.color = [150, 140, 40];
    ramBlocks.push(osBlock);

    // Blocco libero
    let freeBlock = {};
    freeBlock.size = ramSize - osSize;
    freeBlock.free = true;
    freeBlock.process = null;
    freeBlock.color = [220, 220, 220];
    ramBlocks.push(freeBlock);

    // Reset processi in attesa
    processes = [];
    procCounter = 1;

    renderProcessList();
    updateCalculations("Reset RAM completato!");
}

function drawRam() {
    let ramX = 67;
    let ramY = 40;
    let ramW = 300;
    let ramH = 600;

    // Cornice RAM
    strokeWeight(2);
    stroke(0);
    fill(30);
    rect(ramX - 5, ramY - 5, ramW + 10, ramH + 10, 10);

    // Sfondo RAM
    fill(255);
    rect(ramX, ramY, ramW, ramH, 8);

    let currentY = ramY;

    for (let i = 0; i < ramBlocks.length; i++){
        let block = ramBlocks[i];
        let h = (block.size / ramSize) * ramH;

        // Ombra blocco
        noStroke();
        fill(0, 0, 0, 40);
        rect(ramX + 3, currentY + 3, ramW, h, 3);

        // Blocco principale
        stroke(0);
        strokeWeight(1);
        if (block.free){
            fill(70); // Colore del blocco libero
        }else{
            fill(block.color);
        }
        rect(ramX, currentY, ramW, h);

        // Testo
        let textColor;
        if (block.free){
            textColor = 255; // Blocco libero scuro -> testo chiaro
        }else{
            textColor = getContrastColor(block.color);
        }
        textStyle(BOLD);
        fill(textColor);
        textSize(14);
        textAlign(LEFT, CENTER);
        let label = "";
        if (block.free){
            label = "Libera - " + block.size + " MB";
        } else {
            label = block.process.name + " - " + block.size + " MB";
        }
        text(label, ramX + 10, currentY + h / 2);

        // Linea spaziatrice
        stroke(0, 80);
        line(ramX, currentY, ramX + ramW, currentY);

        currentY += h;
    }
}

// Aggiungi un processo
function addProcess(){
    let inputSize = select("#procSize").value();
    if(inputSize === "" || parseInt(inputSize) <= 0){
        alert("Inserisci dimensione del processo valida");
        return;
    }

    let proc = {};
    proc.name = "P" + procCounter;
    proc.size = parseInt(inputSize);
    processes.push(proc);

    procCounter++;
    renderProcessList();
}

// Mostra i processi in attesa
function renderProcessList(){
    let list = document.getElementById("processList");
    list.innerHTML = "";

    for (let i = 0; i < processes.length; i++){
        let li = document.createElement("li");
        li.textContent = processes[i].name + " - " + processes[i].size + " MB";
        list.appendChild(li);
    }
}

// Call algoritmo First Fit
function firstFit(){ allocateProcess("first"); }
function bestFit(){ allocateProcess("best"); }
function worstFit(){ allocateProcess("worst"); }

// Funzione unica che gestisce gli algoritmi
function allocateProcess(algorithm){
    if(processes.length === 0){
        alert("Nessun processo in attesa");
        return;
    }

    let proc = processes.shift();
    let index = -1;

    if(algorithm === "first"){
        for(let i = 0; i < ramBlocks.length; i++){
            if(ramBlocks[i].free && ramBlocks[i].size >= proc.size){
                index = i;
                break; // Prima partizione libera
            }
        }
    } else if(algorithm === "best"){
        let minSize = Infinity;
        for(let i = 0; i < ramBlocks.length; i++){
            if(ramBlocks[i].free && ramBlocks[i].size >= proc.size && ramBlocks[i].size < minSize){
                minSize = ramBlocks[i].size;
                index = i;
            }
        }
    } else if(algorithm === "worst"){
        let maxSize = -1;
        for(let i = 0; i < ramBlocks.length; i++){
            if(ramBlocks[i].free && ramBlocks[i].size >= proc.size && ramBlocks[i].size > maxSize){
                maxSize = ramBlocks[i].size;
                index = i;
            }
        }
    }

    if(index === -1){
        alert(proc.name + " NON allocato -> memoria insufficiente");
        return;
    }

    let block = ramBlocks[index];
    let remaining = block.size - proc.size;

    // Blocco occupato
    let usedBlock = {};
    usedBlock.size = proc.size;
    usedBlock.free = false;
    usedBlock.process = { name: proc.name };
    usedBlock.color = [random(50,255), random(50,255), random(50,255)];

    ramBlocks[index] = usedBlock;

    // Blocco libero residuo
    if(remaining > 0){
        let freeBlock = {};
        freeBlock.size = remaining;
        freeBlock.free = true;
        freeBlock.process = null;
        freeBlock.color = [220,220,220];
        ramBlocks.splice(index+1, 0, freeBlock);
    }

    renderProcessList();
    renderDeallocSelect();
    updateCalculations(proc.name + " allocato. Frammentazione: " + remaining + " MB");
}

// Funzione per aggiornare il select con i processi allocati
function renderDeallocSelect(){
    let sel = document.getElementById("deallocProcess");
    sel.innerHTML = '<option value="">Seleziona un processo</option>';

    for (let i = 0; i < ramBlocks.length; i++){
        let block = ramBlocks[i];
        if (!block.free && block.process.name !== "Sistema Operativo"){
            let option = document.createElement("option");
            option.value = block.process.name;
            option.textContent = block.process.name + " - " + block.size + " MB";
            sel.appendChild(option);
        }
    }
}

// Deallocazione di un processo
function deallocation(procName = null){
    for(let i = ramBlocks.length-1; i >=0; i--){
        let block = ramBlocks[i];
        if(!block.free && block.process.name !== "Sistema Operativo"){
            if(procName === null || block.process.name === procName){
                block.free = true;
                block.process = null;
                block.color = [220,220,220];
                mergeFreeBlocks();
                updateCalculations("Processo deallocato");
                renderDeallocSelect();
                return;
            }
        }
    }
    alert("Nessun processo da deallocare!");
}

// Unione dei buchi della RAM
function mergeFreeBlocks(){
    let i = 0;
    while(i < ramBlocks.length - 1){
        let current = ramBlocks[i];
        let next = ramBlocks[i+1];

        // Verifica che entrambi siano blocchi liberi
        if(current.free === true && next.free === true){
            // Unisci il prossimo blocco in quello corrente
            current.size += next.size;

            // Rimuovi il blocco successivo
            ramBlocks.splice(i+1, 1);

            // Non incrementare i, così controlla il nuovo "next"
        } else {
            i++;
        }
    }
}

// Calcoli della memoria
function updateCalculations(msg){
    let totalFree = 0;
    for(let i = 0; i < ramBlocks.length; i++){
        if(ramBlocks[i].free){
            totalFree += ramBlocks[i].size;
        }
    }
    let output = document.getElementById("calcolaOutput");
    output.innerHTML = msg + "<br>Memoria libera totale: " + totalFree + " MB";
}

// Pulsanti pagina HTML
window.onload = function(){
    select("#addProcess").mousePressed(()=>addProcess());
    select("#allocate").mousePressed(()=>{
        let algo = select("#allocationAlgorithm").value();
        if(algo === "first"){ firstFit(); }
        else if(algo === "best"){ bestFit(); }
        else if(algo === "worst"){ worstFit(); }
        else{ alert("Seleziona un algoritmo valido"); }
    });
    select("#reset").mousePressed(()=>initRam());
    document.getElementById("deallocBtn").addEventListener("click", ()=>{
        let sel = document.getElementById("deallocProcess");
        let procName = sel.value;
        if (procName !== ""){
            deallocation(procName);
        }else{
            alert("Seleziona un processo da deallocare");
        }
    });

    // Popola select algoritmi
    let sel = select("#allocationAlgorithm");
    sel.option("First Fit","first");
    sel.option("Best Fit","best");
    sel.option("Worst Fit","worst");
}

function getContrastColor(rgb){
    let r = rgb[0]
    let g = rgb[1];
    let b = rgb[2];

    // Formula della luminanza percepita
    let luminance = (0.99 * r + 0.587 * g + 0.114 * b);

    if (luminance > 186){
        return 0; // Nero
    }else{
        return 255; // Bianco
    }
}