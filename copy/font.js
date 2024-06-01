var grid = reset();
const canvas = document.getElementById("canvas");
const CELL_WIDTH = 60,
  CANVAS_WIDTH = 360,
  CANVAS_HEIGHT = 480;
var ctx = canvas.getContext("2d");
function reset() {
  return [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
}
function draw(grid) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let y = 0;
  for (let row of grid) {
    let x = 0;
    for (let col of row) {
      ctx.beginPath();
      ctx.rect(x, y, CELL_WIDTH, CELL_WIDTH);
      if (col) {
        ctx.fillStyle = "#0af";
        ctx.fill();
      }
      ctx.stroke();
      x += CELL_WIDTH;
    }
    y += CELL_WIDTH;
  }
}
draw(grid);
const loopThrough = () => {
  const chars = Object.values(font);
  let index = 0;

  return setInterval(() => {
    if (index < chars.length) {
      draw(chars[index]);
      index = (index + 1) % chars.length;
    }
  }, 500);
};
const showLetter = async function (char) {
  if (Array.isArray(font[char])) {
    for (let i = 0; i < (font[char][0] || []).length; i++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          let rowIndex = 0;
          grid.forEach((row) => {
            row.splice(0, 1);
            row.push(font[char][rowIndex][i]);
            rowIndex += 1;
          }); // remove left-most column
          draw(grid);
          resolve();
        }, 200);
      });
    }
  }
};
const showWord = async function (word) {
  grid = reset();
  word = (word || "Yo!").toString().toUpperCase();
  for (let char of word) {
    await showLetter(char);
  }
};
async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const word = form.querySelector("[name=word]").value;
  form
    .querySelectorAll("input, button")
    .forEach((elem) => elem.setAttribute("disabled", "disabled"));
  await showWord(word);
  form
    .querySelectorAll("input, button")
    .forEach((elem) => elem.removeAttribute("disabled"));
  return false;
}
(async () => await showWord())();
