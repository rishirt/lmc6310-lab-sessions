let haiku = "A world of dew, And within every dewdrop, A world of struggle."
let haikuLines = haiku.split(',');
let counter = 0;
let font;

function preload(){
    font = loadFont("./assets/permanentMarker.ttf");
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    noLoop();
}

function draw(counter){
    background(random(255));
    for(let i = 0;i<=counter;i++){
        let displayText = haikuLines[i]; 
        let fontSize = random(32,64);
        let bbox = font.textBounds(displayText,0,0,fontSize);  
        textSize(fontSize);
        fill(random(100,150));
        let x = random(displayWidth-(100+bbox.w));
        let y = 2*(100+(100*i));
        text(displayText,x,y);
    }
}

function mousePressed(){
    if(counter<haikuLines.length){
        draw(counter);
        counter++;
    }else{
        counter=0;
    }
}
