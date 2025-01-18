// Pari e Dispari
//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  Sommiamo i due numeri 
//  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//  Dichiariamo chi ha vinto.

//task1 inizializzazione funzioni(inutile)

//! SE NON ABBIAMO NECESSITà DI UNA VARIABILE CHE CI RITORNA UNA FUNZIONE, 
//! SI EVOCA DIRETTAMENTE LA FUNZIONE AL POSTO DELLA VARIABILE 
//fixed let sum = ""; questa in verità avrebbe piu senso come evocazione della funzione SOMMA => riga 55
//fixed let play = ""; stessa cosa qui, non ha senso dare una variabile vuota qui, metti LET a riga 18 e funziona tutto lo stesso!
//fixed let PlayerNumber = ""; riga 39 LET senza predichiarare una variabile vuota qui inutilmente
//fixed let PcNumber = ""; riga 46 LET senza predichiarare una variabile vuota qui inutilmente


//task2 scelta pari dispari!!!
let play = (prompt("scegli pari o dispari", "Pari").toLowerCase());

//// if (play == "pari") {
////     play = "pari";
////     console.log(`l'utente ha scelto pari`, play);
//// } else if (play == "dispari") {
////     play = "dispari";
////     console.log(`l'utente ha scelto Dispari`, play);
//// } else {
////     alert(`attenzione devi scegliere un numero Pari oppure Dispari`)
//// }
//! l'unico controllo che vorremmo avere su questo IF(peraltro inutile visto come scritto) è quello di applicare eventualmente l'ultimo ELSE!
//! quindi a livello di ragionamento USERò != in combinazione con && per dirgli di applicare SOLO L'ULTIMO ELSE quando IF &&(entrambi) ELSE IF SONO !NOT

if (play != "pari" && play != "dispari") {
    alert(`attenzione devi scegliere un numero Pari oppure Dispari`)
}
//fix possibile soluzione con do while addirittura per il refresh della pagina e far tornare l'utente alla scelta "obbligata" del pari o dispari!

//task3 scelta PlayerNumber!!
let PlayerNumber = parseInt(prompt("scegli un numero da 1 a 5", "3"));
if (PlayerNumber > 5 || PlayerNumber <= 0) {
    alert("ATTENZIONE scegli un numero da 1 a 5");
}
console.log(`il numero scelto dall'utente è ${PlayerNumber}`);

//task4 scelta PcNumber!!
let PcNumber = parseInt(CpuRandom())

function CpuRandom() {
    let random = Math.floor(Math.random() * 5) + 1;
    return random
}
console.log(`il numero scelto dal computer è ${PcNumber}`);

//task5 funzione somma generica!
function somma(a, b) {
    return parseInt(a + b);
}

//task6 funzione ElseOdd (arrow function + ternary operator)
let ElseOdd = () => (somma(PcNumber, PlayerNumber) % 2 === 0) ? ("pari") : ("dispari");

//*stessa funzione in modalità tradizionale!!!
// function ElseOdd() {
//     if (somma(PcNumber, PlayerNumber) % 2 === 0) {
//         return "pari";
//     } else {
//         return "dispari";
//     }
//fix per evitare un doppio console.log nell'IF finale al task7 lo tolgo da qui sopra,
//fix dando semplicemente come return la stringa "pari" o "dispari" (anche se non stampata)
//fix ovviamente senza le virgolette non funzionerebbe nulla in quanto la comparazione 
//fix avviene tra la stringa inserita col prompt in play e questa qui sopra nell'IF finale!
// }

// console.log(ElseOdd()); non necessario perchè gia presente nei log di 85 e 88!

//* nuova funzione in arrow function con applicazione IF ternario! e dichiarazione direttamente QUI(let)
//* completamente inutile perchè riguardando tutto questa funziona mi dava ESATTAMENTE lo stesso risultato di ElseOdd() sopra!!!
// let PariDispari = () => (somma(PcNumber, PlayerNumber) % 2 === 0) ? ("pari") : ("dispari");

//task7 controllo VINCITORE (confronto stringhe!)
let winner = "";
if (play == ElseOdd()) {  //qui ci stava la funzione PariDispari() sostituita con ElseOdd()
    winner = "PLAYER";
    console.log(`risultato ${ElseOdd()} => ${winner} WINS!`);
} else {
    winner = "COMPUTER"
    console.log(`risultato ${ElseOdd()} => ${winner} WINS!!`)
}