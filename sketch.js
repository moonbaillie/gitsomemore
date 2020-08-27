var ball = {
  x : 300,
  y : 200,
  xspeed : 4,
  yspeed : -3,
}
  
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  move();
  bounce();
  display();
  }

//module 1
function move() {
   ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
  
}
  
//module 2
function bounce() {
    if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }  
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
    
  }
}
  
//module 3
function display() {
  stroke (255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
  }
  