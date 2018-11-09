// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Solution:

function longestConsec(arr, k) {
  let temp = '';

  if (k <= 0 || k > arr.length) return '';

  while (arr.length > 0) {
    if (temp.length < arr.slice(0, k).join('').length) {
      temp = arr.slice(0, k).join('');
    }
    arr.shift();
  }

  return temp;
}
