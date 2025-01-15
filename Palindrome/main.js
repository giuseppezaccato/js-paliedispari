//* Palidroma
//*  Chiedere all’utente di inserire una parola 
//*  Creare una funzione per capire se la parola inserita è palindroma


//* 1.1 concatenazione di metodi (methods.concat)
let parola = prompt("Scrivi qui una parola (non preoccuparti delle maiuscole)", "iTopiNonAvevanoNipoti");
// let Pali = "";

function revString() {
    parola.split("").reverse().join("").trim().toLowerCase();
    //? ragionamento concatenazione=> 
    //? creoArray.split("vuoto")-invertoOrdine.reverse()-tornoStringa.join("vuoto")-taglioEsterni.trim()-riduco.toLowerCase()

    //! [.trim() e .toLowerCase()]=> FUNZIONANO SOLO E SOLO SE DOPO AVER PROCESSATO LA CONCATENAZIONE DI METODI
    //! GLI DO "RETURN PAROLA" 
    //! quindi return deve essere la conseguenza FINALE della funzione SEMPRE
    return parola;
}

if (revString(parola) == parola) {
    console.log(`la parola ${parola} è un palindromo`)
} else {
    console.log(`la parola ${parola} NON è un palindromo`)
}

//* 1.2 metodo con ciclo FOR
let parola1 = prompt("scrivimi qui una parola e ti dirò se è palindroma(non preoccuparti delle maiuscole)", "osso")
let Pali1 = "";

function revString1() {
    for (let i = parola1.length - 1; i >= 0; i--) {
        Pali1 += parola1.charAt(i);
    }
    return Pali1
}

if (revString1(parola1) == Pali1) {
    console.log(`la parola ${parola1} è un palindromo`)
} else {
    console.log(`la parola ${parola1} NON è un palindromo`)
}



