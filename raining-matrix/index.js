// The window.onload event ensures the function runs after the page has fully loaded.
window.onload = function () {
  // Get the canvas element and its 2D drawing context.
  let ctx = document.getElementById("matrix"),
    c = ctx.getContext("2d"),
    w,
    h; // Declare width and height variables for the canvas.

  // Adjust the canvas size to fit the window.
  fitCanvas();
  // Create an array of characters to use in the particle effect.
  let chars = "The quick brown fox jumps over the lazy dog".split("");

  // Define a Particle class to represent each moving character.
  class Particle {
    constructor(x, y, char, col, hasTail, lightness, speed) {
      this.x = x; // x-coordinate
      this.y = y; // y-coordinate
      this.val = char; // Character value
      this.col = col; // Color of the character
      if (speed) {
        this.speed = speed; // Speed if provided
        this.light = lightness; // Lightness if provided
      } else {
        this.speed = Math.random(); // Random speed if not provided
        this.light = Math.random() * 50 + 25; // Random lightness if not provided
      }
      if (hasTail) {
        this.tl = Math.floor(Math.random() * 17) + 3; // Tail length
        this.tail = []; // Initialize the tail array
        for (let i = 1, len = this.tl; i < len; i++) {
          // Create tail particles
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

    // Method to move the particle.
    move() {
      this.y += this.speed; // Move down by speed
      if (this.y >= h) {
        this.y -= h; // Wrap around if it goes off the bottom
      }
    }

    // Method to draw the particle.
    show() {
      c.font = "10px serif"; // Set font style
      c.fillStyle = this.col; // Set color
      c.fillText(this.val, this.x, this.y); // Draw the character

      if (this.tail) {
        for (let i = 0, len = this.tail.length; i < len; i++) {
          this.tail[i].move(); // Move tail particles
          this.tail[i].show(); // Draw tail particles
        }
      }
    }
  }

  // Initialize an array to hold all particles.
  let p = [];
  for (let i = 0, len = 1; i < len; i++) {
    p.push(
      new Particle(
        Math.random() * w, // Random x position
        Math.random() * h, // Random y position
        chars[Math.floor(Math.random() * chars.length)], // Random character
        "rgb(28, 161, 82)", // Green color
        true // Has tail
      )
    );
  }

  // Function to clear the canvas and redraw all particles.
  function draw() {
    c.clearRect(0, 0, w, h); // Clear the canvas
    for (let i = 0, len = p.length; i < len; i++) {
      p[i].move(); // Move each particle
      p[i].show(); // Draw each particle
    }
  }

  // Function to set the canvas size to the window size.
  function fitCanvas() {
    w = ctx.width = window.innerWidth; // Set width
    h = ctx.height = window.innerHeight; // Set height
  }

  // Animation loop function.
  function loop() {
    fitCanvas(); // Adjust canvas size
    draw(); // Draw particles
    window.requestAnimationFrame(loop); // Request the next frame
  }
  
  // Start the animation loop.
  window.requestAnimationFrame(loop);
};
