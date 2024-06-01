import strides from "./data.mjs";

/*
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
*/
/*
100
001// and
000//total // even if 0

10001
00001
00001 // total odd if 1
*/

// function charGrid(strides) {
//   for (let stride /* number in decimal */ of strides) {
//     let ln = "";
//     for (let i = 0; i < 5; i++) {
//       let digit = stride & 1; /* right most digit if 1 */
//       stride >>= 1; /* right shift */
//       ln += digit ? "o" : " ";
//     }
//     // console.log(ln);
//     /* console.log(ln.split("")); */ /* taking char,converting into array */
//     console.log(ln.split("").reverse().join("")); /* converting array into string */
//   }
// }

function getGridLine(stride) {
  let binaryStr = "";
  for (let i = 0; i < 5; i++) {
    let bit = stride & 1; // Extract the rightmost bit
    binaryStr = (bit ? "o" : " ") + binaryStr; // Prepend character based on bit
    stride >>= 1; // Right shift to process the next bit
  }
  return binaryStr;
}

function charGrid(stridesArray) {
  for (let i = 0; i < 7; i += 1) {
    let strLn = "";
    for (const strides of stridesArray) {
      strLn += " " + getGridLine(strides[i]);
    }
    console.log(strLn);
  }
}

function displayName(name) {
  let chars = name.split("");
  let charStrides = chars.map((char) => strides[char]);
  charGrid(charStrides);
}

displayName("ABAB");
