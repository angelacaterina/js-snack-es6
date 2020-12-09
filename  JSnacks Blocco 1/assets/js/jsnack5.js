// JSnack 5
//  Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
const numberOdd = () => {
  let odd = [];

  for (let i = 0; i < 6 ; i++){
    let number = Number(prompt("inserta number"));
    if(number % 2 === 1){
      odd.push(number);
    }
  }
  console.log(odd);
}
numberOdd();
