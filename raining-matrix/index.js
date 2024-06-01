window.onload = function () {
  let ctx = document.getElementById("matrix"),
    c = ctx.getContext("2d"),
    w,
    h;
  fitCanvas();

  let chars = "gsagkdagjksahgak;shgksahg".split("");

  class Particle {
    constructor(x, y, char, col, hasTail, lightness, speed) {
      this.x = x;
      this.y = y;
      this.val = char;
      this.col = col;
      if (speed) {
        this.speed = speed;
        this.light = lightness;
      } else {
        this.speed = Math.random();
        this.light = Math.random() * 50 + 25;
      }
      if (hasTail) {
        this.tl = Math.floor(Math.random() * 17) + 3;
        this.tail = [];
        for (let i = 1, len = this.tl; i < len; i++) {
          this.tail.push(
            new Particle(
              this.x,
              this.y - i * 10,
              chars[Math.floor(Math.random() * chars.length)],
              `hsl(135, 100%, ${this.light}%)`,
              false,
              this.lightness,
              this.speed
            )
          );
        }
      }
    }
    move() {
      this.y += this.speed;
      if (this.y >= h) {
        this.y -= h;
      }
    }

    show() {
      c.font = "10px serif";
      c.fillStyle = this.col;
      c.fillText(this.val, this.x, this.y);

      if (this.tail) {
        for (let i = 0, len = this.tail.length; i < len; i++) {
          this.tail[i].move();
          this.tail[i].show();
        }
      }
    }
  }

  let p = [];
  for (let i = 0, len = 500; i < len; i++) {
    p.push(
      new Particle(
        Math.random() * w,
        Math.random() * h,
        chars[Math.floor(Math.random() * chars.length)],
        "rgb(28, 161, 82)",
        true
      )
    );
  }

  function draw() {
    c.clearRect(0, 0, w, h);
    for (let i = 0, len = p.length; i < len; i++) {
      p[i].move();
      p[i].show();
    }
  }

  function fitCanvas() {
    w = ctx.width = window.innerWidth;
    h = ctx.height = window.innerHeight;
  }

  function loop() {
    fitCanvas();
    draw();
    window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);
};
