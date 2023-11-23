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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
  {
    manufacturer: "Ford",
    model: "Fiesta",
    type: "diesel",
  },
  {
    manufacturer: "Audi",
    model: "A1",
    type: "benzina",
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf",
    type: "Benzina",
  },
  {
    manufacturer: "Fiat",
    model: "Panda",
    type: "metano",
  },
  {
    manufacturer: "Fiat",
    model: "Multipla",
    type: "GPL",
  },
  {
    manufacturer: "Tesla",
    model: "Model 3",
    type: "elettrico",
  },
  {
    manufacturer: "Volkswagen",
    model: "Polo",
    type: "benzina",
  },
  {
    manufacturer: "Ford",
    model: "Kuga",
    type: "Diesel",
  },
  {
    manufacturer: "Seat",
    model: "Ibiza",
    type: "metano",
  }
  {
    manufacturer: "Audi",
    model: "R8",
    type: "Benzina",
  },
];

const gasolineCars = cars.filter(auto >= auto.type === "benzina");

const dieselCars = cars.filter((auto) => {
  auto.type === "diesel";
});

const otherCars = cars.filter((auto) => {
  return auto.type !== "benzina" || auto.type !== "diesel";
});

console.log("Auto a benzina");
console.log("*******************************");
console.log(gasolineCars);

console.log("Auto a diesel");
console.log("*******************************");
console.log(dieselCars);

console.log("Tutte le altre auto");
console.log(otherCars);

/*
1- Il programma dovrebbe stampare le auto a benzina,diesel e le restanti
2- Manca una virgola per separare il penultimo e l'ultimo oggetto dell'array
    -nel creare l'array gasolineCars nel filter anziché >= andrebbe =>
    -nel creare l'array gasolineCars mancano le parentesi intorno all'argomento auto
3- nel creare l'array gasolineCars non va bene confrontare il tipo dell'auto con la parola benzina se negli oggetti
alcune auto hanno come tipo 'benzina' e altre 'Benzina'.
  -stesso errore nel creare l'array dieselCars
  -stesso errore nel creare l'array otherCars
  -nel creare l'array otherCars se si vogliono tutte le macchine tranne quelle a diesel e benzina va sostituito && al posto di ||
  -conviene convertire prima entrambi i valori da confrontare in lowercase per confrontare auto.type
  */
