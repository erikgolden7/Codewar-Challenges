// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution:

accum = (str) => {
  var newArr = []
  var index = 0
  str.split('').forEach((ele) => {
    var count = 0
    while(count <= index){
      count === 0 ? newArr.push(ele.toUpperCase()) : newArr.push(ele.toLowerCase())
      count++
    }
    newArr.push('-')
    index++
  })
  newArr.pop()
  return newArr.join('')
}
