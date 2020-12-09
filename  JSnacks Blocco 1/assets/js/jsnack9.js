// JSnack 9
//  Calcola la somma e la media dei primi 10 numeri.
let sum = 0;
let average = 0;
let length = 10;

const calcMath = () => {
  for(let i = 1; i <= length; i++){
    sum += i;
    average = sum / length;
  }
  console.log(`La somma dei primi 10 numeri è ${sum}`);
  console.log(`La media dei primi 10 numeri è ${average}`);
}
calcMath();
