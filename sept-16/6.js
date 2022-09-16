//Random Dot Dithering
//Load an image into memory and fetch the brightness of a pixel in a random location. 
//Generate a random number between 0 and 255; 
//if it is greater than the brightness of the pixel, 
//draw a black dot at a corresponding location on the canvas. 
//Repeat as the picture emerges.
let img;


function preload(){
  img = loadImage('./assets/cat.jpeg');
}

function setup() {
  createCanvas(1200, 800);
  pixelDensity(1);
}

function draw() {

  let x = floor(random(img.width));
  let y = floor(random(img.height));

  img.loadPixels();
  let c = img.get(x, y);
  let r = red(c);
  let b = blue(c);
  let g = green(c);
  let perceivedBrightness = ((0.3 * r) + (0.59 * g) + (0.11 * b));
  let randomInt = random(0,255);

  if(perceivedBrightness<randomInt){
    let white = color(255);
    img.set(x,y,white);
    img.updatePixels();
  }else{
    let black = color(0);
    img.set(x,y,black);
    img.updatePixels();
  }

  imageMode(CENTER);
  image(img, 600, 400, img.width,img.height);
}
