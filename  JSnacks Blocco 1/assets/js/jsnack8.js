// JSnack 8
//  Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
let numberUser = prompt("insert a 4 digits number");
numberUser = numberUser.slice(0,4);
// console.log(numberUser);

const number = () => {
  let sum = 0;
  for(let i = 0; i < numberUser.length; i++){
    sum += Number(numberUser[i]);
  }
  console.log(`la somma di tutte le cifre che compongono il numero è ${sum}`);
}
number();
