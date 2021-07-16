var path,boy,leftB,rightB,pathImg,boyImg;

function preload(){
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
 
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);

  leftB=createSprite(0,0,100,800);
  leftB.visible=false;

  rightB=createSprite(0,0,100,800);
  rightB.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;

  boy.x=mouseX;

  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftB);
  boy.collide(rightB);

  if(path.y>400){
    path.y=height/2;
  }

  drawSprites();
}
