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


// - Hello -

let name = prompt ('Inserisci il tuo Nome');

alert (`Ciao ${name} ! Pront* per Simon Says? 
Osserva attentamente i numeri. ` );


// ---- Genero 5 Numeri Random -> Gli inserisco in un Array vuoto ---

let arrayRandom = [];

for (let i = 0; i < 5; i++) {
    let numRandom = Math.floor(Math.random() * 100);
    // console.log(numRandom);

    arrayRandom.push(numRandom);

    console.log(arrayRandom);
}

// --- Stampo l'Array nel Dom ---
document.getElementById("numeri").innerHTML = arrayRandom;


// --- Timer 10 sec ---

const clock = setInterval(myTimer, 1000);

let second = 0;

function myTimer() {

    const timer = document.getElementById('timer');
    timer.innerHTML = second;

    if (second == 10) {
        document.getElementById("numeri").innerHTML = '';
        clearInterval(clock);
        alert('Tempo scaduto');

        // --- PROMPT * 5 ---
        let arrayUser = [];


        for (let i = 0; i < 5; i++) {
            let userN = parseInt(prompt('Inserisci ,uno alla volta, i numeri che hai visto precedentemente'));

            arrayUser.push(userN);

            console.log(arrayUser);
            document.getElementById("userNumber").innerHTML = arrayUser;
        }

        // --- Confrontare Numeri Array ---

        const numOk = [];
        for(let i = 0; i < arrayUser.length; i++) {
            if(arrayRandom.includes(arrayUser[i]) == true) {
                numOk.push(arrayUser[i]);
            }
    }
    if (numOk.length == 0) {
        alert("Hai Perso :(");
    } else {
        alert (`Hai indovinato ${numeriValidi.length}`);
    }
    second++;
}
}

// Non finito per mancanza di tempo