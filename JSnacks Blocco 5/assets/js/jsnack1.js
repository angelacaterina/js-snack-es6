// JSnack 1
//  Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
class Zucchina {
  constructor(variety, peso, lunghezza) {
    this.variety = variety,
    this.peso = peso,
    this.lunghezza = lunghezza
  }
}

let zucchine = [
  new Zucchina("nero di Milano" , 120 , 20),
  new Zucchina("Zucchino ortolano di Faenza" , 150 , 25),
  new Zucchina("Zucchina genovese" , 170 , 30),
  new Zucchina("striata di Napoli" , 60 , 14),
  new Zucchina("Zucchina bianca triestina" , 50 , 12),
  new Zucchina("rigata pugliese" , 100 , 16),
  new Zucchina("tondo di Piacenza" ,145 , 21),
  new Zucchina("Zucchino romanesco" , 50 , 11),
  new Zucchina("Zucchine patissone" , 55 , 13),
  new Zucchina("Tondo di Nizza" , 60 , 14)
];

let somma = 0;
const sum = () =>{
  zucchine.forEach(function(item){
    somma += item.peso;
  });
  console.log("Il peso complessivo delle 10 zucchine è: ", somma, "g.");
}
sum();
