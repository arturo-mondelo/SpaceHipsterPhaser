/* global SpaceHipster */

SpaceHipster.MainMenu = function(){};

SpaceHipster.MainMenu.prototype = {
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
    
    //give it speed in x
    this.background.autoScroll(-20, 0);

    //start game text
    var text = "Recoge 10 estrellas para pasar de nivel!!!!";
    var style = { font: "25px Arial Black", fill: "#7AF5D2", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
    var s = this.game.add.text(this.game.width/2, this.game.height/3, text, style);
    s.anchor.set(0.5);
    
    text = "Pulsa para Comenzar";
    style = { font: "30px Arial", fill: "#238C6E", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2 + 75, text, style);
    t.anchor.set(0.5);
    

    //highest score
    text = "Puntuacion Maxima: "+this.highestScore;
    style = { font: "15px Arial", fill: "#238C6E", align: "center" };
  
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 110, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.state.start('Game');
    }
  },
  init: function(score) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
   }
};


