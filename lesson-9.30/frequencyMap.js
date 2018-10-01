// Find the most common word in a string
//
// "Our cat Milano likes to steal dried fish and dried squid."
// Most common word: dried

function mostCommonWordInString(str) {
  const words = str.split(" ");
  const frequencyMap = {}; // key is the word, value is the count of times we've seen the word
  let mostCommon;

  // Go through all the words
  for(let i = 0; i < words.length; i++) {
    const word = words[i];

    // If we've already seen the word, increment the count in the map
    if(frequencyMap[word] !== undefined) {
      frequencyMap[word] += 1;
    } else {
      // Otherwise, it's the first time seeing the word. So set the count to 1
      frequencyMap[word] = 1;
    }

    // If we don't have a most common word yet, or if the current word is now the most common
    // Update the "mostCommon" variable
    if(mostCommon === undefined || frequencyMap[word] > frequencyMap[mostCommon]) {
      mostCommon = word;
    }
  }

  return mostCommon;
}

const test = "Our cat Milano likes to steal dried fish and dried squid.";
console.log(mostCommonWordInString(test));

