// JSnack 4A
//  Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
let squadre = [
  {
    name: "Bayern Monaco",
    pointsMade: 0,
    foulsSuffered : 0
  },
  {
    name: "Milan",
    pointsMade: 0,
    foulsSuffered : 0
  },
  {
    name: "Udinese",
    pointsMade: 0,
    foulsSuffered : 0
  },
  {
    name: "Juventus",
    pointsMade: 0,
    foulsSuffered : 0
  }
];
// console.log(squadre);

// JSnack 4B
//  Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
const pointsAndFouls = () => {
  squadre.forEach(function(item){
    item.pointsMade = Math.floor(Math.random()* 10);
    item.foulsSuffered = Math.floor(Math.random()* 10);
  });
  console.log(`I punti fatti e falli subiti sono stati compitati in modo random`, squadre);
}
pointsAndFouls();
