var backgroundImg;
var iss;
var hasDocked = false;
var spacecraft;

function preload(){
  backgroundImg= loadImage("spacebg.jpg");
  IssImg = loadImage("iss.png");
  spacecraftImg1=loadImage("spacecraft1.png");
  spacecraftImg2=loadImage("spacecraft2.png");
  spacecraftImg3=loadImage("spacecraft3.png");
  spacecraftImg4=loadImage("spacecraft4.png");
  
}
function setup() {
  createCanvas(800,400);


  Iss = createSprite(400, 185, 50, 50);
  Iss.addImage(IssImg);
  Iss.scale=0.7;

  spacecraft = createSprite(355, 330, 50, 50);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale=0.29;   

  Iss.depth = spacecraft.depth+2;


  //randomVal= Math.round(random(340,400));
}


function draw() {
  background(backgroundImg);  

  if(hasDocked===false){
    //spacecraft.x = Math.round(random(340,400)); ;

    if(keyDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x-2
      spacecraft.addImage(spacecraftImg4);
      spacecraft.scale=0.29;   
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x= spacecraft.x+2
      spacecraft.addImage(spacecraftImg3);
      spacecraft.scale=0.29;   
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.y= spacecraft.y+2
      spacecraft.addImage(spacecraftImg2);
      spacecraft.scale=0.29;   
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y= spacecraft.y-2
      spacecraft.addImage(spacecraftImg1);
      spacecraft.scale=0.29;   
    }
    console.log(spacecraft.x,spacecraft.y);
  }

  if(spacecraft.x === 349 && spacecraft.y === 262){
    spacecraft.velocityY=0;
    spacecraft.velocityX=0;
    textSize(25);
    fill("white");
    text("Docking Sucessful!",550,360);
  }

  drawSprites();
}