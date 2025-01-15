//* Palidroma
//*  Chiedere all’utente di inserire una parola 
//*  Creare una funzione per capire se la parola inserita è palindroma


//* 1.1 concatenazione di metodi (methods.concat)
let parola = prompt("Scrivi qui una parola (non preoccuparti delle maiuscole) ", "iTopiNonAvevanoNipoti");
// ? let parolaInversa = revString(parola); 
// non serve in realtà, anzi basta invocare la funzione al suo posto per accorgersene effettivamente

function revString(parola) {
    return parola.split("").reverse().join("").trim(); //.toLowerCase();
    //? ragionamento concatenazione=> 
    //? creoArray.split("vuoto")-invertoOrdine.reverse()-tornoStringa.join("vuoto")-taglioEsterni.trim()-riduco.toLowerCase()
}
console.log(revString(parola));
console.log(parola)

if (ToLow(parola) === ToLow(revString(parola))) {
    console.log(`la parola ${parola} è un palindromo`)
} else {
    console.log(`la parola ${parola} NON è un palindromo`)
}

//* 1.2 metodo con ciclo FOR
let parola1 = prompt("scrivimi qui una parola e ti dirò se è palindroma(non preoccuparti delle maiuscole)", "SaippuaKivikauppias")
let parolaInversa1 = "";

function revString1() {
    for (let i = parola1.length - 1; i >= 0; i--) {
        parolaInversa1 += parola1.charAt(i);
    }
    return parolaInversa1;
}
console.log(ToLow(revString1()));
//? qui devo invocare revstring1() per forza, perchè se richiamo parolaInversa1 avrò ""...PERCHè?!!!
console.log(ToLow(parola1))

function ToLow() {
    return parola.toLowerCase();
}

//? ToLow(parolaInversa1) qui funziona, nel console.log di riga 35 ho dovuto invocare (revString1()) PERCHè?!
if (ToLow(parola1) === ToLow(parolaInversa1)) {
    console.log(`la parola ${parola1} è un palindromo`)
} else {
    console.log(`la parola ${parola1} NON è un palindromo`)
}

//? righe 36 e 43 nonostante apparentemente siano opposti, mi danno l'esatto risultato atteso! COME MAI?



