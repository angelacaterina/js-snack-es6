// JSnack 1
//  Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
let number = Number(prompt("insert a number"));

const isEven = () => {
  if(number % 2 == 0){
    return `hai inserito un numero pari ${number}`;
  }else{
    return `hai inserito un numero dispari il numero successiovo è ${number + 1}`;
  }
}
console.log(isEven());
