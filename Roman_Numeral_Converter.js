//Problem
/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/
//
///Algorithm
/*
 1 - iterates over all properties of object that are key
 2 - while num is >= to the object value 
    - push that value key to roman
    - subtract the the value from num
 3 - do agian till the cndition evaluates to false
 4 - return roman 
*/
//
////Slution
//
function convertToRoman(num) {
  const numeral = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let roman = "";
    let i;
  for (i in numeral) {
    while (num >= numeral[i]) {
      roman += i;
      num -= numeral[i];
    }
  }
  return roman;
}
console.log(convertToRoman(44));
//return  :  XLIV
