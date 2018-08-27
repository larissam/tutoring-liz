// isEven and isOdd
//


// We know a number is even if it can be divided by 2.
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.group("Testing isEven");
// console.log("isEven - testing when num is 2: ", isEven(2));
// console.log("isEven - testing when num is 3: ", isEven(3));
// console.log("isEven - testing when num is 11: ", isEven(11));
// console.groupEnd();

// This is your Hack Reactor code - it passes the tests, but what does it return if we pass in 11?
// HINT: What happens if a number is not divisible by 2... but also not divisible by 3?
// HINT 2: 5 is an odd number, but it's not divisible by 3; nor is 11.
function isEvenHackReactor(num) {
  if (num % 2 === 0){
    return true;
  } else if (num % 3 === 0) {
    return false;
  }
}

// console.group("Testing isEvenHackReactor");
// console.log("isEvenHackReactor - testing when num is 2: ", isEvenHackReactor(2));
// console.log("isEvenHackReactor - testing when num is 3: ", isEvenHackReactor(3));
// console.log("isEvenHackReactor - testing when num is 11: ", isEvenHackReactor(11));
// console.groupEnd();


// We know a number is odd if it can NOT be divided by 2.
// What symbol do we use to negate a condition (review JSD lesson 3 - conditionals)?
function isOdd(number) {
  if (number % 2 !== 0) { // Notice the "!" point here...
    return true;
  } else {
    return false;
  }
}

// console.group("Testing isOdd");
// console.log("isOdd - testing when num is 2: ", isOdd(2));
// console.log("isOdd - testing when num is 3: ", isOdd(3));
// console.log("isOdd - testing when num is 11: ", isOdd(11));
// console.groupEnd();

// Another (more elegant) way to write it would be:
function isOddElegant(number) {
  return !isEven(number); // because if a number isn't even, it has to be odd.
}

// console.group("Testing isOddElegant");
// console.log("isOddElegant - testing when num is 2: ", isOddElegant(2));
// console.log("isOddElegant - testing when num is 3: ", isOddElegant(3));
// console.log("isOddElegant - testing when num is 11: ", isOddElegant(11));
// console.groupEnd();

//
//
//
//
// Knowing this, can you do:
// 21 (areBothOdd) - https://codepen.io/elawrence13/pen/XPXKrg
// 23 (isOddLength) - https://codepen.io/elawrence13/pen/aadZOE
