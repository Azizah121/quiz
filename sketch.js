var canva;
var gameState=0;
var contestantCount=0;
var database;
var quiz; 
var question;
var contestant;
function setup(){
  canvas = createCanvas(850,400);
 database=firebase.database();
   q= new qu(400,200,20,20);
   q.getCount();
  
}


function draw(){
  background("pink");
q.display();
var title=createElement("h4");
title.html("Quiz Game");
title.position(100,50);

var question=createElement("h4");
question.html("Question:-What is 100x75?")
question.position(100,100);

var answer=createInput("Answer");
answer.position(400,220);

var input=createInput("Name");
input.position(200,220);

var button=createButton("Submit");
button.position(350,250);

button.mousePressed(function(){
    var name=input.value();
    contestantCount=contestantCount+1;
    q.updateCount(contestantCount);
    q.update(name);
    button.hide();
   
})
}
