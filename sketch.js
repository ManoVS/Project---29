const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var world,engine;

function preload(){

}

function setup(){
    createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    //1st set
    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);

    block9 = new Block(390,155,30,40);

    //2nd set
    block10 = new Block(730,135,30,40);
    block11 = new Block(760,135,30,40);
    block12 = new Block(790,135,30,40);
    block13 = new Block(820,135,30,40);
    block14 = new Block(850,135,30,40);

    block15 = new Block(790,95,30,40);
    block16 = new Block(760,95,30,40);
    block17 = new Block(820,95,30,40);

    block18 = new Block(790,55,30,40);


    hexa = new hexagon(50,350);
    slingshot = new SlingShot(hexa.body,{x:200, y:150});

    ground1 = new ground(400,350,200,20);
    ground2 = new ground(800,200,200,20);
    Ground = new ground(700,height,14000,20);
    World.add(world,Ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    slingshot.display();
    hexa.display();     

    //1st set display
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();

    //2nd set display
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    block15.display();
    block16.display();
    block17.display();

    block18.display();


    ground1.display();
    ground2.display();
    Ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}