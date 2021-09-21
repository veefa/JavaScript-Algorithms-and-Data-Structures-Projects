////Problem
/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
////Algorithm
/*
 1 - create an arrayfrom by spliting chart
 2 - If it's a non-letter (belon to the alphabet array), don't translate it.
 3 - If it's a letter, translate it 
 4 - translat by mapping character position in the input to its position in the output.
 5 - convert array to string with join()
*/
//
////Solution
//
function rot13(str) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let encryption = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  let arrStr = str.split('');

  return arrStr
    .map((x) => alphabet.indexOf(x) > -1 ? encryption[alphabet.indexOf(x)] : x)
    .join('');
}

console.log(rot13("SERR PBQR PNZC"));
//return  :  FREE CODE CAMP
