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

function charGrid(strides) {
  for (let stride /* number in decimal */ of strides) {
    let ln = "";
    for (let i = 0; i < 5; i++) {
      let digit = stride & 1; /* right most digit if 1 */
      stride >>= 1; /* right shift */
      ln += digit ? "o" : " ";
    }
    // console.log(ln);
    /* console.log(ln.split("")); */ /* taking char,converting into array */
    console.log(ln.split("").reverse().join("")); /* converting array into string */
  }
}





/* A
00100
01010
10001
11111
10001
10001
10001
 */
const aStrides /* width of bitmap */ = [
  0b00100, 0b01010, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001,
];
charGrid(aStrides);

/* B
11110
10001
11110
10001
10001
10001
11110
 */
const bStride = [0b11110, 0b10001, 0b11110, 0b10001, 0b10001, 0b10001, 0b11110];
console.log("");
charGrid(bStride);
/* C
01110
10001
10000
10000
10000
10001
01110
 */

/* D
1 1 1 0 0
1 0 0 1 0
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
1 0 0 1 0
1 1 1 0 0
*/
