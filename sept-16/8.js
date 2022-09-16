//sepia filter
//https://stackoverflow.com/questions/1061093/how-is-a-sepia-tone-created
let img;

function preload() {
  img = loadImage("./assets/real-madrid.png");
}

function setup() {
  createCanvas(1200, 800);
  img.resize(1200,800);
  img.loadPixels();

  for (let starty = 0; starty < img.height; starty++) { 
    for (let startx = 0; startx < img.width; startx++) {
    let index = (startx + starty * img.width) * 4;
    let r = img.pixels[index + 0];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    let sepiaR = (r * 0.393) + (g * 0.769) + (b * 0.189);
    let sepiaG = (r * 0.349) + (g * 0.686) + (b * 0.168);
    let sepiaB = (r * 0.272) + (g * 0.534) + (b * 0.131);

    let outputColor = color(sepiaR, sepiaG, sepiaB);
    img.set(startx, starty, outputColor);
    }
  }
  img.updatePixels();
}

function draw() {
  image(img, 0, 0);
}