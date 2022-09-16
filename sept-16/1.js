let img;

function preload(){
  img = loadImage('./assets/art.jpeg'); 
  //loading assets like images, videos and audio files using the preload function will 
  //ensure that the rest of the program does not run until all the assets are loaded.
}

function setup() {
    createCanvas(1200, 800);
}

function draw() {
    background(255);
    image(img,0,0,mouseX,mouseY);
}