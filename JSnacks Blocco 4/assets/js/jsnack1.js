// JSnack 1A
//  Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
let palla = {
  name : "palla",
  weight : 10
}
console.log("L'oggetto palla è ", palla);

// JSnack 1B
//  Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
const weight = () =>{
  palla.weight = Number(prompt("inserisci il nuovo peso della palla"));
  console.log("Il nuovo peso dell'oggetto palla è ",palla.weight, palla);
}
weight();
