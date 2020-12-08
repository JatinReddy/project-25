
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	
	ground1 = new Ground(width/2,690,width,20);
	paper = new Paper(100,450,40);
	log1 = new Bin(650,670,200,20);
	log2 = new Bin(570,620,20,200);
	log3 = new Bin(730,620,20,200);
	

	Engine.run(engine);
}

function draw() {
  background("grey");
  Engine.update(engine);
  rectMode(CENTER);
  ground1.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-77});
}



