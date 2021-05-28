var form;
var wcoin,bcoin;
var striker;
var hole;
var carrom;
var database;

var game, gameState;
var player, playerCount;
function preload(){
  carromboardImage = loadImage("carromboard.png");
  wcoinImage = loadImage("whitecoin.png");
  strikerImage = loadImage("Striker2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-142);
  database = firebase.database();
  
  /*carrom = createSprite(780,360,20,20)
  carrom.addImage(carromboardImage)
  carrom.scale = 0.72;

  wcoin = createSprite(900,200,20,20)
  wcoin.addImage(wcoinImage)
  wcoin.scale = 0.09
  wcoin.friction = 0.02
  
  striker = createSprite(780,597,20,20)
  striker.addImage(strikerImage)
  striker.scale = 0.03
  striker.velocityX = 0
  striker.velocityY = -0
  striker.friction = 0.02

  hole = createSprite(1080,50,20,20)*/
  gameState = 0

  game = new Game();
  game.getState();
  game.start();


}

function draw() {
  background("brown");  
  
  
  /*hole.visible = false
  wcoin.debug = false
  wcoin.setCollider("circle",10,-10,150)

  

  striker.debug = false
  striker.setCollider("circle",10,-10,700)
  if(striker.isTouching(wcoin)){
    striker.friction += 0.01
  }

  striker.bounce(wcoin)
  if(wcoin.isTouching(hole)){
    wcoin.destroy();
    striker.x = 780
    striker.y = 597
    striker.friction = 1
  }
 
  if(keyDown("space")){
    striker.velocityX = 4.5
    striker.velocityY = -18
  }*/

  if(playerCount === 2){
    game.update(1);
  }
  drawSprites();
}