// ======================================
// About
// ======================================

// This library was created and is maintained by Hamza Nasher-Alneam
// A small but helpful library that handles all your time and number needs.
// Current version: v0.2.0

// ======================================
// Display Numbers as Words
// ======================================

// Numbers are from the Wikipedia "Names of large numbers" page on the short scale

// Returns number in word format
function toWord(inputNum, type, decmialPrecision) {
   let num = Number(inputNum);
   // If the number is less than 7 digits, just put in commas
   if (num.toFixed().length < 7) {
      if (decmialPrecision == 0) return (Math.round(num)).toLocaleString();
      else if (decmialPrecision == 1) return (Math.round(num * 10) / 10).toLocaleString();
      else if (decmialPrecision == 2) return (Math.round(num * 100) / 100).toLocaleString();
      else if (decmialPrecision == 3) return (Math.round(num * 1000) / 1000).toLocaleString();
      else return num.toLocaleString();
   }
   else {
      num = num.toFixed();
      if (findTerrain(7)) return returnNum(7, "M", "Million");
      if (findTerrain(10)) return returnNum(10, "B", "Billion");
      if (findTerrain(13)) return returnNum(13, "t", "Trillion");
      if (findTerrain(16)) return returnNum(16, "q", "Quadrillion");
      if (findTerrain(19)) return returnNum(19, "Q", "Quintillion");
      if (findTerrain(22)) return returnNum(22, "s", "Sextillion");
      if (findTerrain(25)) return returnNum(25, "S", "Septillion");
      if (findTerrain(28)) return returnNum(28, "o", "Octillion");
      if (findTerrain(31)) return returnNum(31, "n", "Nonillion");
      if (findTerrain(34)) return returnNum(34, "d", "Decillion");
      if (findTerrain(37)) return returnNum(37, "U", "Undecillion");
      if (findTerrain(40)) return returnNum(40, "D", "Duodecillion");
      if (findTerrain(43)) return returnNum(43, "T", "Tredecillion");
      if (findTerrain(46)) return returnNum(46, "qu", "Quattuordecillion");
      if (findTerrain(49)) return returnNum(49, "Qu", "Quindecillion");
      if (findTerrain(52)) return returnNum(52, "se", "Sedecillion");
      if (findTerrain(55)) return returnNum(55, "Se", "Septendecillion");
      if (findTerrain(58)) return returnNum(58, "O", "Octodecillion");
      if (findTerrain(61)) return returnNum(61, "N", "Novendecillion");
      if (findTerrain(64)) return returnNum(64, "V", "Vigintillion");
      if (findTerrain(67)) return returnNum(67, "Uv", "Unvigintillion");
      if (findTerrain(70)) return returnNum(70, "Du", "Duovigintillion");
      if (findTerrain(73)) return returnNum(73, "Tr", "Tresvigintillion");
      if (findTerrain(76)) return returnNum(76, "Qua", "Quattuorvigintillion");
      if (findTerrain(79)) return returnNum(79, "Qui", "Quinvigintillion");
      if (findTerrain(82)) return returnNum(82, "Sex", "Sexvigintillion");
      if (findTerrain(85)) return returnNum(85, "Sep", "Septenvigintillion");
      if (findTerrain(88)) return returnNum(88, "Oc", "Octovigintillion");
      if (findTerrain(91)) return returnNum(91, "No", "Novemvigintillion");
      else {
         console.warn(`The number you inputed to digit.js (${inputNum}) is larger than I can handle, so I'll put commas in it for now.`);
         return num.toLocaleString();
      }
   }
   function findTerrain(terrain) {
      if (num.length === terrain || num.length === terrain + 1 || num.length === terrain + 2) { return true; }
      else { return false; }
   }
   function returnNum(number, shortStr, longStr) {
      if (num.length == number) { num = `${num.substring(0, 1)}.${num.substring(1, 2)} ${type === "short" ? shortStr : longStr}`; }
      else if (num.length == (number + 1)) { num = `${num.substring(0, 2)}.${num.substring(2, 3)} ${type === "short" ? shortStr : longStr}`; }
      else if (num.length == (number + 2)) { num = `${num.substring(0, 3)}.${num.substring(3, 4)} ${type === "short" ? shortStr : longStr}`; }
      return num;
   }
}

// Note - .toLocaleString() stops decimals at thousandths

// ======================================
// Time
// ======================================

