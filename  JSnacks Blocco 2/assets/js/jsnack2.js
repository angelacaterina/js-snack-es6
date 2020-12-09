// JSnack 2
//  Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
const name = ["Jay", "Nick", "Daisy", "Tom", "Myrtle", "Jordan", "Meyer", "George"];
const lastName = ["Gatsby", "Carraway", "Buchanan", "Wilson","Baker", "Wolfsheim"];

const fakeGuestList = [];

const guestList = () =>{
  for (let i = 0; i < name.length; i++){
    let fakeName = name[Math.floor(Math.random() * name.length)];
    let fakeLastName = lastName[Math.floor(Math.random() * lastName.length)];
    fakeGuestList.push(`${fakeName} ${fakeLastName}`);
  }
  console.log(fakeGuestList);
}
guestList();
