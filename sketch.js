var bow, arrow, pinkBalloon, redBalloon, blueBalloon, greenBalloon, bg;
var bowImg, arrowImg, pinkBalloonImg, redBalloonImg, blueBalloonImg, greenBalloonImg, bgImg;
var arrowGroup,redBG, greenBG, pinkBG, blueBG;

var score = 0;

function preload() {

  bowImg = loadImage("bow.png");
  arrowImg = loadImage("arrow.png");
  blueBalloonImg = loadImage("balloonBlue.png");
  redBalloonImg = loadImage("balloonRed.png");
  pinkBalloonImg = loadImage("balloonPink.png");
  greenBalloonImg = loadImage("balloonGreen.png");
  bgImg = loadImage("background.png")

}

function setup() {

  createCanvas(600, 600);
  
  redBG = new Group();
  pinkBG = new Group();
  greenBG = new Group();
  blueBG = new Group();
  arrowGroup = new Group();

  bg = createSprite(0, 0, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 3;

  bow = createSprite(550, 400, 20, 20);
  bow.addImage("b", bowImg);

  bg.velocityX = -2;
  bg.x = bg.width / 2;

}

function draw() {

  background("white");
  fill("black");
  textSize(20);
  bow.y = mouseY;

  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  if (keyDown("space")) {
    createArrow();
  }

  if (frameCount % 100 == 0) {
    var selectBalloon = Math.round(random(1, 4));
    if (selectBalloon == 1) {
      spawnRed();
    } else if (selectBalloon == 2) {
      spawnBlue();
    } else if (selectBalloon == 3) {
      spawnPink();
    } else if (selectBalloon == 4) {
      spawnGreen();
    }
  }
  
  if(arrowGroup.isTouching(redBG)){
    redBG.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(blueBG)){
    blueBG.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(pinkBG)){
    pinkBG.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(greenBG)){
    greenBG.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
   
  drawSprites(); 
  text("Press spacebar to shoot!", 130,50);
  text("Score "+score, 500,50);

}

function createArrow() {
  var arrow = createSprite(530, 400, 20, 20);
  arrow.addImage(arrowImg);
  arrow.scale = 0.3;
  arrow.velocityX = -5;
  arrow.y = mouseY;
  arrowGroup.add(arrow);
}

function spawnRed() {
  redBalloon = createSprite(50, Math.round(random(100, 500)), 20, 20);
  redBalloon.addImage(redBalloonImg);
  redBalloon.scale = 0.1;
  redBalloon.velocityX = 2;
  redBalloon.lifetime = 200;
  redBG.add(redBalloon);
}

function spawnBlue() {
  blueBalloon = createSprite(50, Math.round(random(100, 500)), 20, 20);
  blueBalloon.addImage(blueBalloonImg);
  blueBalloon.scale = 0.1;
  blueBalloon.velocityX = 2;
  blueBalloon.lifetime = 200;
  blueBG.add(blueBalloon);
}

function spawnPink() {
  pinkBalloon = createSprite(50, Math.round(random(100, 500)), 20, 20);
  pinkBalloon.addImage(pinkBalloonImg);
  pinkBalloon.scale = 1.2;
  pinkBalloon.velocityX = 2;
  pinkBalloon.lifetime = 200;
  pinkBG.add(pinkBalloon);
}

function spawnGreen() {
  greenBalloon = createSprite(50, Math.round(random(100, 500)), 20, 20);
  greenBalloon.addImage(greenBalloonImg);
  greenBalloon.scale = 0.1;
  greenBalloon.velocityX = 2;
  greenBalloon.lifetime = 200;
  greenBG.add(greenBalloon);
}