// Враг.
const play = require('play-sound')();


class Enemy {
  constructor(args = {}) {
    this.generateSkin();
    this.position = args.position;
  }

  generateSkin() {
    const skins = [
      "👾",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.skin = "💀";
    play.play('./src/sounds/kill.mp3');
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
