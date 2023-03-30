function nonono(input) {
   // From here -> https://faculty.kutztown.edu/schaeffe/Tutorials/General/LargeNumbers.html
   let thing = {
      1: ["un", "deci", "centi", "mille"],
      2: ["duo", "(ms)viginti"],
      3: ["tre(s)"],
      4: ["quattuor"],
      5: ["quinqua"],
      6: ["se(sx)"],
      7: ["septe(mn)"],
      8: ["octo", "(mx)octoginta", "(mx)octingenti)"],
      9: ["nove(mn)"]
   }
   let ex = expo(input);
   let exp = ex.split("e+")[1]
   let expon = Math.floor((parseInt(exp) - 3) / 3);
   let textstring = "";
   console.log(ex)
   for (i in expon.toString()) {
      let charecter = expon.toString().charAt(i);
      // console.log(charecter, thing[charecter], expon.toString().length - 1 - i)
      // textstring = textstring + thing[charecter][expon.toString().length - 1 - i];
      // console.log(charecter, expon.toString().length - 1 - i, thing[charecter][expon.toString().length - i]);
   }
   let result = textstring + "llion";
   return result;

   function expo(x, f) {
      return Number.parseFloat(x).toExponential(f);
   }
}

// console.log(nonono(100000000000000000000000000000000000000000000000000000000000000000000000000));
console.log(nonono(1*10^2484));
// console.log(toWord(100000000000000000000000000000000000000000000000000000000000000000000000000));



// Add this when it's double checked (or just get the dynamic one working)

// if (findTerrain(94)) { return returnNum(94, (type === "short" ? "Tri" : "Trigintillion")); }
// if (findTerrain(97)) { return returnNum(97, (type === "short" ? "Tri" : "Trigintillion")); }
// if (findTerrain(100)) { return returnNum(100, (type === "short" ? "Tri" : "Trigintillion")); }
// if (findTerrain(103)) { return returnNum(103, (type === "short" ? "Tri" : "Untrigintillion")); }
// if (findTerrain(106)) { return returnNum(106, (type === "short" ? "Tri" : "Dotrigintillion")); }
// if (findTerrain(109)) { return returnNum(109, (type === "short" ? "Tri" : "Tretrigintillion")); }
// if (findTerrain(112)) { return returnNum(112, (type === "short" ? "Tri" : "Quattuortrigintillion")); }
// if (findTerrain(115)) { return returnNum(115, (type === "short" ? "Tri" : "Quintrigintillion")); }
// if (findTerrain(118)) { return returnNum(118, (type === "short" ? "Tri" : "Sextrigintillion")); }
// if (findTerrain(121)) { return returnNum(121, (type === "short" ? "Tri" : "Septentrigintillion")); }
// if (findTerrain(124)) { return returnNum(124, (type === "short" ? "Tri" : "Octotrigintillion")); }
// if (findTerrain(127)) { return returnNum(127, (type === "short" ? "Tri" : "Novemtrigintillion")); }







// ======================================
// Ideas & Plans
// ======================================
/*
// ===== Library Upkeep =====
// Put up minified version of library
// Save old versions of library on site
// Only package used features for link

// ===== Numbers to words =====
// Add support for long number scale
// Add small word numbers (thousands, hundreds)
// Add complete word number (three thousans five hundred seven)
// Dynamically generate numbers

// ===== General =====
// Handle decimals better

// ===== Time =====
// Don't allow days in the future (or do "days until")
// Use local not UTC time

// ===== Ideas =====
// Numbers uptick animation
*/