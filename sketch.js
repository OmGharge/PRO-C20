var cat,catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;
var cat2;
var mouse;
var bg;

function preload(){
  bgImg = loadImage("garden.png");
  catImg1 = loadAnimation("cat1.png");
  mouseImg1 = loadAnimation("mouse1.png")
  catImg2 = loadAnimation("cat2.png","cat3.png");
  mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
  catImg3 = loadImage("cat4.png");
  mouseImg3 = loadImage("mouse4.png");

}
function setup(){
 createCanvas(600,600);
 bg  = createSprite(300,250);
 bg.addImage("background",bgImg);
 cat = createSprite(500,500,50,50);
 cat.addAnimation("cat",catImg1);
 cat.scale=0.1;
 //cat.debug = true;
 mouse = createSprite(150,500,50,50);
 mouse.addAnimation("mouse",mouseImg1)
 mouse.scale = 0.1;
 //mouse.debug = true;
 
}
function draw(){
  background(0);
 
  if(cat.x - mouse.x < (cat.width - mouse.width)){
  cat3 = createSprite(250,500);
  cat3.addImage("cat",catImg3);
  cat3.scale = 0.1;
  cat.destroy();
  cat.velocityX = 0;
  mouse.addImage("mouse",mouseImg3);
}
   drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cat.addAnimation("cat",catImg2);
    cat.velocityX = -2;
    cat.frameDelay = 25;
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mosueTeasing");
    mouse.framDelay = 25;
    }
  }
  

