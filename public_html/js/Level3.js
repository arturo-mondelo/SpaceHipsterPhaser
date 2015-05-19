/* global Phaser */

var SpaceHipster = SpaceHipster || {};

SpaceHipster.Level3 = function(){};

SpaceHipster.Level3.prototype = {
    create:function(){
        this.game.world.setBounds(0,0,1920,1920);
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,'hierba');
            this.background.autoScroll(0, 20);

        //crear jugador
        this.player = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'playership');
        this.player.scale.setTo(2);
        //crear malos
        this.door = this.game.add.sprite(this.game.world.centerX - 960,this.game.world.randomY,'enemies');
        this.door.scale.setTo(2);
        
        this.player.animations.add('fly',[0,1,2,3], 5, true);
        this.player.animations.play('fly');
        
        
        //sonidos
        this.explosionSound = this.game.add.audio('explosion');
        
        
       
        
        this.game.physics.arcade.enable(this.player);
        this.playerSpeed = 160;
        this.player.body.collideWorldBounds = true;
        
        
        this.game.physics.arcade.enable(this.door);
        this.door.body.collideWorldBounds = true;
        
        this.game.camera.follow(this.player);
        
    
        
        this.generateAsteroids();
        
       
        
    
    },
    
        generateAsteroids: function(){
            this.asteroids = this.game.add.group();
            
            this.asteroids.enableBody = true;
            this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;
            
            var numAsteroids = this.game.rnd.integerInRange(170,220);
            var asteroid;
            
            for(var i = 0; i < numAsteroids; i++){
              asteroid = this.asteroids.create(this.game.world.randomX,this.game.world.randomY,'rock');
              asteroid.scale.setTo(this.game.rnd.integerInRange(10, 40)/10);
              
              asteroid.body.velocity.x = this.game.rnd.integerInRange(-40,40);
              asteroid.body.velocity.y = this.game.rnd.integerInRange(-40,40);
              asteroid.body.inmovable = true;
              asteroid.body.collideWorldBounds = false;
             
              
            
            
        }
        
    },
        
   
    update:function(){
        this.game.physics.arcade.collide(this.player,this.asteroids,this.hitAsteroid,null,this);
        this.game.physics.arcade.collide(this.player,this.door,this.hitDoor,null,this);
       
            
        if(this.game.input.activePointer.justPressed()){
            this.game.physics.arcade.moveToPointer(this.player,this.playerSpeed);
            
        }
            
            
        
        
        
      
        
    },
  
  
  gameOver: function() {    
    //pass it the score as a parameter 
    this.game.state.start('MainMenuLevel3', true, false, this.playerScore);
            
            
        },
        
      hitAsteroid:function (player, asteroid) {
            this.explosionSound.play();
            
            //make the player explode
            var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
            emitter.makeParticles('playerParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 1;
            emitter.start(true, 1000, null, 100);
            this.player.destroy();
            
            this.game.time.events.add(800,this.gameOver,this);
        },
    
        
        level3:function(){
            this.game.state.start('Win', true, false, this.playerScore);

            
        },
        hitDoor:function(player,door){
            this.explosionSound.play();
            
            //make the player explode
            var emitter = this.game.add.emitter(this.door.x, this.door.y, 100);
            emitter.makeParticles('playerParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 1;
            emitter.start(true, 1000, null, 100);
            this.door.destroy();
            
            this.game.time.events.add(800,this.level3,this);
        }
        
        
            
            

        
  
  
  

    
};



