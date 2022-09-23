let sounds = [];
let characters = 'abcdefghijklmnopqrstuvwxyz'.split("");

function preload(){
  for(let i=0;i<26;i++){
    sounds[i] = loadSound(`./sounds/${i+1}.mp3`);
  }
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    console.log(sounds);
    console.log(characters);
}

function draw() {
    background(135,0,234);
}

function keyReleased(){
  let index = characters.indexOf(key.toLowerCase());
  sounds[index].play();
  drawCircle();
}

function drawCircle(){
  let circleSize = 250;
  let randomX = random(circleSize,width-circleSize);
  let randomY = random(circleSize,height-circleSize);
  fill(255);
  ellipse(randomX,randomY,circleSize,circleSize);
}