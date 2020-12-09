// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

//FOR
const sum = () =>{
  let sum = 0;

  for(let i = 0; i < 5; i++){
    let numberUser = Number(prompt("insert a number"));
    sum += numberUser;
  }
  console.log(`La somma è ${sum}`);
}
console.log(sum());

// WHILE
// const sum = () =>{
//   let sum = 0;
//   let i = 0;
//   while (i < 5){
//     let numberUser = Number(prompt("insert a number"));
//     sum += numberUser;
//     i++
//   }
//   console.log(`La somma è ${sum}`);
// }
// console.log(sum());
