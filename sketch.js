const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backdrop;
var snowFall = [];

function preload(){
  backdrop = loadImage("snow3.jpg");
}


function setup() {
 createCanvas(1200,600);

}

function draw() {
  background(backdrop);  


   if(frameCount%60===0){
    snowFall.push(new Snow(random(0,800),0))
  }
  
 for(var j = 0 ; j< snowFall.length; j++){
 snowFall[j].display();
 }
  
  drawSprites();
}