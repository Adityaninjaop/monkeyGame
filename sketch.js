
var monkey , monkeyRunning
var banana ,bananaImg, obstacle, obstacleImg
var FoodGrp, obstacleGrp
var ground;
var score

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstaceImg = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  var survivalTime=0;
  
  
  monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkeyRunning);
  
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
}


function draw() {
  background("white")
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
  
  Food();
  Obstacles();
  
  FoodGrp= new Group();
  obstacleGrp= new Group();
  
  if(obstacleGrp.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGrp.setVelocityXEach(0);
        FoodGrp.setVelocityXEach(0);
        obstacleGrp.setLifetimeEach(-1);
        FoodGrp.setLifetimeEach(-1);
    
    
    }
  
 
  
drawSprites()
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50); 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}


function Food() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(300,50,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
    
    banana.lifetime = 100;
    monkey.depth = banana.depth + 1;
    
    
     banana.addImage(bananaImg);
     banana.scale=0.05;
    
    
    FoodGrp.add(banana);
  }
}


function Obstacles() {
  if(frameCount % 250 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
     
    obstacle.addImage(obstaceImg);
    obstacle.scale=0.15;
        
    obstacle.lifetime = 100;
    
    obstacleGrp.add(obstacle);
  }
}




