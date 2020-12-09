// JSnack 3
//  Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const numberInt = [1,4,5,6,7,8,9,2,3];
let sum = 0;

const sumOdd = () =>{
  for(let i = 0; i < numberInt.length; i++){
    if(i % 2 != 0){
      sum += numberInt[i];
    }
  }
  console.log(sum);
}
sumOdd();
