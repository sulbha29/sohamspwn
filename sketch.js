const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var archer;

var carriage;
var bg;


function setup(){
    var canvas = createCanvas(1500,550);
    engine= Engine.create()
    world = engine.world; 

  

 balloonA= new Balloon1(Math.ceil(Math.random(0,50)*100),100,30,50);
 balloonB= new Balloon2(Math.ceil(Math.random(0,50)*100),100,30,50);
 balloonC= new Balloon3(Math.ceil(Math.random(0,50)*100),100,30,50);
 rock1= new Rock(550,100,30,50);
 carriage= new Carriage(1310,200,80,60);
 archer= new Archer(1310,120,100,100);
 

 
bg=loadImage("Images/Background1.jpg");
    
}
function draw(){
    background(bg);
    Engine.update(engine);
    balloonA.display();
    balloonB.display();
    balloonC.display();
    rock1.display();
    carriage.display();
    archer.display();
    check();
}
function check()
{
	if(balloonA.body.position.y>=400)
		balloonA=new Balloon1(Math.ceil(Math.random(0,50)*100),100,30,50);
	if(balloonB.body.position.y>=400)
		balloonB=new Balloon2(Math.ceil(Math.random(0,50)*100),100,30,50);
	if(balloonC.body.position.y>=400)
		balloonC=new Balloon3(Math.ceil(Math.random(0,50)*100),100,30,50);
}
//function KeyisPressed(){
  // if(keyIsDown(UP_ARROW)){
    //    carriage.body.velocity.y=-2;
    //}
    //if(keyIsDown(DOWN_ARROW)){
      //  carriage.body.velocity.y=2;
    //}
//}




