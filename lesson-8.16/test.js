let pet = {
  name: "Milano",
  'age': 5, // you can have quotes around the property name - it's the same
  gender: 'female',
  weight: 8,
  "speak": function() {
    console.log(`Meeeeeeeeow! I am ${pet.name}`);
  },
  changeName: function(nextName) {
    pet.name = nextName;
  }
};

// console.log(pet.name); // what happens?
// console.log(pet.age); // what happens?
// console.log(typeof pet.speak); // what happens?
// console.log(typeof pet.changeName); // what happens?

// pet.speak(); // what happens?

// pet.name = "Reeses";
// pet.speak(); // what happens?

// pet.changeName("Oreo");
// pet.speak(); // what happens?

// pet.name = "Snickers";
// pet.speak(); // what happens?

// pet.changeName("Kitkat");
// pet.speak(); // what happens?

// console.log(pet.name); // what happens?

// console.log(pet.weight); // what happens?
// pet.weight = 5;
// console.log(pet.weight); // what happens?

// pet.gainWeight = function(pounds) {
//   pet.weight += pounds;
// };

// pet.gainWeight(1);
// console.log(pet.weight); // what happens?

let shelter = {
  dogs: [{
    name: 'Dixie',
    age: 4,
    gender: 'female',
    weight: 10
  }, {
    name: 'Dozer',
    age: 4,
    gender: 'male',
    weight: 20
  }],
  cats: [pet]
};

// console.log(shelter.dogs[0].name); // what happens?
// console.log(shelter.dogs[0].weight); // what happens?
// console.log(shelter.dogs[1].gender); // what happens?
// console.log(shelter.cats[0].name); // what happens?
// shelter.cats[0].speak(); // what happens?
// shelter.cats[0].changeName("Macadamia");
// shelter.cats[0].speak(); // what happens?

