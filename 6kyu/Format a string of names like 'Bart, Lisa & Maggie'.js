// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// Solution:

function list(names) {
  if (names.length === 1) {
    return names[0].name;
  }
  return names
    .map(
      (e, i, arr) =>
        i === arr.length - 1
          ? '& ' + e.name
          : i === arr.length - 2
            ? e.name + ' '
            : e.name + ', '
    )
    .join('');
}
