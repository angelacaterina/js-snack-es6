// JSnack 6
//  Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
const cube = () => {
  let userNumber = Number(prompt("insert number"));
  for(let i = 1; i <= userNumber; i++){
    let numberCube = Math.pow(i,3);
    console.log(numberCube);
  }
}
cube();
