//inverting colors
let img;

function preload() {
  img = loadImage("./assets/real-madrid.png");
}

function setup() {
  createCanvas(1200, 800);
  img.resize(1200,800);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

      let originalColor = img.get(x, y);


      let r = green(originalColor); // 255 - red(originalColor)
      let g = red(originalColor); //255 - green(originalColor)
      let b = 255 - blue(originalColor);
      let outputColor = color(r, g, b);

      img.set(x, y, outputColor);
    }
  }
  img.updatePixels();
}

function draw() {
  image(img, 0, 0);
}