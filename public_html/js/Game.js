/* global Phaser */

var SpaceHipster = SpaceHipster || {};

SpaceHipster.Game = function(){};

SpaceHipster.Game.prototype = {
    create:function(){
        this.game.world.setBounds(0,0,1920,1920);
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,'space');
            this.background.autoScroll(-20, 0);

        //crear jugador
        this.player = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'playership');
        this.player.scale.setTo(2);
        
        //efecto volar en la "nave"
        this.player.animations.add('fly',[0,1,2,3], 5, true);
        this.player.animations.play('fly');
        
        
        //sonidos
        this.explosionSound = this.game.add.audio('explosion');
        this.collectSound = this.game.add.audio('collect');
        
        this.playerScore = 0;
        
        this.game.physics.arcade.enable(this.player);
        this.playerSpeed = 120;
        this.player.body.collideWorldBounds = true;
        
        
        
        this.game.camera.follow(this.player);
        
        this.generateCollectables();
    
        
        this.generateAsteroids();
        
        
    
    },
    generateCollectables: function() {
    this.collectables = this.game.add.group();

    //enable physics in them
    this.collectables.enableBody = true;
    this.collectables.physicsBodyType = Phaser.Physics.ARCADE;

    //phaser's random number generator
    var numCollectables = this.game.rnd.integerInRange(100, 150);
    var collectable;

    for (var i = 0; i < numCollectables; i++) {
      //add sprite
      collectable = this.collectables.create(this.game.world.randomX, this.game.world.randomY, 'power');
      collectable.animations.add('fly', [0, 1, 2, 3], 5, true);
      collectable.animations.play('fly');
    }
  },
        generateAsteroids: function(){
            this.asteroids = this.game.add.group();
            
            this.asteroids.enableBody = true;
            this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;
            
            var numAsteroids = this.game.rnd.integerInRange(150,200);
            var asteroid;
            
            for(var i = 0; i < numAsteroids; i++){
              asteroid = this.asteroids.create(this.game.world.randomX,this.game.world.randomY,'rock');
              asteroid.scale.setTo(this.game.rnd.integerInRange(10, 40)/10);
              
              asteroid.body.velocity.x = this.game.rnd.integerInRange(-20,20);
              asteroid.body.velocity.y = this.game.rnd.integerInRange(-20,20);
              asteroid.body.inmovable = true;
              asteroid.body.collideWorldBounds = false;
             
              
            
            
        }
        this.showLabels();
    },
        showLabels: function() {
    //score text
    var text = "0";
    var style = { font: "20px Arial", fill: "#fff", align: "center" };
    this.scoreLabel = this.game.add.text(this.game.width-50, this.game.height - 50, text, style);
    this.scoreLabel.fixedToCamera = true;

    },
    update:function(){
         
        this.game.physics.arcade.collide(this.player,this.asteroids,this.hitAsteroid,null,this);
        this.game.physics.arcade.overlap(this.player, this.collectables, this.collect, null, this);
        
          if(this.game.input.activePointer.justPressed()){
            this.game.physics.arcade.moveToPointer(this.player,this.playerSpeed);
            
            
            
        }
            
        
        
            
            
        if(this.playerScore >= 10) {
            this.game.state.start('MainMenuLevels', true, false, this.playerScore);
        
        
        
        }
        
        
        
      
        
    },
    collect: function(player, collectable) {
    //play collect sound
    this.collectSound.play();

    //update score
    this.playerScore++;
    
    this.scoreLabel.text = this.playerScore;
    


    //remove sprite
    collectable.destroy();
    
  },
  
  gameOver: function() {    
    //pass it the score as a parameter 
    this.game.state.start('MainMenu', true, false, this.playerScore);
            
            
        },
        
      hitAsteroid:function (player, asteroid) {
            this.explosionSound.play();
            
            //make the player explode
            var emitter = this.game.add.emitter(this.player.x, this.player.y, 200);
            emitter.makeParticles('playerParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;
            emitter.start(true, 1000, null, 100);
            this.player.destroy();
            
            this.game.time.events.add(800,this.gameOver,this);
        }
        
            
            

        
  
  
  

    
};

