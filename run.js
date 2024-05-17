// Основной файл.
// Запускает игру.
const readline = require('readline');
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter you name:', (name) => {
  runInteractiveConsole(game);
  console.log(`Player ${name}`);
});
