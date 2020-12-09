// JSnack 4
//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const guestList = ["Jay", "Nick", "Daisy", "Tom", "Myrtle", "Jordan", "Meyer", "George"];
let userName = prompt("What's your name?");
userName = userName.slice(0,1).toUpperCase() + userName.slice(1,userName.length).toLowerCase();

// console.log(userName);
const nameFound = () => {
  let nameFound = false;

  for(let i = 0; i < guestList.length; i++ ){
    var name = guestList[i];

    if (name === userName) {  // verifica se nome utente é presente
      nameFound = true;
   }
  }

  if (nameFound) {
    console.log(`${userName} you can join the party!`);
  } else {
    console.log(`Sorry, you can't join the party`);
  }
}
console.log(nameFound());
