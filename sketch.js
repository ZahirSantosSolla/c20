const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var bloco1;
var bloco2;
var bloco3;

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
    world = engine.world;

	var ground_options = {
	isStatic : true
  }

	var bloco1_options = {
	restitution: 1,
	friction: 0.02,
	frictionAir: 0

	}

	var bloco2_options = {
	restitution: 1,
	friction: 0.01,
	frictionAir: 0.1
	
	}

	var bloco3_options = {
	restitution: 1,
	friction: 1,
	frictionAir: 0.3
	
	}
	
	bloco1 = Bodies.circle(220,10,10,bloco1_options);
	World.add(world,bloco1);
	

  	bloco2 = Bodies.rectangle(110,50,10,10,bloco2_options);
	World.add(world,bloco2);

	bloco3 = Bodies.rectangle(350,50,10,10, bloco3_options);
	World.add(world,bloco3);

	ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

		
}


function draw() {
	ellipseMode(RADIUS);
	rectMode(CENTER);
	fill("blue");

  background("green");
  Engine.update(engine);
  
  
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(bloco1.position.x,bloco1.position.y,20);
  rect(bloco2.position.x, bloco2.position.y, 50,50);
  rect(bloco3.position.x, bloco3.position.y, 60,35);

  
}



