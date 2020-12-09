// JSnack 1
//  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
let numberOne = Number(prompt("insert a number"));
let numberTwo = Number(prompt("insert another number"));
// console.log(numberOne, numberTwo);
//modo 1 : con return
const higherNumber = (a,b) => {
  if(a > b){
    return `Greater number is ${a}`
  }else if(a === b) {
    return `${a} equals number ${b}`;
  }else{
    return `Greater number is ${b}`;
  }
}
console.log(higherNumber(numberOne,numberTwo));

// modo 2 : senza return
// const higherNumber = (a,b) => {
//   if(a > b){
//     console.log()`Greater number is ${a})`
//   }else if(a === b) {
//     console.log(`${a} equals number ${b}`);
//   }else{
//     console.log(`Greater number is ${b}`);
//   }
// }
// higherNumber(numberOne,numberTwo);
