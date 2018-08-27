let cat = {};

//// How many properties does cat have?
//let catsProperties = Object.keys(cat);

//// What does Object.keys() return?
//if(Array.isArray(catsProperties)) {
//  console.log("CatsProperties is an array");
//} else {
//  console.log("CatsProperties is not an array");
//}

//// We can use .length
//console.log(`Cat has ${catsProperties.length} properties.`);

//cat.name = "Milano";

//// Now how many properties does cat have?
//console.log(`Cat has ${Object.keys(cat).length} properties now. They are: ${Object.keys(cat)}`);

//cat.age = 7;

//// What about now?
//console.log(`Cat has ${Object.keys(cat).length} properties now. They are: ${Object.keys(cat)}`);

//cat.breed = "Domestic shorthair aka random mutt";

//// What about now?
//console.log(`Cat has ${Object.keys(cat).length} properties now. They are: ${Object.keys(cat)}`);

//function addProperty(obj, key, value) {
//  console.group("~~~~~~ beginning addProperty function");
//  console.log("obj BEFORE: ", obj);
//  obj[key] = value;
//  console.log("obj AFTER: ", obj);
//  console.groupEnd();
//  console.log("~~~~~~ ending addProperty function");
//}

//addProperty(cat, "temperament", "friendly");
//// What about now?
//console.log(`Cat has ${Object.keys(cat).length} properties now. They are: ${Object.keys(cat)}`);
//console.log("Now, cat is: ", cat);

//addProperty(cat, "favoriteFoods", ["chicken", "squid", "fish"]);

//// What about now?
//console.log(`Cat has ${Object.keys(cat).length} properties now. They are: ${Object.keys(cat)}`);
//console.log("Now, cat is: ", cat);

//let owner = {
//  name: "Larissa"
//};

//addProperty(cat, "human", owner);

//// What about now?
//console.log(`Cat has ${Object.keys(cat).length} properties now. They are: ${Object.keys(cat)}`);
//console.log("Now, cat is: ", cat);

//// This function will add a greeting property based on the cat's temperament
//function addGreeting(cat) {
//  if(cat.temperament === "grumpy") {
//    cat.greeting = `Im ${cat.name}. Go away.`;
//  } else {
//    cat.greeting = `Meow! Im ${cat.name}. Pet me!`;
//    // If I changed the above line to the following, would it still work?
//    // cat["greeting"] = `Meow! Im ${cat.name}. Pet me!`;

//    // What about:
//    // cat[greeting] = `Meow! Im ${cat.name}. Pet me!`;
//  }
//}

//addGreeting(cat);
//console.log("Now, cat is: ", cat);

////
////
////
////
//// Try again:
//// 31 (addFullNameProperty) - https://codepen.io/elawrence13/pen/jvWQey?editors=0010#0
//// 32 (addObjectProperty) - https://codepen.io/elawrence13/pen/QVyGaX
//// 37 (addArrayProperty) - https://codepen.io/elawrence13/pen/ZMQBjW
