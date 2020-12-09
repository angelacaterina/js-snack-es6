// JSnack 4
//  Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
let listNumberOne = [6,5,4,3,2,1];                //arrayOne.length < arrayTwo.length
// let listNumberOne = [10,9,8,7,6,5,4,3,2,1];       //arrayOne.length > arrayTwo.length
// let listNumberOne = [1,2,3,4,5,6,7,8];            //arrayOne.length === arrayTwo.length
let listNumberTwo = [1,2,3,4,5,6,7,8];
console.log(listNumberOne, listNumberTwo);

const equalElements = () => {
  while(listNumberOne.length < listNumberTwo.length || listNumberOne.length > listNumberTwo.length){

    if(listNumberOne.length < listNumberTwo.length){
      let number = Math.floor(Math.random() * 10);
      listNumberOne.push(number);
    }else{
      let number = Math.floor(Math.random() * 10);
      listNumberTwo.push(number);
    }
  }
  console.log(listNumberOne, listNumberTwo);
}
equalElements();
