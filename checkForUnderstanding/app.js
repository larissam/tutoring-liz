let x = "hi";
// console.log(x); // what does this log? write out what you think - then uncomment out this line and see if you're right!
// console.log("x"); // what does this log?

x = "bye";
// console.log(x); // what does this log?

x = 1;
// console.log(x); // what does this log?
// console.log("x"); // what does this log?

x = {
	name: "milano",
	age: 7
};
// console.log(x); // what does this log?

function log(x) {
	console.log(x);
}
// log("stuff"); // what happens?

function doSomething(x) {
	console.log("here");
	console.log(x);
}
// doSomething("stuff"); // what happens?

// write out what happens - then uncomment out the for loop and see if you're right!
// for(let i = 0; i < 10; i++) {
// 	doSomething(i);
// }

x = {
	name: "milano",
	age: 7,
	favoriteFoods: [{
		brand: "Trader Joes",
		flavor: "Tuna",
		price: 1
  }, {
    brand: "Fancy Feast",
		flavor: "Ocean Fish Pate",
		price: 2
  }, {
    brand: "Friskies",
		flavor: "Chicken in Gravy",
		price: 1
  }]
};
// console.log(x); // what does this log?
// console.log(x.name); // what does this log?
// console.log(x.favoriteFoods); // what does this log?
// console.log(x.favoriteFoods[1]); // what does this log?
// console.log(x.favoriteFoods[0].brand); // what does this log?
// console.log(x.favoriteFoods[x.favoriteFoods.length - 1].flavor); // what does this log?

// write out what happens - then uncomment out the for loop and see if you're right!
// for(let i = 0; i < x.favoriteFoods.length; i++) {
// 	console.log(x.favoriteFoods[i].flavor);
// }

function isEven(number) {
	if(number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// write out what happens - then uncomment out the if/else statement and see if you're right!
// if(isEven(2)) {
// 	console.log("even!");
// } else {
// 	console.log("odd!");
// }

// write out what happens - then uncomment out the for loop and see if you're right!
// for(let i = 0; i < 10; i++) {
// 	if(isEven(i)) {
// 		console.log(i);
// 	}
// }

// write out what happens - then uncomment out the for loop and see if you're right!
// for(let i = 0; i < x.favoriteFoods.length; i++) {
// 	if(isEven(x.favoriteFoods[i].price)) {
// 		console.log(x.favoriteFoods[i].brand);
// 	}
// }


