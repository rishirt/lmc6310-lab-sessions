function setup() {
    createCanvas(800, 800);
    noLoop();
  }
  
function draw() {
    drawMondrian(30, 30, width - 30, height-30, 2);
  }
  
function drawMondrian(x1, y1, x2, y2, noOfIterations) {
    let c = [color('red'), color('blue'), color('orange'), color('yellow'), color('pink'), color('green')];
    let sw = 2;
    if (noOfIterations == 0){
      fill(random(c));
      strokeWeight(sw);
      rect(x1, y1, x2-x1-sw, y2-y1-sw);
    }else  {
      let i = random(x1,x2);
      let j = random(y1,y2);
      
      drawMondrian(x1, y1, i, j, noOfIterations-1); // we use recursion here 
      drawMondrian(i, y1, x2, j, noOfIterations-1);
      drawMondrian(x1, j, i, y2, noOfIterations-1);
      drawMondrian(i, j, x2, y2, noOfIterations-1);
    }
}