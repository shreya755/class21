var fixedrect,movingrect
var gb1,gb2,gb3,gb4

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(400,200,80,30)
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
  gb1=createSprite(100,100,50,50)
  gb2=createSprite(200,100,50,50)
  gb3=createSprite(300,100,50,50)
  gb4=createSprite(400,100,50,50)
  gb1.shapeColor="green"
  gb2.shapeColor="green"
  gb3.shapeColor="green"
  gb4.shapeColor="green"

}

function draw() {
  background(0); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY 
 if (isTouching(gb3,movingrect)){
  movingrect.shapeColor="red"
  gb3.shapeColor="red"

}else{
  movingrect.shapeColor="green"
gb3.shapeColor="green"
}


 
  drawSprites();

}

