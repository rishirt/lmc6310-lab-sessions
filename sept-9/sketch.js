const adj1 = ["spirally", "discontinuous","positive","negative","undefined","infinite","large","octahedral"];
const n1 = ["variable", "expression","coefficient","constant","value","exponent", "slope", "line","polynomial","plot","function", "term","table", "area","volume"];
const v1 = ["plots","solves","evaluates","simplifies","cancels","generates","iterates","triangulates","finds"];
const adj2 = ["periodic","tidal","scattered","shaded", "full","parallel","reflecting","translated","polar","round","smooth","small"]
const n2 = ["crescent","void", "star", "circle","solution","cardiod","curve","spiral","fractal"]

function setup() { 
  createCanvas(displayWidth, displayHeight);
  noLoop();
} 

function draw() { 
  background(random(255),random(255),random(255));
  let rnd_adjective = random(adj1);
  let rnd_noun = random(n1);
  let rnd_verb = random(v1);
  let rnd_adj2 = random(adj2);
  let rnd_noun2 =random(n2);
  textAlign("RIGHT");
  textSize(random(32,64));
  text("the",random(displayWidth-100),100);
  textSize(random(32,64));
  text(rnd_adjective,random(displayWidth-100),200);
  textSize(random(32,64));
  text(rnd_noun,random(displayWidth-100),300);
  textSize(random(32,64));
  text(rnd_verb,random(displayWidth-100),400);
  textSize(random(32,64));
  text('the',random(displayWidth-100),500)
  textSize(random(32,64));
  text(rnd_adj2,random(displayWidth-100),600);
  textSize(random(32,48));
  text(rnd_noun2,random(displayWidth-100),700);
}

function mousePressed(){
 draw();
}