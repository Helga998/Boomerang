// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const play = require("play-sound")();


const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');


// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: this.trackLength - 1 });
    this.view = new View();
    this.track = [];
    this.track1 = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track1 = (new Array(this.trackLength)).fill(' ');
    // this.track1[this.hero.position] = this.hero.skin;
    // this.track1[this.enemy.position] = this.enemy.skin;
    // this.track1[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.boomerang.position === this.enemy.position - 1) {
      this.enemy.die();
    }
  }
  play() {
    this.check();
        this.regenerateTrack();
        this.view.render(this.track,this.track1);
      }
  flyBoom() {
    play.play("./src/sounds/mem.mp3");
    setInterval(() => {
      if (this.enemy.skin === '💀' ){
        this.boomerang.moveLeft();
        this.check();
        this.regenerateTrack();
        this.view.render(this.track,this.track1);
        console.log('Enemy is dead!');
        } 
        else {
          this.boomerang.moveRight();
          this.check();
          this.regenerateTrack();
          this.view.render(this.track,this.track1);
      }
        if (this.boomerang.position  === this.hero.position +1) {
          console.log('YOU WINNER! CONGRATULATION!!')
          play.play("./src/sounds/era.mp3");
          process.exit();
        } 
  },150);

  }
}

module.exports = Game;
