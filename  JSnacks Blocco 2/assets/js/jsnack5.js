// JSnack 5
//  Scrivi una funzione per stabilire se un numero è primo. Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.
let number = Number(prompt("insert a number"));

const primo = numero => {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero >= 2;
}
console.log(primo(number));

if(primo(number)){
  alert(`Il numero ${number} è un numero primo`);
}else{
  alert(`Il numero ${number} non è un numero primo`);
}
