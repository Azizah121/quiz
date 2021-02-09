class ques{
    constructor(){

    }
    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question:-Whatnstarts and ends with the letter 'E',but has only one letter?");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option.html("2: Envelope");
        this.option2.position(150,120);
        this.input.position(150,230);

    // var title=createElement("h2");
    // title.html("Quiz Game");
    // title.position(100,50);

    // var input=createInput("Name");
    // input.position(150,200);

    // var button=createButton("Play");
    // button.position(300,250);

    // button.mousePressed(function(){
    //     var greeting=createElement("h2");
    //     var name=input.value();
    //     greeting.html("Hello "+name);
    //     greeting.position(170,150);
    //     contestantCount=playercount+1;
    //     contestant.updateCount(contestantCount);
    //     contestant.update(name);
    //     button.hide();
    //     input.hide();
        
    // })
     }
}