// JSnack 1
//  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
let numberOne = Number(prompt("insert a number"));
let numberTwo = Number(prompt("insert another number"));
// console.log(numberOne, numberTwo);

const higherNumber = (a,b) => {
  if(a > b){
    console.log(a);
  }else if(a === b) {
    console.log(`equal numbers ${a} ${b}`);
  }else{
    console.log(b);
  }
}
console.log(higherNumber(numberOne,numberTwo));
