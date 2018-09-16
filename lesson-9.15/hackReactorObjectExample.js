// Use this as a reference for the "object" questions you struggled with
//
// Answer for question 105 - get even elements at property (object)
// https://codepen.io/elawrence13/pen/GXGXzG
//

function getEvenElementsAtProperty(obj, key) {
  const elements = []; // make an empty array to store the even elements we find. We will return this array at the end.

  const valueAtKey = obj[key]; // get the property at the given key

  // if the property is an array, loop through it looking for even elements
  if(Array.isArray(valueAtKey)) {
    for(let i = 0; i < valueAtKey.length; i++) {
      const currentValue = valueAtKey[i];

      // If the value in the array is even, push it into elements
      if(currentValue % 2 === 0) {
        elements.push(currentValue);
      }
    }
  }

  return elements; // the elements array should now be populated with even elements. Return it
}
