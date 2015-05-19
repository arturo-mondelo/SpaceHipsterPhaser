/* global SpaceHipster */

SpaceHipster.MainMenuLevel3 = function(){};

SpaceHipster.MainMenuLevel3.prototype = {
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'hierba');
    
    //give it speed in y
    this.background.autoScroll(20, 0);

    //start game text
    var text = "Encuentra la puerta en la parte izquierda...";
    var style = { font: "25px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);

    
    text = "Y SE ACABO EL JUEGO";
    style = { font: "35px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
  
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
        
    
      this.state.start('Level3');
      
    }
  
}

};


