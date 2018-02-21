// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Solution:

XO = str => {
  var x = 0, o = 0, lower = str.toLowerCase()
  lower.split('').forEach((el) => el === 'x' ? x++ : el === 'o' ? o++ : false)
  if (x === o) {
    return true
  }else {return false}
}
