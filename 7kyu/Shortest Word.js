// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution: 

findShort = s => {
  let max = 99;
   s.split(' ').forEach( e => e.length < max ? max = e.length : '' )
  return max
  } 
