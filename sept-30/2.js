let capture;


function setup(){
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width,height);
  capture.hide();
}

function draw(){
  background(255);
  let pixelationLevel = 20;
  let highestPerceivedBrightness = 0;
  let hpbX = 0;
  let hpbY = 0;
  capture.loadPixels();
  for(let y = 0;y<capture.height;y+=pixelationLevel){
    for(let x = 0;x<capture.width;x+=pixelationLevel){
      let i = (y*capture.width+x)*4;
      let r = capture.pixels[i + 0];
      let g = capture.pixels[i + 1];
      let b = capture.pixels[i + 2];
  
      let perceivedBrightness = ((0.3 * r) + (0.59 * g) + (0.11 * b));
      if(perceivedBrightness > highestPerceivedBrightness){
        hpbX = x;
        hpbY = y;
        highestPerceivedBrightness = perceivedBrightness;
      }
    }
  }
  image (capture,0,0,width,height)
  fill(255,0,0);
  noStroke();
  ellipse(hpbX,hpbY,pixelationLevel,pixelationLevel);
}
