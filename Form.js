class Form{
    constructor(){}
    display(){
        var title = createElement("h2");
        title.html("CarRacingGame");
        title.position(200,200);
        var input = createInput("name");
        input.position(400,200)
        var button = createButton("Play");
        button.position(400,450)
        var greeting = createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(130,160);
        })
    }
}