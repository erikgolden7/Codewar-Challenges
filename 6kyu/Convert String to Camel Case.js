// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// Solution:

function toCamelCase(str) {
  let flag = false;

  return str.split('').reduce((acc, e, i, a) => {
    if (flag) {
      flag = false;
      return acc;
    } else if (i === 0 || (e !== '-' && e !== '_')) return acc + e;

    flag = true;
    return acc + a[i].replace(e, a[i + 1].toUpperCase());
  }, '');
}
