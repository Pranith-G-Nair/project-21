
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,left,right

function preload()
{
	
}

function setup() {
	createCanvas(1302, 600);


	engine = Engine.create();
	world = engine.world;
	var ball_option=
	{
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
		ball=Matter.Bodies.circle(12,12,30,ball_option)
		World.add(world,ball)
		ground=new Ground(651,580,1302,10)
		left=new Ground(700,500,10,150)
		right=new Ground(900,500,10,150)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y,30,30)
  ground.show()
  left.show()
  right.show()
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{ console.log("hi")
		Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:10})}
}


