let capture;
let captureButton;
let captures = [];
// let lastCaptureTime = millis();

function setup(){
  createCanvas(600,400);
  background(25);
  capture = createCapture(VIDEO);
  capture.hide();
  captureButton = createButton('SNAP');
  captureButton.mousePressed(snapPicture);
  lastCaptureTime = millis();
}

function draw(){
  // if(millis()-lastCaptureTime > 500){
  //   lastCaptureTime = millis();
  //   snapPicture();
  // }
  let w = 120;
  let h = 80;
  let x = 0;
  let y = 0;
  for(let i = 0; i<captures.length;i++){
    image(captures[i],x,y,w,h);
    x = x+w;
    if(x>width){
      x = 0;
      y = y+h;
    }
  }

  if(y==(height-h) && x==(width-w)){
    captures.shift();
  }
}

function snapPicture() {
  captures.push(capture.get());
}