// JSnack 2
//  L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
let wordOne = prompt("insert a word");
let wordTwo = prompt("insert another word");
// console.log(wordOne, wordTwo);

const word = (a,b) => {
  if(a.length < b.length){
    return `La parola più corta è ${a} mentre la parola più lunga è ${b}`;
  }else if(a === b) {
    return `${a} equal word ${b}`;
  }else{
  return `La parola più corta è ${b} mentre la parola più lunga è ${a}`;
  }
}
console.log(word(wordOne, wordTwo));
