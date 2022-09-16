//Collage Machine
//Collect a directory of images. 
//Write a program that uses these to generate collages of images. 
//Include some unpredicability within it so that it generates a different collage each time it runs.

let imgs = [];
let val = 0;

function preload(){
  for(let i = 0;i<14;i++){
    imgs[i] = loadImage(`./assets/art/${i+1}.jpeg`)
  }
}

function setup() {
    createCanvas(1200, 800);
    frameRate(2);
    noLoop();
}

function draw() {
  background(255);
  let randomCount = random(0,15);
  for(let i = 0;i<randomCount;i++){
    imgToBeUsed = random(imgs);
    image(imgToBeUsed,random(50,950),random(50,550),random(100,250),random(100,250));
  }
}

function mouseReleased() {
  val = val + 1;
  if (val % 2 != 0) {
      noLoop();
  } else {
      loop();
  }; 
}