// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using "encode" in Python is considered cheating.

// Solution:

function rot13(mess) {
  let alph = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];
  let ciph = [...'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'];

  return mess
    .split('')
    .map(e => {
      let char = alph.indexOf(e);
      if (alph.indexOf(e) !== -1) return ciph[char];
      else return e;
    })
    .join('');
}
