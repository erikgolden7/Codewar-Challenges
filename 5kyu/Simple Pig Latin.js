// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Solution:

const pigIt = str =>
  str
    .split(' ')
    .map(e => ('!?'.indexOf(e) !== -1 ? e : e.replace(e, e.substr(1) + e[0] + 'ay')))
    .join(' ');
