var gameState = 0;
var  playerCount, database;
var position ,allPlayers;
var form,player,game;
var backgroundIMG;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);

game = new Game()
game.getState()
game.start()
 
}

function draw(){
  background("white")
    
    drawSprites();
  
    if(playerCount === 4 ) {
      game.update(1)
    }
    if(gameState === 1) {
      game.play()
    }
}



function showError(){
  console.log("Error in writing to the database");
}
