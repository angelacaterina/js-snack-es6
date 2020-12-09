// JSnack 3
// 1. Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
let triangoloRettangolo = {
  base : 9,
  altezza : 12
}
console.log(triangoloRettangolo);

// 2. Calcolare perimetro e area. (ripassiamo il Teorema di Pitagora ;D )
const perimeterAndArea = () =>{
  let base = triangoloRettangolo.base;
  let altezza = triangoloRettangolo.altezza;
  const i = Math.sqrt(Math.pow(base,2) + Math.pow(altezza,2));

  const perimetro = base + altezza + i;
  const area = (base * altezza) / 2;

  console.log(`Ipotenusa: ${i}`);
  console.log(`Perimetro: ${perimetro}`);
  console.log(`Area: ${area}`);
}
perimeterAndArea();
