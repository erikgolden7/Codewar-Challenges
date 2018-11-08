// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// Solution:

function solution(str) {
  let spl = str.split('');
  let final = [];

  while (spl.length > 0) {
    if (spl.length <= 1) {
      final.push(`${spl.pop()}_`);
    } else {
      final.push(spl[0] + spl[1]);
      spl.splice(0, 2);
    }
  }

  return final;
}
