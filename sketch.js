var canvas,backgroundImage;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance=0;
var database;

var form,player,game;

function setup(){
  canvas = createCanvas(windowWidth -40,windowHeight-40);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  background("light green");
  if(playerCount===4){
    game.updateState(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }

  text(mouseX+","+mouseY,mouseX,mouseY)
}