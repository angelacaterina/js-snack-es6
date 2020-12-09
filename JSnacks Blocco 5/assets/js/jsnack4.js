// JSnack 4
//  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
//  es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const letters  = ["a","b","c"];
const numbers = [1,2,3];

console.log(letters, numbers);

let mixed = [];

const newArray = (a, b) => {
  if(a.length === b.length){
    for(var i = 0; i < a.length; i++){
      mixed.push(a[i],b[i]);
    }
  }
  return mixed
}
console.log(newArray(letters, numbers));
