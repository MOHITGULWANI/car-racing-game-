class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.title = createElement("h2")
        this.greeting = createElement("h3")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }
    display(){
     
   this. title.html("car racing game")
    this.title.position(displayWidth/2-40,100);
    
   
    this.input.position(displayWidth/2+40,displayHeight/2-100)
    
    this.button.position(displayWidth/2+100,displayHeight/2+100)
   
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
       
        //we are storing the name of the player written in the input box as variable name
        player.name = this.input.value()
        playerCount = playerCount+1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello "+ player.name)
        this.greeting.position(displayWidth/2+100,displayHeight/2+100)
    })
   
    }
}