// Returns date in different formats
function formatDate(date, format) {
   if (format == "dmy") {
      let dateObj = new Date(date);
      return `${dateObj.getUTCDate()}/${dateObj.getUTCMonth() + 1}/${dateObj.getUTCFullYear()}`;
   }
   else if (format == "mdy") {
      let dateObj = new Date(date);
      return `${dateObj.getUTCMonth() + 1}/${dateObj.getUTCDate()}/${dateObj.getUTCFullYear()}`;
   }
   else if (format == "quick") {
      let dateObj = new Date(date);
      let month = dateObj.getUTCMonth() + 1;
      if (month == 1) month = "Jan";
      if (month == 2) month = "Feb";
      if (month == 3) month = "Mar";
      if (month == 4) month = "Apr";
      if (month == 5) month = "May";
      if (month == 6) month = "Jun";
      if (month == 7) month = "Jul";
      if (month == 8) month = "Aug";
      if (month == 9) month = "Sep";
      if (month == 10) month = "Oct";
      if (month == 11) month = "Nov";
      if (month == 12) month = "Dec";
      return `${month} ${dateObj.getUTCDate()} ${dateObj.getUTCFullYear()}`;
   }
   else return date.toLocaleDateString();
}
function dateIs(date, format) {
   formatDate(date, format);
}

// Formats date string with 12 or 24 hour time
function formatTime(date, format) {
   if (format == "12") {
      // 12 hour time
      let dateObj = new Date(date);
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;
      if (date.getHours() == "0") return `12:${minutes} a.m.`;
      else if (date.getHours() < 12) return `${dateObj.getHours()}:${minutes} a.m.`;
      else return `${date.getHours() % 12 || 12}:${minutes} p.m`;
   }
   else {
      // 24 hour time
      let dateObj = new Date(date);
      let hours, mins;
      if (dateObj.getHours().toString().length < 2) hours = `0${dateObj.getHours()}`;
      else hours = `${dateObj.getHours()}`;
      if (dateObj.getMinutes().toString().length < 2) mins = `0${dateObj.getMinutes()}`;
      else mins = `${dateObj.getMinutes()}`;
      return `${hours}:${mins}`;
   }
}
function timeIs(date, format) {
   formatTime(date, format);
}

// Shows time difference between two dates (if no second date, defaults to current)
function timeBetween(date, date2) {
   let then = new Date(date);
   let now = date2 ? date2 : new Date();
   let diffMs = (now - then);
   let days = Math.floor(diffMs / 86400000);
   let hours = Math.floor((diffMs % 86400000) / 3600000);
   let minutes = Math.floor(((diffMs % 86400000) % 3600000) / 60000);
   // 30 days ;)
   let months = Math.floor(days / 30);
   let years = Math.floor(months / 12);
   // Check if it's a negative number, then absolute value everything
   if (Math.sign(diffMs) < 0) {
      days = Math.abs(days);
      hours = Math.abs(hours);
      minutes = Math.abs(minutes);
      months = Math.abs(months);
      years = Math.abs(years);
   }
   if (days == 0) {
      if (hours == 0) return `${minutes} ${minutes == 1 ? "minute" : "minutes"}`;
      else return `${hours} ${hours == 1 ? "hour" : "hours"}`;
   }
   else if (days < 31) return `${days} ${days == 1 ? "day" : "days"}`;
   else if (months < 12) return `about ${months} ${months == 1 ? "month" : "months"}`;
   else return `about ${years} ${years == 1 ? "year" : "years"}`;
}


// Formats an amount of time, in milliseconds - decimalPrecision only works up to thousandths - units entered yMwdhms
function formatTimeAmount(timeMs, units = "yMwdhms", decimalPrecision) {
   let seconds = timeMs / 1000;
   let minutes = seconds / 60;
   let hours = minutes / 60;
   let days = hours / 24;
   let weeks = days / 7;
   let months = weeks / 4.34524;  // Average number of weeks per month
   let years = months / 12;

   let result = "";

   if (years >= 1 && units.includes("y")) {
      result += Math.floor(years) + " year" + (Math.floor(years) !== 1 ? "s " : " ");
   }
   months %= 12;
   if (months >= 1 && units.includes("M")) {
      result += Math.floor(months) + " month" + (Math.floor(months) !== 1 ? "s " : " ");
   }
   weeks %= 4.34524;
   if (weeks >= 1 && units.includes("w")) {
      result += Math.floor(weeks) + " week" + (Math.floor(weeks) !== 1 ? "s " : " ");
   }
   days %= 7;
   if (days >= 1 && units.includes("d")) {
      result += Math.floor(days) + " day" + (Math.floor(days) !== 1 ? "s " : " ");
   }
   hours %= 24;
   if (hours >= 1 && units.includes("h")) {
      result += Math.floor(hours) + " hour" + (Math.floor(hours) !== 1 ? "s " : " ");
   }
   minutes %= 60;
   if (minutes >= 1 && units.includes("m")) {
      result += Math.floor(minutes) + " minute" + (Math.floor(minutes) !== 1 ? "s and " : " and ");
   }
   seconds = timeMs % 60000 / 1000;
   if (units.includes("s")) {
      result += seconds.toFixed(decimalPrecision || 0) + " second" + (seconds !== 1 ? "s" : "");
   }

   return result;
}