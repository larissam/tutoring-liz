// Concepts tested: accessing items in arrays, array equality
const cat = {
  name: "Milano",
  age: 7,
  favoriteThingsToScratch: ['my nice couch', 'my laptop', 'everything but the cat scratcher'],
  favoritePlacesToHide: ['under the couch', 'under the bed', 'in the closet'],
  favoriteFoods: ['chicken', 'seaweed', 'dried squid', 'maidenhair fern'],
  favoriteThingsToDo: ['sleep', 'watch cat tv', 'eat maidenhair fern'],
};

//console.group("Array indicies and .length property");

//console.log(cat.favoriteThingsToScratch[2]); // what does this log?
//console.log(cat.favoriteThingsToScratch.length); // what about this?
//console.log(cat.favoriteThingsToScratch.length - 1); // what about this?

//const numberOfFavoriteThingsToScratch = cat.favoriteThingsToScratch.length;
//console.log(numberOfFavoriteThingsToScratch); // what does this log?

//if(numberOfFavoriteThingsToScratch !== cat.favoriteThingsToScratch.length) {
//  console.log("they are not the same");
//} else {
//  console.log("they are the same");
//}

//console.log(cat.favoriteThingsToScratch[numberOfFavoriteThingsToScratch - 1]); // what does this log?
//if(cat.favoriteThingsToScratch[numberOfFavoriteThingsToScratch - 1] !== cat.favoriteThingsToScratch[cat.favoriteThingsToScratch.length - 1]) {
//  console.log("they are not the same");
//} else {
//  console.log("they are the same");
//}

//// Write code to log out:
//// HINT: use ".length" - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//// The number of favoriteFoods the cat has
//// The number of favoriteThingsToDo the cat has
////
//console.groupEnd();


//console.group("Array equality");
//let awesomeThingsToDo = ['sleep', 'watch cat tv', 'eat maidenhair fern'];

//// what happens
//if(cat.favoriteThingsToDo === awesomeThingsToDo) {
//  console.log("they are the same!");
//} else {
//  console.log("they are not the same!");
//}

//awesomeThingsToDo = cat.favoriteThingsToDo;

//// what happens now?
//if(cat.favoriteThingsToDo === awesomeThingsToDo) {
//  console.log("they are the same!");
//} else {
//  console.log("they are not the same!");
//}

//let myFavoriteThingsToDo = awesomeThingsToDo;
//// what happens?
//if(cat.favoriteThingsToDo === myFavoriteThingsToDo) {
//  console.log("they are the same!");
//} else {
//  console.log("they are not the same!");
//}

//awesomeThingsToDo.push('ride boosted board');

//console.log('how many things does cat like to do: ', cat.favoriteThingsToDo.length); // what does this do?
//console.log('how many awesome things are there to do: ', awesomeThingsToDo.length); // what about this?
//console.log('what about the number of favorite things to do: ', myFavoriteThingsToDo.length); // what about this?

//// what happens?
//if(awesomeThingsToDo === myFavoriteThingsToDo) {
//  console.log("seems like they're all the same?");
//} else {
//  console.log("they are not the same!");
//}

//awesomeThingsToDo[2] = 'eat mushrooms'; // screw ferns

//if(cat.favoriteThingsToDo[2] === 'eat mushrooms') {
//  console.log('cat likes mushrooms');
//} else {
//  console.log('cat does not like mushrooms');
//}

//if(myFavoriteThingsToDo[2] === 'eat mushrooms') {
//  console.log('eating mushrooms is awesome');
//} else {
//  console.log('eating mushrooms is not so awesome');
//}

//if(myFavoriteThingsToDo[2] === cat.favoriteThingsToDo[2]) {
//  console.log('everyone likes mushrooms');
//} else {
//  console.log('nobody likes mushrooms');
//}

//if(cat.favoriteThingsToDo[cat.favoriteThingsToDo.length - 1] === 'ride boosted board') {
//  console.log('cat loves riding a boosted board!');
//} else {
//  console.log('cat does not love riding a boosted board!');
//}

//console.groupEnd();

