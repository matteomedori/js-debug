/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
function checkAge() {
  const myAge = 32;
  let message = "";

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = "Hai più di 18 anni!";
  }
}
checkAge();
// /*
// 1- La funzione non stampa nulla
// 2- L'errore è creare message come const per poi cambiarli valore
// 3- Anche cambiando const message con let la funzione ha poco senso perché entra sempre nella condizione else
// e inoltre non ritorna né stampa nulla
// */

// ESERCIZIO 2
function printColorsNumber() {
  const colors = ["blue", "red", "yellow", "green", "black"];
  console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
/*
1- La funzione dovrebbe stampare quanti colori ci sono nell'array colors
2- L'unico errore è length anziché lenght
3- Non ci sono errori logici ma la funzione ha sempre lo stesso comportamento
*/

// ESERCIZIO 3
function addNumbers() {
  const userNumber = prompt("Inserisci un numero");
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
/*
1- La funzione dovrebbe prendere un numero dall'utente e stamparlo in console con l'aggiunta di 12
2- Non ci sono errori sintattici
3- E' sbagliato prendere l'input dell'utente senza convertirlo perché così userNumber è una stringa
dunque anche total diventa una stringa concatenata
*/

// ESERCIZIO 4
function checkAccess() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];
  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = "false";

  if (addresses.includes(userEmail)) {
    grantAccess = "true";
  }

  if (grantAccess === true) {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccess();
/*
1- La funzione dovrebbe prendere una mail dall'utente e stampare in console se l'accesso è garantito o meno
2- Non ci sono errori sintattici
3- Non ci sono controlli sulla mail inserita dall'utente,
    la variabile grantAccess andrebbe definita senza le "" perché è booleana,
    così facendo si entra sempre nell'else perché confronto una stringa con un bool
*/

// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];

  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = "false";

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = "true";
      }
    }

    if (grantAccess) {
      console.log("Accesso consentito!");
    } else {
      console.log("Accesso negato!");
    }
  }
}
checkAccessImproved();
/*
1- La funzione dovrebbe prendere una mail dall'utente e stampare in console se l'accesso è garantito o meno
2- Mancava la } di chuisura della funzione (?)
3- Non ci sono controlli sulla mail inserita dall'utente,
    la variabile grantAccess andrebbe definita senza le "" perché è booleana,
    così facendo si entra sempre nell'else perché confronto una stringa con un bool
*/
