// JSnack 3
// 1. Crea 10 oggetti che rappresentano una zucchina.
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
// console.log(zucchine);

// 2. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let zucchinePiccole = [ ];
let zucchineMedie = [ ];

const division = () =>{
  zucchine.forEach(function(item){
    if(item.lunghezza < 15){
      zucchinePiccole.push({
        variety: item.variety ,
        peso: item.peso,
        lunghezza: item.lunghezza
        }
      );
    }else{
      zucchineMedie.push({
        variety: item.variety ,
        peso: item.peso,
        lunghezza: item.lunghezza
        }
      );
    };
  });
}
division();
console.log("Zucchine con una lunghezza inferiore a 15 cm", zucchinePiccole);
console.log("Zucchine con una lunghezza superiore a 15 cm",zucchineMedie);

// 3. Infine stampa separatamente quanto pesano i due gruppi di zucchine
//forEach
let sommaSmall = 0;
const piccole = () =>{
  zucchinePiccole.forEach(function(item){
    sommaSmall += item.peso;
  });
  console.log("Il peso complessivo delle zucchine con una lunghezza inferiore a 15 cm è: ", sommaSmall, "g.");
}
piccole();

let sommaMedium = 0;
const medie = () => {
  zucchineMedie.forEach(function(item){
    sommaMedium += item.peso;
  });
  console.log("Il peso complessivo delle zucchine con una lunghezza superiore a 15 cm è: ", sommaMedium, "g.");
}
medie();
