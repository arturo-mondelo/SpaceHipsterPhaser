SpaceHipster.MainMenuLevels = function(){};

SpaceHipster.MainMenuLevels.prototype = {
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'hielo');
    
    //give it speed in y
    this.background.autoScroll(0, 20);

    //start game text
    var text = "Ahora debes encontrar al enemigo...";
    var style = { font: "20px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
    
    text = text = "LA PANTERA ROSA!";
    style = { font: "30px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    h.anchor.set(0.5);

    //highest score
//    text = "Puntuacion : "+ this.highestScore;
//    style = { font: "15px Arial", fill: "#fff", align: "center" };
//  
//    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
//    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
        
    
      this.state.start('Level2');
      
    }
  }
 
};


