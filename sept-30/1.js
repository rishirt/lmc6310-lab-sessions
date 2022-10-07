let capture;

function setup() {
  createCanvas(displayWidth, displayHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, displayWidth, displayHeight);
}





