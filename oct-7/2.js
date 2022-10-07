//A comma separated values file is abbreviated as CSV and uses the file extension .csv. 
//When tabs are used, the extension .tsv is  used.

let data;
let results = [];


function preload() {
  data = loadTable("realmadrid1112.csv");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let points = 0;
  for (let i = 307; i < 363; i++) { // the indices for the season 2011 to 2012
    if(data.get(i,4) == 1){
      let opponent = data.get(i,7);
      let goalsScored = data.get(i, 15);
      let goalsConceded = data.get(i, 16);
      let result = data.get(i, 17); //0 - win, 1 - draw, 2 - lose
      if(result == 0){
        points+=3;
      }else if(result == 1){
        points+=1;
      }
      results.push([opponent,goalsScored,goalsConceded,result,points]);
    }
  }
}

function draw() {
  background(255);
  stroke(245, 189, 2);

  //draw border lines
  line(80,height-80,width-40,height-80);
  line(80,40,width-40,40);
  line(80,40,80,height-80);
  line(width-40,40,width-40,height-80);

  //labels for axes
  textAlign(CENTER);
  textFont('Graphik');
  textSize(24);
  fill(245,189,2);
  text('Matchday',width/2,height-40);
  text('Points',40,height/2);
  text('Real Madrid in 2011-2012 season',width/2,25);


  for (let i = 0; i < results.length; i++) {
    let x = map(i, 0, results.length-1, 80, width-40); 
    let y = map(results[i][4], 0, 100, height-80, 40);

    if(results[i][3] == 0){
      fill(68,214,44);
      noStroke();
      ellipse(x, y,10,10);
    }else if(results[i][3] == 1){
      fill(255,173,0);
      noStroke();
      ellipse(x, y,10,10);
    }else{
      fill(210,39,48);
      noStroke();
      ellipse(x, y,10,10);
    }

    if (dist (x,y,mouseX,mouseY) < 10){
      textAlign(CENTER);
      textFont('Graphik');
      textSize(24);
      text(results[i][4],x,y+40);
      textSize(36);
      text(results[i][0]+' '+results[i][1]+'-'+results[i][2],width/2,3*height/4)
      textSize(24);
      text('Matchday ' + (i+1),width/2,((3*height)/4)+40);
    }

  }

}

