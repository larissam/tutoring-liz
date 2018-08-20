const instructors = [{
  name: 'Larissa',
  interests: ['cats', 'psychology', 'weird food']
}, {
  name: 'Sasha',
  interests: ['travel', 'food', 'accordion']
}];

const classroom = {
  name: 'FEWD',
  time: '6:30 PM, T/Th',
  room: 3,
  instructor: instructors[0],
  students: [{
    name: 'Liz',
    interests: ['harry styles', 'mindfulness', 'dessert']
  }, {
    name: 'Jessica',
    interests: ['philanthropy', 'women\'s rights', 'Brazilian government']
  }, {
    name: 'Rubeun',
    interests: ['edm', 'dark things', 'real estate']
  }],
  enroll: (newStudent) => {
    classroom.students.push(newStudent);
  }
};

// console.log(typeof classroom.instructor); // what does this log to the console?
// // what happens?
// if(classroom.instructor !== instructors[0]) {
//   console.log("they are not the same thing");
// } else {
//   console.log("they are the same thing");
// }

// console.log(classroom.instructor.interests.length); // what about this?
// console.log(classroom.instructor.interests[0]); // what about this?
// console.log(classroom.instructor.interests[classroom.instructor.interests.length - 1]); // this? HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length


classroom.instructor.interests.push('javascript'); // what does this do? HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// console.log(classroom.instructor.interests.length); // what is this going to log?
// console.log(classroom.instructor.interests[3]); // what about this?



// console.log(Array.isArray(classroom.students)); // what does this log to the console? HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// console.log(classroom.students[1]); // what does this log to the console?
// console.log(classroom.students[2].interests); // what about this?
// console.log(classroom.students[0].interests[1]); // what about this?



// console.log(classroom.students.length); // what does this log to the console?
const newStudent = {
  name: 'Ashley',
  interests: ['surfing', 'free food', 'lgbt issues']
};

classroom.enroll(newStudent);

// console.log(classroom.students.length); // what does this log to the console? is it different? why?

// // what happens?
// if(newStudent.name === classroom.students[3].name) {
//   console.log('they are the same thing');
// } else {
//   console.log('they are not the same thing');
// }

classroom.enroll({
  name: 'Victor',
  interests: ['basketball', 'design', 'healthcare']
});

// console.log(classroom.students.length); // what does this log to the console? is it different? why?
// console.log(classroom.students[4].interests[2]); // what is this?


const newStudent2 = {
  name: 'Betsy',
  interests: ['her son', 'home decor', 'hardware']
};
classroom.students.push(newStudent2)

// // what happens?
// if(newStudent2.name !== classroom.students[classroom.students.length - 1].name) {
//   console.log('they are not the same thing');
// } else {
//   console.log('they are the same thing');
// }

const elizabethLichtenberg = newStudent2;

// // what happens?
// if(newStudent2 === elizabethLichtenberg) {
//   console.log('they are the same thing');
// } else {
//   console.log('they are not the same thing');
// }

let betsyClone = {
  name: 'Betsy',
  interests: ['her son', 'home decor', 'hardware']
};

// // what happens?
// if(newStudent2 === betsyClone) {
//   console.log('they are the same thing');
// } else {
//   console.log('they are not the same thing');
// }


betsyClone = elizabethLichtenberg;

// // what happens?
// if(newStudent2 === betsyClone) {
//   console.log('they are the same thing');
// } else {
//   console.log('they are not the same thing');
// }
