/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

function findLongNameThatStartsWithA(arr) {
  return arr.find((x) => x.startsWith("A") && x.length > 7);
}

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
