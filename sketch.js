var space;
var rocket;
var coin;
var coin_rolling;
var score=0;
var bird;
var PLAY=1;
var END=0;
var gameState=1;
var gameOver;


/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

function preload()
{
 spaceImage=loadImage("space.jpg");
 rocketImage=loadImage("rocket.png");
 coinImage=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");
 birdImage=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png")
gameOverImage=loadImage("gameOver.png");
}

function setup() {
	createCanvas(900,600);

	space=createSprite(1000,120);
    space.addImage("space",spaceImage);
	space.scale=1.7;
	space.velocityX=-7.5;
	
	rocket=createSprite(120,300);
	rocket.addImage("rocket",rocketImage);
	rocket.scale=0.18;

	gameOver=createSprite(450,300);
	gameOver.addImage("gameOver",gameOverImage);
	gameOver.scale=4;


	/*coin=createSprite(300,300);
	coin.addAnimation("coin",coinImage);
	coin.scale=1;
	coin.velocityX=-7.5;*/

coingroup= new Group();
birdgroup= new Group();


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}
function draw() {
  //rectMode(CENTER);
  background(0);
  rocket.y = World.mouseY;

  coin();
  bird();

  if(gameState===PLAY){
  if(space.x<0){
	space.x=width/2
  }
if(coingroup.isTouching(rocket)){
	score=score+15;
	coins.destroy();

}
gameOver.visible=false;
if(birdgroup.isTouching(rocket)){
	birdgroup.destroyEach();
	rocket.destroy();
	birds.setVelocityX=0;
	gameState=END;

}
  }
  if(gameState===END){
	space.velocityX=0;
	coins.velocityX=0;
	coingroup.visible=false;
	birdgroup.visible=false;
	gameOver.visible=true;
	birdgroup.destroyEach();
	coingroup.destroyEach();
	
  }
  drawSprites();
  stroke("black");
  strokeWeight(3);
  textSize(20);
  fill("white");
  text("Move the mouse to collect coins",50,50)

  stroke("black");
  strokeWeight(2);
  textSize(20);
  fill("black");
  text("Score: "+ score,600,50)
  
}
function coin(){
	if(frameCount%90===0){
	coins=createSprite(900,Math.round(random(800,100)))
	coins.addAnimation("coin",coinImage);
	coins.velocityX=-7.5;
	coins.scale=0.6;
	coingroup.add(coins);
	}
}
function bird(){
	if(frameCount%90===0){
	birds=createSprite(900,Math.round(random(600,300)))
	birds.addAnimation("bird",birdImage);
	birds.velocityX=-12;
	birds.scale=0.6;
	birdgroup.add(birds);
	}
}
