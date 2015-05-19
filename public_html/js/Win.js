/* global SpaceHipster */

SpaceHipster.MainMenuLevel3 = function(){};

SpaceHipster.MainMenuLevel3.prototype = {
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
    
    //give it speed in y
    this.background.autoScroll(20, 0);

    //start game text
    var text = "HAS GANADO";
    var style = { font: "35px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
    var t = this.game.add.text(this.game.width/3, this.game.height/3, text, style);
    t.anchor.set(0.5);

    
    text = "Toca para volver a empezar!!!";
    style = { font: "20px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
  
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 100, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
        
    
      this.state.start('Game');
      
    }
  
}

};

