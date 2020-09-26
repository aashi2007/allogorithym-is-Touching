var moveBall,fixBall;

function setup() {
  createCanvas(800,400);
  moveBall= createSprite(400, 200, 100, 50);
  moveBall.shapeColor="green";
  fixBall=createSprite(200, 200, 100, 50);
  fixBall.shapeColor="green";
  moveBall.debug=true;
  fixBall.debug=true;
}

function draw() {
  background(255,255,255); 
  text("moveBall"+moveBall.x,100,20); 
  text("fixBall"+fixBall.x,100, 100);
  moveBall.x=World.mouseX;
  moveBall.y=World.mouseY;
  if(moveBall.x-fixBall.x<moveBall.width/2+fixBall.width/2
    &&fixBall.x-moveBall.x<moveBall.width/2+fixBall.width/2
    &&moveBall.y-fixBall.y<moveBall.height/2+fixBall.height/2
    &&fixBall.y-moveBall.y<moveBall.height/2+fixBall.height/2){
     moveBall.shapeColor="red";
     fixBall.shapeColor="red";
  }
  else{
    moveBall.shapeColor="green";
    fixBall.shapeColor="green";
  }
  drawSprites();
}