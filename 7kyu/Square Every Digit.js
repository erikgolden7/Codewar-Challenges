// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer

// Solution:

squareDigits = num =>
  Number(
    num
      .toString()
      .split("")
      .map((e, i) => Math.pow(e.toString().charAt(0), 2))
      .join("")
  )
