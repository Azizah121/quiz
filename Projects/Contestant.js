class Player{
    constructor(){
    
    }
    display(){
    
    }
    
    getCount(){
        var contestantCountref=database.ref("contestantCount");
    contestantCountref.on("value", function(data){
    contestantCount=data.val();
    });
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount:count
        });
    }
    update(name){
        var playerindex="contestant"+contestantCount;
        database.ref(playerindex).set({
            Name:name
        });
    }
    }