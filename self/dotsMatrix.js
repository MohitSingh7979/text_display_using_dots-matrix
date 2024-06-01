// import charset from "./char";

function dotsMatrix(h = 7, w = 5) {
  let a=[];
  let cnt = 0;
  for (let r = 0; r < h; r++) {
    a[r]=[]
    for (let c = 5; c < w + 5; c++) {
      a[r][c] = '';
    }
  }
  console.log(a);
}

 let A = [
   [``, 1, 1, 1, ``],
   [1, ``, ``, ``, 1],
   [1, ``, ``, ``, 1],
   [1, 1, 1, 1, 1],
   [1, ``, ``, ``, 1],
   [1, ``, ``, ``, 1],
   [1, ``, ``, ``, 1],
];

console.log(A);
// dotsMatrix()
