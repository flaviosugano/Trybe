const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// ex1: Dada uma matriz de matrizes, transforme em uma única matriz.
function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((concatArrays, currentArray) => concatArrays.concat(currentArray));
}

assert.deepEqual(flatten(arrays), ["1", "2", "3", true, 4, 5, 6]);