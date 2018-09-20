// The many ways to do the "get smallest number in array" problem.
// Make sure to return undefined if the array is empty.

// you can assume the first element (arr[0]) is the smallest...
// just make sure to check if the array is empty upfront.
// this is how I wrote it when I started out.
function getSmallestNumberCheckArrayUpfront(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // what does i start with? why?
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// or, you can set smallest to be infinity (Number.MAX_VALUE) upfront
// and then if it's still infinity at the end, we know the array was empty.
function getSmallestNumberMaxValue(arr) {
  let smallest = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  if (smallest === Number.MAX_VALUE) {
    // if smallest is still infinity... then we know the array was empty
    return undefined;
  }
  return smallest;
}

// you can also write the above function above with a ternary.
function getSmallestNumberMaxValueTernary(arr) {
  let smallest = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest === Number.MAX_VALUE ? undefined : smallest;
}

// you can also just set smallest to undefined at the beginning and make sure
// to check for that case in your if statement.
// I think this is pretty elegant.
// Even more elegant than using infinity (Number.MAX_VALUE), UNLESS...
function getSmallestNumberUndefined(arr) {
  let smallest = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (smallest === undefined || arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// you use Math.min().
// I like this solution (and the one using undefined) the best.
function getSmallestNumberMaxValueTernary(arr) {
  let smallest = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    smallest = Math.min(smallest, arr[i]);
  }

  return smallest === Number.MAX_VALUE ? undefined : smallest;
}

// and since you'll see asshole solutions online...
// here's an example of one. Ignore them.
const getSmallestNumberAsshole = arr =>
  arr.reduce((c, a) => (a = Math.min(c, a)), Number.MAX_VALUE);

// Overall, my point is that there are many ways to write this function...
// There is no "right" way, so don't try to memorize it line-by-line.
// Memorize the pseudocode ("keep track of the smallest number; go through the
// array; and update smallest number accordingly").

// It's like writing a book. Some are certainly better than others...
// But there are multiple "good" ways to do it.
// I'd be happy with any of these solutions if I saw them in an interview.
// (though for the asshole one, I'd question their communication skills)
