console.group("You can use a for in loop but I don't recommend it. We will learn why later: ");
const dog1 = {
  name: "Dixie",
  age: 4,
  tricks: ["sit"],
  breed: "chiweenie",
};

for(let property in dog1) {
  console.log(`${property}: ${dog1[property]}`);
}
console.groupEnd();

console.group("Another method, using Object.keys and a for loop: ");
const dog2 = {
  name: "Dozer",
  age: 4,
  tricks: ["sit", "lie down", "shake", "roll over", "beg"],
  breed: "chiweenie",
};

const dog2Properties = Object.keys(dog2);
if(Array.isArray(dog2Properties)) {
  console.log("Dog2Properties is an array");
} else {
  console.log("Dog2Properties is NOT an array");
}

for(let i = 0; i < dog2Properties.length; i++) {
  const property = dog2Properties[i];
  console.log(`${property}: ${dog2[property]}`);
}
console.groupEnd();


console.group("Since Object.keys returns an array, we can actually use forEach: ");
dog2Properties.forEach((property) => {
  console.log(`${property}: ${dog2[property]}`);
});
console.groupEnd();

console.group("Putting it all together - this is how I do it: ");
const dog3 = {
  name: "Joey",
  age: 15,
  tricks: ["sit", "lie down", "shake"],
  breed: "bichon frise",
};

Object.keys(dog3).forEach((property) => {
  console.log(`${property}: ${dog3[property]}`);
});
console.groupEnd();

console.group("If you want to be fancy you can do a one liner: ");
Object.keys(dog3).forEach((property) => console.log(`${property}: ${dog3[property]}`));
console.groupEnd();

console.group("What if I only want to log out the string properties: ");
// which properties should we log out?
// which properties should we NOT log out?
Object.keys(dog3).forEach((property) => {
  if(typeof dog3[property] === "string") {
    console.log(`${property}: ${dog3[property]}`);
  }
});
console.groupEnd();

