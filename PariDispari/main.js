// Pari e Dispari
//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  Sommiamo i due numeri 
//  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//  Dichiariamo chi ha vinto.

//* inizializzazione funzioni
let sum = "";
let play = "";
let PlayerNumber = "";
let PcNumber = "";


//* scelta pari dispari!!!
play = (prompt("scegli pari o dispari", "Pari").toLowerCase());

if (play == "pari") {
    play = "pari";
    console.log(`l'utente ha scelto pari`, play);
} else if (play == "dispari") {
    play = "dispari";
    console.log(`l'utente ha scelto Dispari`, play);
} else {
    alert(`attenzione devi scegliere un numero Pari oppure Dispari`)
}

//* scelta PlayerNumber!!
PlayerNumber = parseInt(prompt("scegli un numero da 1 a 5", "3"));
if (PlayerNumber > 5 || PlayerNumber <= 0) {
    alert("ATTENZIONE scegli un numero da 1 a 5");
}
console.log(`il numero scelto dall'utente è ${PlayerNumber}`);

//* scelta numero random computer
PcNumber = parseInt(CpuRandom())

function CpuRandom() {
    let random = Math.floor(Math.random() * 5) + 1;
    return random
}
console.log(`il numero scelto dal computer è ${PcNumber}`);

// funzione somma
function result() {
    return sum = parseInt(PcNumber + PlayerNumber);
}

// funzione ElseOdd PariDispari
function ElseOdd() {
    if (result() % 2 === 0) {
        return console.log(`la somma è`, result(), `quindi Pari!`);
    } else {
        return console.log(`la somma è`, result(), `quindi Dispari!`);
    }

}
//! console.log(ElseOdd()); 
// //? undefined =>perchè elseOdd() nella sua invocazione ha gia DENTRO il console.log(), quindi basta l'invocazione semplicemente!!
ElseOdd(); //*solo invocazione!
let PariDispari = () => (result() % 2 == 0) ? ("pari") : ("dispari");
//* nuova funzione in arrow function con applicazione IF ternario!

//! controllo VINCITORE (confronto stringhe!)
let winner = "";
if (play == PariDispari()) {
    winner = "PLAYER";
    console.log(`${winner} VINCE!`);
} else {
    winner = "COMPUTER"
    console.log(`${winner} VINCE!!`)
}









// if (evenOdd == Pari) {
//     evenOdd = true;
//     console.log(evenOdd);
// } else {
//     evenOdd = false;
//     console.log(evenOdd);
// }