const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var dustbin;

function preload(){
    dustbin=loadImage("dustbingreen.png");

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,530,10,100);
    box2 = new Box(800,580,200,10);
    box3 = new Box(900,530,10,100);

    ground = new Ground(600,height,1200,20)

    ball=new Ball (100,500,25);

}

function draw(){
    background("white");
    Engine.update(engine);

    imageMode(CENTER);
    image(dustbin,800,530,210,110);

    box1.display();
    box2.display();
    box3.display();
    ball.display();
    ground.display();
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-55})
    }
}