console.group("PART 1 - Objects inside an array");
const cats = [
  {
    name: "Smoky",
    age: 17
  },
  {
    name: "Milano",
    age: 7
  },
  {
    name: "Misa",
    age: 2
  }
];

const thirdCat = cats[2];

// What will be logged to the console?
if (thirdCat === cats[2]) {
  console.log("thirdcat and cats[2] are the same thing.");
} else {
  console.log("thirdcat and cats[2] are not the same thing.");
}

// What will be logged to the console?
const thirdCatsName = thirdCat.name;
if (thirdCatsName === thirdCat.name) {
  console.log("thirdCatsName and thirdCat.name are the same thing.");
} else {
  console.log("thirdCatsName and thirdCat.name are not the same thing.");
}

// What will be logged to the console?
if (thirdCatsName === cats[2].name) {
  console.log(
    "thirdCatsName, thirdCat.name, and cats[2].name are all the same thing."
  );
} else {
  console.log(
    "thirdCatsName, thirdCat.name, and cats[2].name are all the same thing."
  );
}

console.groupEnd(); // End PART 1





console.group("PART 2 - String length");
// How to get the length of a string:
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

function getStringLength(str) {
  return str.length;
}

console.log("What is the length of the word 'blue'? - ", getStringLength("blue"));

const cat = {
  name: "Milano",
  age: 7
};
console.log("How long is Milano's name? - ", getStringLength(cat.name));
console.log("How long is the third cat's name? - ", getStringLength(thirdCatsName));

if (thirdCatsName.length === cats[2].name.length) {
  console.log("thirdCatsName, thirdCat.name, and cats[2].name all have the same length.");
} else {
  console.log("thirdCatsName, thirdCat.name, and cats[2].name do not all have the same length.");
}

console.log("Is the first cat's name longer than the third cat's name: ", getStringLength(cats[0].name) > getStringLength(thirdCatsName));

console.groupEnd(); // End PART 2





console.group("PART 3 - Looping through an array of objects");


console.group("PART 3.1 - Lets log out the cats");

for (let i = 0; i < cats.length; i++) {
  const currentCat = cats[i];
  console.log("Current cat is ", currentCat);
}

console.groupEnd(); // End PART 3.1



console.group("PART 3.2 - Now lets log out the names");

console.log("Here is a way that's easier to understand: ");
for (let i = 0; i < cats.length; i++) {
  const currentCat = cats[i]; // get the cat at the current index we are on
  const currentCatsName = currentCat.name; // we access the name with the dot
  console.log("Current cat is ", currentCatsName); // and then we log it out
}

console.log("We actually don't need the currentCatsName variable!");
for (let i = 0; i < cats.length; i++) {
  const currentCat = cats[i];
  console.log("Current cat is ", currentCat.name); // we can replace currentCatsName with currentCat.name
}

console.log("We actually don't need the currentCat variable either!");
for (let i = 0; i < cats.length; i++) {
  console.log("Current cat is ", cats[i].name); // and then we can replace currentCat with cats[i]
}


console.groupEnd(); // End PART 3.2

console.groupEnd(); // End PART 3
