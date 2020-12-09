// JSnack 2
//  L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
let wordOne = prompt("insert a word");
let wordTwo = prompt("insert another word");
// console.log(wordOne, wordTwo);

const word = (a,b) => {
  if(a.length < b.length){
    console.log(a,b);
  }else if(a === b) {
    console.log(`equal word ${a} ${b}`);
  }else{
    console.log(b,a);
  }
}
console.log(word(wordOne, wordTwo));
