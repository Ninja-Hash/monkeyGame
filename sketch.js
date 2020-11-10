
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
 monkey = createSprite(50,347,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
monkey.velocityX=0;
  
  ground = createSprite(70,380,1000,10);
  ground.velocityX=-2;
  ground.x=ground.width/2;
  
    obstaclesGroup = new Group();
}


function draw() {
  background("white");
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
         }
 
  banana();
  obstacles();
    monkey.velocityY = monkey.velocityY + 0.8;
  fill("black");
  textSize(20);
  text("score: " +score, 100,50);
      score = score + Math.round(getFrameRate()/60);
  drawSprites();

  monkey.collide(ground);
  
}

function obstacles(){
  if (frameCount % 160 === 0){
    obstacle = createSprite(300,350,10,40);
     obstacle.y = Math.round(random(358,358));
    obstacle.addAnimation("running", obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstaclesGroup.add(obstacle);
    obstacle.lifetime = 300;
  }
  
}

function banana(){
    if (frameCount % 160 === 0) {
    var banana = createSprite(600,280,40,10);
    banana.y = Math.round(random(170,280));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    }
 
}






