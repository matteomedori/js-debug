/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
  console.log(i);
}
/*
1- Il codice non stampa nulla perché già alla prima iterazione del ciclo i non è > 5 
2- Non ci sono errori di sintassi
3- L'errore è nella condizione del ciclo, basta mettere < al posto di > per farlo funzionare
*/

// ESERCIZIO 2
function addIfEven(num) {
  if (num % 2 = 0) {
    return num + 5;
  }
  return num;
}
/*
1- La funzione dovrebbe prendere come argomento un numero e se il numero è pari lo restituisce con l'aggiunta di 5
altrimenti ritorna il numero stesso
2- C'è un errore nella condizione dell'if perché con un solo = non sto confrontando i valori ma sto facendo un assegnamento
3- Non ci sono errori logici
*/

// ESERCIZIO 3
function loopToFive() {
  for (let i = 0, i < 5, i++) {
    console.log(i);
  }
}
/*
1- La funzione dovrebbe stampare numeri interi da 0 a 4
2- Gli errori sono nel mettere la virgola anziché il ; per separare le espressioni del for
3- Non ci sono errori logici
*/

// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
/*
1- La funzione dovrebbe creare un array che contiene solo i numeri pari dell'array dato
2- l'array numbers va definito const perché non ho bisogno di riassegnarlo,
    c'è il ; dopo i++,
    l'= non serve per fare un confronto ma per assegnare,
    il ; dopo le parentesi della condizione dell'if
3- per scorrere l'intero array non c'è bisogno del -1 su numbers.length,
    se voglio aggiungere il numero pari all'array devo fare il push dell'elemento non dell'indice,
    non ha senso ritornare l'array evenNumbers dopo la fine di ogni iterazione, il return andrebbe fuori dal ciclo for

*/