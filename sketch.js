const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var snow = [];
var maxS = 150;
var man, manImg;

function preload() {
  bg = loadImage("snow6.jpg");
  manImg = loadAnimation("man.gif");
}

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 495, 1000);

  man = createSprite(900, 375, 50, 80);
  man.addAnimation("walk", manImg);
  man.scale = 0.5;
  man.velocityX = -3;

  if(frameCount % 150 === 0) {
    for(var i=0; i < maxS; i++) {
      snow.push(new Snow(random(0,1000), random(0,100)));
    }
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  drawSprites();

  ground.display();

  for(var i=0; i < maxS; i++) {
    snow[i].display();
    snow[i].update();
  }
 }