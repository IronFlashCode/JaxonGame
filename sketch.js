var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

 
}

function setup(){
  
//create a canvas

// createCanvas(window,window);
 createCanvas(800,800);
// createCanvas(width,height);
// createCanvas(200,200);

// Moving background

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  

}

function draw() {

  
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background

  // if(path.x > height ){
  //   path.x = height/2;
  // }

  // if(path.y > height ){
  //   path.x = height/2;
  // }

  // if(path.x > height ){
  //   path.y = height;
  // }

   if(path.y > height ){
    path.y = height/2;
   }
  
    
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }









