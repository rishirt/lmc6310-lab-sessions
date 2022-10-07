let seaLevelData;
let meanSeaLevels = [];
let dates = [];
let minSeaLevel = 0;
let maxSeaLevel = 0;


function preload(){
  seaLevelData = loadTable('sealevel.csv','header');
}

function setup() {
  createCanvas(1200,800);
  for(let i = 0; i<seaLevelData.getRowCount();i++){
    let date = seaLevelData.get(i,0);
    let seaLevel = seaLevelData.get(i,1);
    dates.push(date);
    meanSeaLevels.push(seaLevel);
  }
  maxSeaLevel = Math.max(...meanSeaLevels);
  minSeaLevel = Math.min(...meanSeaLevels);

}

function draw() {
  background(220);

  let radius = width/8;
  let angle = 360/seaLevelData.getRowCount();
  for (let i = 0;i<meanSeaLevels.length;i++){
    let length = map(meanSeaLevels[i],minSeaLevel,maxSeaLevel,0,200);
    let pointX = (length+radius)*cos(radians(angle*i)) + 600;
    let pointY = (length+radius)*sin(radians(angle*i)) + 400;
    let lineX = radius*cos(radians(angle*i)) + width/2;
    let lineY = radius*sin(radians(angle*i)) + height/2;

    if(i%12 == 0){
      stroke('blue');
      strokeWeight(1);

    }else{
      stroke('black');
      strokeWeight(0.25);
    }
    line(lineX,lineY,pointX,pointY);

    let distance = dist(mouseX,mouseY,pointX,pointY);
    if(distance < 4){
      fill('red');
      noStroke();
      circle(pointX,pointY,10);
      fill('orange');
      textAlign(CENTER);
      textSize(16);
      text(dates[i],600,400);
      rectMode(CENTER);
      rect(600,415,40,5);
      textSize(32);
      text(meanSeaLevels[i],600,450);
    }else {
      fill('blue');
      noStroke();
      circle(pointX,pointY,4);
    }
  }
}





