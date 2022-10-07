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
  capture.loadPixels();
  for(let y = 0;y<capture.height;y+=pixelationLevel){
    for(let x = 0;x<capture.width;x+=pixelationLevel){
      let i = (y*capture.width+x)*4;
      let r = capture.pixels[i + 0];
      let g = capture.pixels[i + 1];
      let b = capture.pixels[i + 2];
  
      let perceivedBrightness = ((0.3 * r) + (0.59 * g) + (0.11 * b));
      let dia = map(perceivedBrightness,0,255,pixelationLevel,0);
      fill(255,0,0);
      noStroke();
      ellipse(x,y,dia,dia)
    }
  }
}
