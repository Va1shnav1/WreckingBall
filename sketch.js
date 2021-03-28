const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var crane,ground;
var wBall;
var slingShot;
var wBallImg;
var cityBG;
function preload(){
  wBallImg=loadImage("Images/stone.png");
  crane =loadImage("Images/crane.png");
  cityBG = loadImage("Images/cityBG.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  ground = new Ground(450, 370, 900, 20);

  block1 = new Block(350, 350, 25, 40);
  block2 = new Block(365, 350, 25, 40);
  block3 = new Block(380, 350, 25, 40);
  block4 = new Block(395, 350, 25, 40);

  block5 = new Block(350, 330, 25, 40);
  block6 = new Block(365, 330, 25, 40);
  block7 = new Block(380, 330, 25, 40);
  block8 = new Block(395, 330, 25, 40);

  block9 = new Block(350, 310, 25, 40);
  block10 = new Block(365, 310, 25, 40);
  block11 = new Block(380, 310, 25, 40);
  block12 = new Block(395, 310, 25, 40);

  block13 = new Block(350, 290, 25, 40);
  block14 = new Block(365, 290, 25, 40);
  block15 = new Block(380, 290, 25, 40);
  block16 = new Block(395, 290, 25, 40);
  //ball holder with slings
  wBall = Bodies.circle(240,200,20, {density:1, frictionAir:0.005});
  World.add(world,wBall);

  slingShot = new Slingshot(this.wBall,{x:240,y:190});

}
function draw() {
  background(cityBG); 
 
 
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();
push();
  imageMode(CENTER);
  image(crane, 150, 280, 200, 200);
  image(wBallImg, wBall.position.x, wBall.position.y, 30, 30);
pop();
Engine.update(engine);
}
function mouseDragged(){
  Matter.Body.setPosition(this.wBall,{x:mouseX,y:mouseY});
}
