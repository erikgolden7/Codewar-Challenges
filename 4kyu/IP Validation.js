// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

// Input to the function is guaranteed to be a single string.

// Examples

// // valid inputs:
// 1.2.3.4
// 123.45.67.89

// // invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Solution:

function isValidIP(str) {
  if (str.split(".").length !== 4) {
    return false
  }

  for (var i = 0; i < str.split(".").length; i++) {
    var num = Number(str.split(".")[i])

    if (num < 0 || num > 255 || isNaN(num) || /\s/g.test(str.split(".")[i])) {
      return false
    }
  }
  return true
}
