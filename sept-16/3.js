//Subsample and Downsample
//Write a program that pixelates an image to produce a low-resolution version. 
//Begin by subsampling the image (destination pixels are selected from the original). 
//Then, downsample the image (destination pixels are local averages).

let img; // creates image variable

let size = 10 // level of pixelation.



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
    let index = (startx + (starty * img.width)) * 4;
    let r = img.pixels[index + 0];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    noStroke(); 
    fill(r,g,b);
    rect(startx, starty, size, size);

    startx = startx + size -1 
    }
    starty = starty + size -1 
  }
}