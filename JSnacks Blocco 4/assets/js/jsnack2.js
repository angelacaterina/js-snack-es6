// JSnack 2
// 1. Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
let biciclette = [
  {
    name: "Benotto",
    weight: 58
  },
  {
    name: "De Rosa",
    weight: 21
  },
  {
    name: "Bianchi",
    weight: 13
  },
  {
    name: "Cinelli",
    weight: 48
  }
];
console.log(biciclette);

// 2. Stampare a schermo la bici con peso minore. 
const lessWeight = () => {
  biciclette.sort(function(a,b){return a.weight - b.weight})
  console.log("La bici con il peso minore è", biciclette[0] ,"e il suo peso è", biciclette[0].weight);
};
lessWeight();
