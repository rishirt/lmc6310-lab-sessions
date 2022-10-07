let cities;
let positions = [];

function preload(){
  cities = loadTable('cities.csv',"header");
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  noStroke();
  for(let i = 0;i<cities.getRowCount();i++){
    let lat = cities.getNum(i,"lat");
    let lng = cities.getNum(i,"lng");
    setXY(lat,lng);
  }
}


function draw(){
  fill(0);
  positions.forEach((i)=>{
    ellipse(i[0],i[1],2,2);
  })

}

function setXY(lat, lng) {
  let x = map(lng,-180,180,0,width);
  let y = map(lat,90,-90,0,height);
  positions.push([x,y]);
}

