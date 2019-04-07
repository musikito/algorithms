/**
 * Given an integer, return an integer that is the reverse ordering of numbers.
 * The steps here are:

Turn the number into a string using toString()
Reverse the string
Turn the reversed string back to number with the correct sign return from Math.sign()
 * 
 */

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join(''); // turn a number into a string, then turn it into an array to reverse. 
    return Math.sign(n) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
  }

var numberToReverse = reverseInt(1234);

console.log(numberToReverse);