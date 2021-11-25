// Carissimi ragazzi,
// eccoci all'ultimo esercizio di JavaScript

// Esercizio di oggi: Simon Says nome repo: js-simon
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
// indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// Buon divertimento :party_blob:
// Ancora un grande abbraccio :faccia_sorridente_con_3_cuori:


// SECONDO TENTATIVO

// - Hello -

// let name = prompt ('Inserisci il tuo Nome');

// alert (`Ciao ${name} ! Pront* per Simon Says? 
// Osserva attentamente i numeri. ` );

// --- Array 5 numeri random ---
const numRandom = [];

for (let i = 0; i <5; i ++) {
    let num = Math.floor(Math.random() * 100);
    numRandom.push(num);
    console.log(numRandom);
}

const numRandomElm = document.getElementById("numeri");
numRandomElm.innerHTML = `Numeri Random:`+ '  ' +  numRandom;


// --- Timer ---
const timer = 3;

setTimeout(function() {
    numRandomElm.innerHTML = '';
}, (timer - 1) * 1000);

setTimeout (function() {
    const numUser = [];

    for(let i = 0; i < 5; i++) {
        const n = parseInt(prompt("Inserisci ,uno alla volta, i numeri che hai visto precedentemente"));
        numUser.push(n);
    }

// --- Confronto Array ---
const numOk = [];
for(let i = 0; i < numUser.length; i++) {

    if(numRandom.includes(numUser[i]) == true) {
        numOk.push(numUser[i]);
    }
}
if(numOk.length == 0) {
    const ris = document.getElementById("risultato");
ris.innerHTML = "Hai Perso! :(";
    // alert("Hai Perso! :( ");
} else {
    const ris = document.getElementById("risultato");
    ris.innerHTML = `Bravo! Hai indovinato ${numOk.length} numeri!`;
    // alert(`Bravo! Hai indovinato ${numOk.length}`);
}

}, timer * 1000);