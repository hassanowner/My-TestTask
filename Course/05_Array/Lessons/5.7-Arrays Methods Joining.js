/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);

console.log(allFriends);
/*
[
  "Ahmed",
  "Sayed",
  "Ali",
  "Osama",
  "Gamal",
  "Ameer",
  "Samar",
  "Sameh",
  "Haytham",
  "Shady",
  "Gameel",
  1,
  2
]
*/

console.log(allFriends.join());
// Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1,2

console.log(allFriends.join(""));
// AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel12

console.log(allFriends.join(" @ "));
// Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ 1 @ 2

console.log(allFriends.join("|"));
// Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1|2

console.log(allFriends.join("|").toUpperCase());
// AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEEL|1|2
