// Concepts: if vs if else
//

// 17 (isEqualTo) - https://codepen.io/elawrence13/pen/JaGXqM
function isEqualTo(num1, num2) {
  if (num1 === num2){
    return true;
  } else if (num1 != num2){
    return false;
  }
}

// Rule of thumb: use if/else when there are only 2 possible results
// The results in this case are:
// 1. Num1 is equal to Num2.
// 2. Num1 isn't equal to Num2.
// So we can rewrite this function as:


function isEqualToRevised(num1, num2) {
  if (num1 === num2){
    return true;
  } else {
    return false;
  }
}


// Try again:
// 1 (isOldEnoughToDrink) - https://codepen.io/elawrence13/pen/KxVpjV
// 2 (isOldEnoughToDrive) - https://codepen.io/elawrence13/pen/PdZPov
// 3 (isOldEnoughToVote) - https://codepen.io/elawrence13/pen/vzLNEv
// 4 (isOldEnoughToDrinkAndDrive) - https://codepen.io/elawrence13/pen/yxeYNV
// 8 (checkAge) - https://codepen.io/elawrence13/pen/rZxOyY
// 12 (isGreaterThanTen) - https://codepen.io/elawrence13/pen/MqKyYM
// 13 (isLessThan30) - https://codepen.io/elawrence13/pen/VGeaKz
// 14 (equalsTen) - https://codepen.io/elawrence13/pen/gdPrwz
// 20 (isSameLength) - https://codepen.io/elawrence13/pen/EePKqv
