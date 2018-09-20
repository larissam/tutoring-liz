// Return the longest string in an array - return empty string if array is empty
function getLongestString(arr) {
    let longest = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

// Return the length of the longest string in an array - METHOD 1
// You can keep track of the longest length...
function getLengthOfLongestStringMethod1(arr) {
    let longest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) { // notice we compare to longest, not longest.length
            longest = arr[i].length;
        }
    }

    return longest;
}

// Return the length of the longest string in an array - METHOD 2
// You can keep track of the longest string too, and just return the length at the end.
// (NOTE: Neither implementation is "better". Do what makes more sense to you... even amongst 
// "good" solutions, there are often multiple ways to do it.)
function getLengthOfLongestStringMethod2(arr) {
    let longest = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) { // notice we compare to longest.length - because longest is a string now
            longest = arr[i].length;
        }
    }

    return longest.length; // and we return the length at the end
}

// Return the length of the longest string in an array - METHOD 3
// You can even use a while loop if you want!
// The key is the algorithm is the same: "keep track of the longest string you've seen. Go
// through all the elements. If you find a longer one, update your 'longest' variable."
function getLengthOfLongestStringMethod3(arr) {
    let longest = "";

    let i = 0;
    while (i < arr.length) {
        if (arr[i].length > longest.length) { // notice we compare to longest.length - because longest is a string
            longest = arr[i].length;
        }
        i++; // we need to do this - otherwise "i" will always be 0!
    }

    return longest.length; // and we return the length at the end
}


// Return the biggest number in an array - and undefined if array is empty
function getBiggestNumberInArrayMethod1(arr) {
    let biggest = undefined;

    for (let i = 0; i < arr.length; i++) {
        if (biggest === undefined || arr[i] > biggest) { // when would biggest be undefined? try changing this line to see.
            biggest = arr[i];
        }
    }

    return biggest;
}

// Return the biggest number in an array - and undefined if array is empty
// Here's another (probably more clear) way to do it. We handle the empty array case up front.
// From that point on, we know there is at least one thing in the array, so we can
// set our biggest variable to be the first thing in the array to start out with.
function getBiggestNumberInArrayMethod2(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let biggest = arr[0]; // store the first one
    for (let i = 1; i < arr.length; i++) { // what does i start with here? why?
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }

    return biggest;
}

// Return the longest string at object property
// Ex. 
// let cat = {
//     name: "Milano",
//     favoriteNumbers: [4, 10, 200, 1]
// };
// getBiggestNumberAtObjectProperty(cat, 'favoriteNumbers'); // should return 200
// getBiggestNumberAtObjectProperty(cat, 'name'); // should return undefined
// getBiggestNumberAtObjectProperty(cat, 'age'); // should return undefined
function getBiggestNumberAtObjectProperty(obj, property) {
    // if it's not an array, return undefined. This is "edge case checking", 
    // like we do in getBiggestNumberInArrayMethod2 above.
    if (!Array.isArray(obj[property]) || obj[property].length === 0) {
        return undefined;
    }

    // From this point on, we know obj[property] is an array with something in it.
    // So we can do the same algorithm as before...

    // store the first one. I know this looks weird!!!
    // It works because obj[property] is an ARRAY. 
    // This is equivalent:
    // let arr = obj[property];
    // let biggest = arr[0];
    let biggest = obj[property][0]; // start with the first element in the obj[property] array.

    for (let i = 1; i < obj[property].length; i++) { // what does i start with here? why?
        if (obj[property][i] > biggest) {
            biggest = obj[property][i];
        }
    }

    return biggest;

    // Honestly though, I'm just trying to prove a point. The question to ask yourself is:
    // "what is obj[property]? is it an array?"
    // What I'd normally do is:
    // let arr = obj[property]; // Now, everywhere that has obj[property] i can replace with arr
    // let biggest = arr[0];

    // for (let i = 1; i < arr[0].length; i++) { // what does i start with here? why?
    //     if (arr[i] > biggest) {
    //         biggest = arr[i];
    //     }
    // }

    // return biggest;
}


// Return the biggest number in an array of mixed elements
function getBiggestNumberInArrayOfMixedElements(arr) {
    let biggest = undefined;
    for (let i = 0; i < arr.length; i++) {
        // if it's a number, AND:
        // 1. biggest is undefined (this is the first number we're seeing) OR
        // 2. arr[i] > biggest (we're seeing an even bigger number)
        // THEN, we want to update it.
        if (typeof arr[i] === "number" && (biggest === undefined || arr[i] > biggest)) { // when would biggest be undefined? try changing this line to see.
            biggest = arr[i];
        }
    }

    return biggest;
}

// Question to think about:
// Why did I not implement getBiggestNumberInArrayOfMixedElements() by setting biggest to equal arr[i]?
// HINT: what if the entire input array looks like: ['hi', 'there', 'milano']? what would be the biggest number then?