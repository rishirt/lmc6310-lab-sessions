//convert to grayscale based on brightness of pixels.

//Color brightness is determined by the following formula:
//((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
//Source : https://www.w3.org/TR/AERT/#color-contrast
//Reference : http://learningprocessing.com/examples/chp16/example-16-08-BrightnessMirror

let img; 

let size = 10; 


function preload() {
  img = loadImage('./assets/real-madrid.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  img.resize(windowWidth, windowHeight);
  img.loadPixels(); 
}

function draw() {
  let size = floor(map(mouseX, 0, width, 10, 50)); 

  for (let starty = 0; starty < img.height; starty++) { 
    for (let startx = 0; startx < img.width; startx++) {
    let index = (startx + starty * img.width) * 4;
    let r = img.pixels[index + 0];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    let perceivedBrightness = ((0.3 * r) + (0.59 * g) + (0.11 * b));

    noStroke(); 
    fill(perceivedBrightness);
    rect(startx, starty, size, size);

    startx = startx + size -1;
    }
    starty = starty + size -1;
  }
}