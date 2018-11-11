// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

// Solution:

const rowSumOddNumbers = n => {
  let arr = [...Array(n * (n + 1)).keys()].filter(e => e % 2 !== 0);
  return arr.slice(arr.length - n).reduce((acc, cur) => (acc += cur), 0);
};
