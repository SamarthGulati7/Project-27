
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	
	Engine.run(engine);

	bob1= new Bob(150,400,50);
	bob2= new Bob(275,400,50);
	bob3= new Bob(400,400,50);
	bob4= new Bob(525,400,50);
	bob5= new Bob(650,400,50);
	roof1= new Roof(390,100,700,50);
	rope1= new Rope(bob1.body,roof1.body,-200);
	rope2= new Rope(bob2.body,roof1.body,-100);
	rope3= new Rope(bob3.body,roof1.body,0);
	rope4= new Rope(bob4.body,roof1.body,100);
	rope5= new Rope(bob5.body,roof1.body,200);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){

if(keyCode=== UP_ARROW){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-180, y:-180})

}	

if(keyCode=== DOWN_ARROW){

	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:180, y:-180})

}
}



