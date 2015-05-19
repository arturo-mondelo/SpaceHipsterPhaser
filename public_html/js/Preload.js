var SpaceHipster = SpaceHipster || {};

SpaceHipster.Preload = function(){};

SpaceHipster.Preload.prototype = {
    preload: function(){
        this.splash = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'logo');
        this.splash.anchor.setTo(0.5);
        
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128,'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.image('space','assets/images/space.png');
        this.load.image('cambiospace','assets/images/cambiospace.png');
        this.load.image('hielo','assets/images/hielo.png');
        this.load.image('bricks','assets/images/bricks.png');
        this.load.image('hierba','assets/images/hierba.png');
        this.load.image('space','assets/images/cambiospace.png');

        this.load.image('rock','assets/images/rock.png');
        
        this.load.spritesheet('playership', 'assets/images/player.png', 12, 12);
        this.load.spritesheet('enemies', 'assets/images/enemy.png', 12, 12);
        this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
        
  	this.load.image('playerParticle', 'assets/images/player-particle.png');
        
    this.load.audio('collect', 'assets/audio/collect.ogg');
    this.load.audio('explosion', 'assets/audio/explosion.ogg');
    },
    create: function() {
        this.state.start('Presentacion');
    }
};



