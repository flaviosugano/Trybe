// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const

// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();
