//Color of a Pixel - 
//Display an image. 
//Create an interactive system that continually fetches the color of the pixel 
//under the mouse as it passes over this image. 
//Use this color to fill a shape drawn to the screen as the mouse is moved around.

let img;

function preload(){
  img = loadImage('./assets/real-madrid.png');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw(){
  image(img,0,0);
  let c = img.get(mouseX, mouseY);
  stroke(255, 204, 0);
  strokeWeight(4);
  fill(c);
  ellipse(constrain(mouseX, 0, width),constrain(mouseY, 0, height),25,25);
  strokeWeight(1);
  stroke(0);
  fill(0);
  text(`${c}`, constrain(mouseX, 0, width), constrain(mouseY, 0, height));

}
