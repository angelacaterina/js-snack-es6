// JSnack 5
// 1. Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
const fruits = ["mela","banana","arancia","mango","pera","melone"];
console.log(fruits); //Array
console.log("Il numero di elementi dell’array sono",fruits.length); // array è lunga 6

let num1, num2;

const positionBetween = (array, a, b) =>{
  if(a < b && b <= array.length){
    console.log("Condition verified");
    result = array.slice(a,b);
  }else{
    console.log("Condition not verified, ho come risultato un'array VUOTA");
    if(b > array.length){
      console.log("Il secondo valore è maggiore del numero di elementi dell’array");
    }else if (a > b){
      console.log("Il secondo valore è minore del primo valore");
    }else if(a = b){
      console.log("I miei valori sono uguali");
    }
  }
};

// 2. La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
let result = [];

num1 = Math.floor(Math.random() * fruits.length);
num2 = Math.floor(Math.random() * 10) + 1;

console.log("Il primo valore è", num1 ,"mentre il secondo valore è", num2);

positionBetween(fruits, num1, num2);
console.log("Nuova array con i valori che hanno la posizione compresa tra", num1, "e", num2, "è", result);
