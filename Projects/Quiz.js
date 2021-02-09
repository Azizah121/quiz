class qu{
    constructor(){
    
    }
    display(){
    
    }
getCount(){
    var gameStateref=database.ref("gameState");
    gameStateref.on("value", function(data){
        gameStateref=data.val();
});
}
updateCount(count){
    database.ref("/").update({
        gameState:count
    });
}
async start(){
  if(gameState === 0){
      contestant= new Player();
      var contestantCountref=await database.ref('contestantCount').once("value");
      if(contestantCountref.exists()){
          contestantCount=contestantCountref.val();
          contestant.getCount();
      }
question= new ques();
question.display();
    }
}
}