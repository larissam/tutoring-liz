// Working example to use as a reference for Hack Reactor questions 116-120
// get length of shortest element (array)
// get longest element (array)
// find smallest element (array)
// find shortest element (array)
// get largest element (array)


const test = [
    'stuff',
    'supercalifragilisticexpialidocious',
    'Pneumonoultramicroscopicsilicovolcanoconiosis',
    'Pseudopseudohypoparathyroidism',
];

// Pseudocode:
// Declare a variable to keep track of the longest length you have seen so far.
// Loop through the elements in the array. If you find a word that's longer,
// then update the longest length you've seen so far.
function getLengthOfLongestElement(arr) {
    let longestLength = 0; // longest length starts as 0, because you haven't seen any elements yet

    // look through the array of elements
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        // we found an element that's longer! update longestLength
        if (currentElement.length > longestLength) {
            longestLength = currentElement.length;
        }
    }

    return longestLength;
}

getLengthOfLongestElement(test); // what does this do?
console.log(getLengthOfLongestElement(test)); // what about this? how does it differ from the line above?

// how do I know my function is correct?
// see: // https://en.wikipedia.org/wiki/Longest_word_in_English




const cats = [{
    name: "Smoky",
    age: 17
}, {
    name: "Milano",
    age: 7
}, {
    name: "Misa",
    age: 2
}];


function getCatWithLongestName(cats) {
    let catWithLongestName = cats[0];

    for (let i = 0; i < cats.length; i++) {
        const currentCat = cats[i];
        const currentCatName = currentCat.name;
        const longestCatName = catWithLongestName.name;

        if (currentCatName.length > longestCatName.length) {
            catWithLongestName = currentCat;
        }

        // the if statement can also be written as:
        // if (cats[i].name.length > catWithLongestName.name.length) {
        //     catWithLongestName = currentCat;
        // }
    }

    return catWithLongestName;
}

console.log("Cat with the longest name is: ", getCatWithLongestName(cats));
