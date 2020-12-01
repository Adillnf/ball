

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,gole1,gole2,gole3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(400,650,1000,10)
	ground.shapeColor=("yellow");

	gole1 = createSprite(600,630,200,20);
	gole1.shapeColor=("red");

	gole2 = createSprite(500,590,20,100);
	gole2.shapeColor=("red");

	gole3 = createSprite(700,590,20,100);
	gole3.shapeColor=("red");



	ball=createSprite(50, 400, 100,100);
	ball.scale=0.2
    ball.velocityY = 8;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world,ball);

	

	Engine.run(engine);
	

}
	

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



