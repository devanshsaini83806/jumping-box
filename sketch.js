var canvas;
var music;
var s1,s2,s3,s4,s5,s6;
var box;
var box2
var a;
var b;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(785,400);
   
    //make box
    box =createSprite(Math.round(random(50,760)),200,30,30)
    box2=createSprite(Math.round(random(50,760)),200,30,30)
box.shapeColor="white"
box2.shapeColor="black"

    //create 4 different surfaces
  s1 = createSprite(90,385,190,30);
  s2 = createSprite(290,385,190,30)
  s3 = createSprite(490,385,190,30);
  s4 = createSprite(690,385,190,30);
  s5 = createSprite(90,15,190,30);
  s6 = createSprite(290,15,190,30);
  s7 = createSprite(490,15,190,30);
  s8 = createSprite(690,15,190,30);
   a=createSprite(0,200,1,400);
   b=createSprite(785,200,1,400);

  box.velocityX=-5;
box.velocityY=-5;

box2.velocityX=-5;
box2.velocityY=-5;
  
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

//create edgeSprite





    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box2) ){
        box2.shapeColor="orange";
    
    }
    if(s2.isTouching(box2) ){
        box2.shapeColor="yellow";
        music.play();
    
    }if(s3.isTouching(box2) ){
        box2.shapeColor="cyan";
        box2.velocityX=0;
    box2.velocityY=0;
    
    }if(s4.isTouching(box2) ){
        box2.shapeColor="red";
    
    }if(s5.isTouching(box2) ){
        box2.shapeColor="lime";
    
    }if(s6.isTouching(box2)){
        box2.shapeColor="yellow";
        music.play();

    
    }if(s7.isTouching(box2)){
        box2.shapeColor="red";
    
    }if(s8.isTouching(box2)){
        box2.shapeColor="cyan";
        box2.velocityX=0;
    box2.velocityY=0;
    
    }



if(s1.isTouching(box) ){
    box.shapeColor="orange";

}
if(s2.isTouching(box) ){
    box.shapeColor="yellow";
    music.play();


}if(s3.isTouching(box) ){
    box.shapeColor="cyan";
    box.velocityX=0;
    box.velocityY=0;

}if(s4.isTouching(box) ){
    box.shapeColor="red";

}if(s5.isTouching(box) ){
    box.shapeColor="lime";

}if(s6.isTouching(box)){
    box.shapeColor="yellow";
    music.play();


}if(s7.isTouching(box)){
    box.shapeColor="red";

}if(s8.isTouching(box)){
    box.shapeColor="cyan";
    box.velocityX=0;
    box.velocityY=0;


}
//box bounce on surface and edges
box.bounceOff(a)
box.bounceOff(b)

box.bounceOff(s1);
box.bounceOff(s2);
box.bounceOff(s3);
box.bounceOff(s4);
box.bounceOff(s5);
box.bounceOff(s6);
box.bounceOff(s7);
box.bounceOff(s8);

//////////////////////////

box2.bounceOff(a)
box2.bounceOff(b)

box2.bounceOff(s1);
box2.bounceOff(s2);
box2.bounceOff(s3);
box2.bounceOff(s4);
box2.bounceOff(s5);
box2.bounceOff(s6);
box2.bounceOff(s7);
box2.bounceOff(s8);




drawSprites();

// just to make black boundary  over all surfaces;
strokeWeight(3)
fill("red")
    rect(594,373,190,30);
    fill("yellow")
    rect(197,373,186,30);
    fill("cyan")
    rect(397,373,186,30);
    fill("orange")
    rect(0,373,186,30)
    fill("cyan")
    rect(597,0,186,30);
    fill("yellow")
    rect(197,0,186,30);
    fill("red")
    rect(397,0,186,30);
    fill("lime")
    rect(0,0,186,30);

}