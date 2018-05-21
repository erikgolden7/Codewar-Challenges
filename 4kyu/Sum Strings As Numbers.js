// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// Solution:

function addition(a, b, acc = "", carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, "");

  carry = carry + (~~a.pop() + ~~b.pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
  if (a === "0" && b === "0") return "0";
  return addition(a.split(""), b.split(""));
}
