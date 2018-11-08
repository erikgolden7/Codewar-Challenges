// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

// Solution:

function longest(s1, s2) {
  let result = [];
  s1.concat(s2)
    .split('')
    .sort()
    .reduce((prev, curr) => {
      if (curr !== prev) {
        result.push(curr);
        return curr;
      } else {
        return prev;
      }
    }, 0);
  return result.join('');
}

function longest(s1, s2) {
  let longest = [];
  s1.concat(s2)
    .split('')
    .map(e => (!longest.includes(e) ? longest.push(e) : ''));
  return longest.sort().join('');
}
