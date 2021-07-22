var seaImage;
var ships;


function preload(){
   seaImage = loadImage("sea.png");
   ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
function setup(){
  createCanvas(500,500);

  sea = createSprite(200,200,20,200);
    sea.addImage ("seaImage",seaImage);
   sea.scale = 0.2;
  

  
  ship = createSprite(200,200,80,100);
ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
ship.scale = 0.3;
}






function draw() {

  sea.velocityX = 6;

  if (sea.x >400) { sea.x = sea.width/+26} 
 
  drawSprites();
}