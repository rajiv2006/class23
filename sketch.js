const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box2,box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box2=new Box(200,300,50,50);
   box3=new Box(240,100,50,100);
   ground = new Ground(200,370,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display();
    box3.display();
    ground.display();
}