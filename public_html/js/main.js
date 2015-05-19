/* global Phaser */

var SpaceHipster = SpaceHipster || {};

SpaceHipster.game = new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.Auto, '');

SpaceHipster.game.state.add('Boot',SpaceHipster.Boot);
SpaceHipster.game.state.add('Preload',SpaceHipster.Preload);
SpaceHipster.game.state.add('Presentacion',SpaceHipster.Presentacion);
SpaceHipster.game.state.add('MainMenu',SpaceHipster.MainMenu);
SpaceHipster.game.state.add('Game',SpaceHipster.Game);
SpaceHipster.game.state.add('MainMenuLevels',SpaceHipster.MainMenuLevels);
SpaceHipster.game.state.add('MainMenuLevel3',SpaceHipster.MainMenuLevel3);
SpaceHipster.game.state.add('Level2',SpaceHipster.Level2);
SpaceHipster.game.state.add('Level3',SpaceHipster.Level3);
SpaceHipster.game.state.add('Win',SpaceHipster.Win);

SpaceHipster.game.state.start('Boot');


