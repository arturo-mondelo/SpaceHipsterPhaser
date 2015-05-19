

/* global SpaceHipster, FlxBitmapFont, AssetsRegistry, FlxScrollingText*/

SpaceHipster.Presentacion = function(){};

SpaceHipster.Presentacion.prototype = {
  create: function() {
  	//mostrar el fondo espacio repetido...
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
    
    //se mueve hacia la izq,x negativo
    this.background.autoScroll(-20, 0);


    
    var text = "Juego realizado por : \nArturo Mondelo Ruiz-Falco \nSiguiendo un tutorial de \nZENVA ACADEMY!\nPulsa para ir al Menu Principal...";
    var style = { font: "25px Arial Black", fill: "#43d677", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
    var t = this.game.add.text(this.game.width/2, this.game.height/3, text, style);
    t.anchor.set(0.5);
    
    
//    text = "Arturo Mondelo Ruiz-Falco \nSiguiendo un tutorial de \nZENVA ACADEMY!";
//    style = { font: "35px Arial Black", fill: "#43d637", align: "center", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
//  
//    var h = this.game.add.text(this.game.width/2, this.game.height/3 + 100, text, style);
//    h.anchor.set(0.5);
//    
//    
//    
//    text = "Pulsa para ir al Menu Principal...";
//    style = { font: "25px Arial Black", fill: "#43d677", align: "bottom", fontWeight:"bold", stroke:"#000000", strokeThickness: 6};
//  
//    var y = this.game.add.text(this.game.width/2, this.game.height/3 + 200, text, style);
//    y.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.state.start('MainMenu');
    }
  }
 
};