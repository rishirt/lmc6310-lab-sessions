let capture;
let poseNet;
let poses = [];
let vertices = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  poseNet = ml5.poseNet(capture, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });
  capture.hide();
  background(0);
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
    tint(0, 153, 204, 126);
    image(capture,0,0,width,height);
    drawNose();

}


function drawNose()  {
  console.log(poses);

    for (let i = 0; i < poses.length; i++) {
        
        let pose = poses[i].pose;
        let nose = pose.keypoints[0];
        if(nose.score > 0.2){
            // vertices.push(nose.position.x);
            // vertices.push(nose.position.y);
            fill(255,0,0);
            noStroke();
            ellipse(nose.position.x, nose.position.y, 10, 10);
        }
    }

}



