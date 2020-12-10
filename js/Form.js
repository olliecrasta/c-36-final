class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2',"Car Racing Game");
        title.position(windowWidth/2-50,10);

        this.input.position(windowWidth/2-40  ,windowHeight/2-40);
        this.button.position(windowWidth/2+30,windowHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(400,160);
        });
    }

}