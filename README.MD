# Memory Manager Simulator

## Descrizione

**Memory Manager Simulator** è un’applicazione web sviluppata con **HTML, CSS e JavaScript** che simula il funzionamento della **gestione della memoria centrale (RAM)** nei sistemi operativi.

L’obiettivo del progetto è comprendere visivamente come vengono allocati e deallocati i processi in memoria usando la tecnica delle:

> **Dynamic Partitions (Partizioni Dinamiche)**

---

## Funzionalità

L’applicazione permette di:

- Visualizzare la RAM come **rettangolo verticale**
- Inserire nuovi **processi**
- Simulare l’allocazione con **partizioni dinamiche**
- Mostrare lo **spazio libero**
- Evidenziare la **frammentazione esterna**
- Fornire una **spiegazione didattica** della tecnica

---

## Tecnologie Utilizzate

- **HTML** → Struttura della pagina
- **CSS** → Stile e layout grafico
- **JavaScript** → Logica della simulazione
- **p5.js** → Rendering grafico della RAM

---

## Tecnica di Allocazione: Dynamic Partitions

Nelle **partizioni dinamiche**:

- La memoria **non è divisa in blocchi fissi**
- Ogni processo occupa **solo lo spazio necessario**
- Le partizioni vengono create **dinamicamente**

### ✔Vantaggi
- Migliore utilizzo della memoria
- Riduzione dello spreco interno

### Svantaggi
- Possibile **frammentazione esterna**
- Necessità di **compattazione**

---

## Come Avviare il Progetto

1. Scaricare o clonare il repository
2. Aprire il file `index.html` in un browser

Non sono richieste installazioni aggiuntive.

---

## Struttura del Progetto

.<br>
├── index.html → Pagina principale <br>
├── style.css → Stili grafici <br>
├── script.js → Logica JS <br>
└── README.md → Documentazione <br>

---

## Stato del Progetto

Il progetto è attualmente:

>    **In sviluppo**

Saranno aggiunte nuove funzionalità come:

- Algoritmi di allocazione (First Fit, Best Fit, Worst Fit)
- Deallocazione processi
- Compattazione memoria
- Statistiche avanzate

---

## Scopo Didattico

Questo progetto è pensato come **strumento educativo** per:

- Studenti di informatica
- Studio dei sistemi operativi
- Comprensione della gestione della memoria

---

## Licenza

Progetto ad uso didattico.
