// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

//FOR
let sum = 0;

const sumNumbers = () =>{
  for(let i = 0; i < 5; i++){
    let numberUser = Number(prompt("insert a number"));
    sum += numberUser;
  }
  console.log(`La somma è ${sum}`);
}
sumNumbers();

// WHILE
// let sum = 0;
//
// const sumNumbers = () =>{
//   let i = 0;
//   while (i < 5){
//     let numberUser = Number(prompt("insert a number"));
//     sum += numberUser;
//     i++
//   }
//   console.log(`La somma è ${sum}`);
// }
// sumNumbers();
