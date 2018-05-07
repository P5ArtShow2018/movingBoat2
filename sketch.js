
function preload(){
  
  BoatHorn = loadSound ('Assets/Horn.mp3')
} 

function setup() {
  createCanvas(1000,1000);
BoatHorn.play();
}

function draw() {
  
}
  var x = 20
draw = function(){
  background(177,226,239);
  fill(1);
  rect(x + 280,300,10,650);
  noStroke();
  fill(29,47,86);
  rect(0 ,700,1000,300);
  fill(240);
  ellipse(x + 280,700,300,100);
  rect(x + 132,650,296,60);
  fill(120);
  ellipse(x + 280,700,30,40);
  ellipse(x + 235,700,30,40);
  ellipse(x + 325,700,30,40);
  ellipse(x + 190,700,30,40);
  ellipse(x + 370,700,30,40);
  triangle(x + 280, 300, x + 280, 500, x + 230, 350);
 
  x = x + 5

}