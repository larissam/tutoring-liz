// Concepts tested: data types, concatenation, console.log vs return, parseInt, toString, nested function calls

// function logAdd5(input) {
//   console.log(input + 5);
// }

// console.group("Testing logAdd5 function");
// logAdd5(10); // what does this do?
// logAdd5(-1); // what about this?
// logAdd5("10"); // what about this?
// logAdd5("-2"); // what about this?
// console.groupEnd();


// function returnAdd5(input) {
//   return input + 5;
// }

// console.group("Testing returnAdd5 function");
// returnAdd5(10); // what does this do?
// returnAdd5(-1); // what about this?
// console.log("Did the above 2 lines log anything...?");

// console.log("Now I'm going to wrap those function calls in console.log() and see what happens.")
// console.log(returnAdd5(10)); // did this log anything?
// console.log(returnAdd5(-1)); // did this log anything?
// console.log("What about now? Did the above 2 lines log anything...?");

// console.log("What if I pass in a string?");
// console.log(returnAdd5("101")); // what does this do?

// // What happens?
// if(returnAdd5(10) === returnAdd5("10")) {
//   console.log("they are the same");
// } else {
//   console.log("they are not the same");
// }

// console.groupEnd();


// console.group("What is parseInt?")

// const data = 1;
// const moreData = "1";

// // What happens?
// if(data === moreData) {
//   console.log("They are the same");
// } else {
//   console.log("They are not the same");
// }

// const convertedMoreData = parseInt(moreData);
// console.log(typeof moreData); // what does this do?
// console.log(typeof convertedMoreData); // what does this do?

// // What happens?
// if(data === convertedMoreData) {
//   console.log("They are the same");
// } else {
//   console.log("They are not the same");
// }

// console.groupEnd();

// console.group("What is toString?");
// const data2 = 1;
// const moreData2 = "1";

// // What happens?
// if(data2 === moreData2) {
//   console.log("They are the same");
// } else {
//   console.log("They are not the same");
// }

// const convertedData2 = data.toString();
// console.log(typeof data2); // what does this do?
// console.log(typeof convertedData2); // what does this do?

// // What happens?
// if(convertedData2 === moreData2) {
//   console.log("They are the same");
// } else {
//   console.log("They are not the same");
// }

// console.groupEnd();


// console.group("Putting it all together");

// // What happens?
// if(returnAdd5(10) === returnAdd5(parseInt("10"))) {
//   console.log("they are the same");
// } else {
//   console.log("they are not the same");
// }

// // What happens?
// const first = "10";
// const second = 10;
// if(returnAdd5(first) !== returnAdd5(second.toString())) {
//   console.log("they are not the same");
// } else {
//   console.log("they are the same");
// }

// console.groupEnd();
