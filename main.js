function toWord(inputNum, type) {
   let num = inputNum;
   if (num.toFixed().toString().length < 7) { if (num != num.toFixed()) { num = num.toFixed(2); } return commas(num); }
   else {
      num = eToO(num.toFixed());
      if (check(num.length, 7, 8, 9)) { return returnNumber(7, (type === "short" ? "M" : " Million")); }
      if (check(num.length, 10, 11, 12)) { return returnNumber(10, (type === "short" ? "B" : " Billion")); }
      if (check(num.length, 13, 14, 15)) { return returnNumber(13, (type === "short" ? "t" : " Trillion")); }
      if (check(num.length, 16, 17, 18)) { return returnNumber(16, (type === "short" ? "q" : " Quadrillion")); }
      if (check(num.length, 19, 20, 21)) { return returnNumber(19, (type === "short" ? "Q" : " Quintillion")); }
      if (check(num.length, 22, 23, 24)) { return returnNumber(22, (type === "short" ? "s" : " Sextillion")); }
      if (check(num.length, 25, 26, 27)) { return returnNumber(25, (type === "short" ? "S" : " Septillion")); }
      if (check(num.length, 28, 29, 30)) { return returnNumber(28, (type === "short" ? "o" : " Octillion")); }
      if (check(num.length, 31, 32, 33)) { return returnNumber(31, (type === "short" ? "n" : " Nonillion")); }
      if (check(num.length, 34, 35, 36)) { return returnNumber(34, (type === "short" ? "d" : " Decillion")); }
      if (check(num.length, 37, 38, 39)) { return returnNumber(37, (type === "short" ? "U" : " Undecillion")); }
      if (check(num.length, 40, 41, 42)) { return returnNumber(40, (type === "short" ? "D" : " Duodecillion")); }
      if (check(num.length, 43, 44, 45)) { return returnNumber(43, (type === "short" ? "T" : " Tredecillion")); }
      if (check(num.length, 46, 47, 48)) { return returnNumber(46, (type === "short" ? "qu" : " Quattuordecillion")); }
      if (check(num.length, 49, 50, 51)) { return returnNumber(49, (type === "short" ? "Qu" : " Quindecillion")); }
      if (check(num.length, 52, 53, 54)) { return returnNumber(52, (type === "short" ? "se" : " Sedecillion")); }
      if (check(num.length, 55, 56, 57)) { return returnNumber(55, (type === "short" ? "Se" : " Septendecillion")); }
      if (check(num.length, 58, 59, 60)) { return returnNumber(58, (type === "short" ? "O" : " Octodecillion")); }
      if (check(num.length, 61, 62, 63)) { return returnNumber(61, (type === "short" ? "N" : " Novendecillion")); }
      if (check(num.length, 64, 65, 66)) { return returnNumber(64, (type === "short" ? "V" : " Vigintillion")); }
      if (check(num.length, 67, 68, 69)) { return returnNumber(67, (type === "short" ? "Uv" : " Unvigintillion")); }
      if (check(num.length, 70, 71, 72)) { return returnNumber(70, (type === "short" ? "Du" : " Duovigintillion")); }
      if (check(num.length, 73, 74, 75)) { return returnNumber(73, (type === "short" ? "Tr" : " Tresvigintillion")); }
      if (check(num.length, 76, 77, 78)) { return returnNumber(76, (type === "short" ? "Qua" : " Quattuorvigintillion")); }
      else { return ":( Too large, try a number below at or below 999 Quattuorvigintillion (10 to the 75th power)"; }
      // Numbersare from the Wikipedia 'Names of large numbers' page
   }
   function eToO(num) {
     return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
       function(a,b,c,d,e) {
         return e < 0
           ? b + '0.' + Array(1-e-c.length).join(0) + c + d
           : b + c + d + Array(e-d.length+1).join(0);
       });
   }
   function check(item, equalOne, equalTwo, equalThree) {
      if (item === equalOne || item === equalTwo || item === equalThree) { return true; }
      else { return false; }
   }
   function returnNumber(number, str) {
      if (num.length == number) { num = `${num.substring(0, 1)}.${num.substring(1, 2)}${str}`; }
      else if (num.length == (number + 1)) { num = `${num.substring(0, 2)}.${num.substring(2, 3)}${str}`; }
      else if (num.length == (number + 2)) { num = `${num.substring(0, 3)}.${num.substring(3, 4)}${str}`; }
      return num;
   }
}
