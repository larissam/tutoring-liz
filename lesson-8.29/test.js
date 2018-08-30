// Concepts tested: objects (getting & setting properties), return, if/else, console.log
//
const cat = {
  name: "Milano",
  weight: 8
};

function isFat(cat) {
  if(cat.weight > 10) {
    return true;
  }

  return false;
}

console.log("Is cat fat: ", isFat(cat)); // what does this log?

let timesUpdateWeightWasCalled = 0;
console.log("Times update weight was called: ", timesUpdateWeightWasCalled); // what does this log?

function updateWeight(cat, newWeight) {
  timesUpdateWeightWasCalled += 1;

  cat.weight = newWeight;
}
console.log("Times update weight was called: ", timesUpdateWeightWasCalled); // what does this log now?

updateWeight(cat, 20);
console.log("Times update weight was called: ", timesUpdateWeightWasCalled); // what does this log now?
console.log("Is cat fat: ", isFat(cat)); // what does this log?


console.log("Updating weight: ", updateWeight(cat, 7));
console.log("Times update weight was called: ", timesUpdateWeightWasCalled); // what does this log now?
console.log("Is cat fat: ", isFat(cat)); // what does this log?



function isFat2(cat) {
  if(cat.weight > 10) {
    console.log("Put that cat on a diet!");
  } else { // why do we need an else here? What happens if we get rid of it (like how we do in isFat)?
    console.log("Cat can eat all the tuna it wants.");
  }
}

console.log("Is cat fat 2: ", isFat2(cat)); // what does this log?

console.log("Updating weight: ", updateWeight(cat, 17));
console.log("Times update weight was called: ", timesUpdateWeightWasCalled); // what does this log now?

console.log("Is cat fat 2: ", isFat2(cat)); // what does this log?
