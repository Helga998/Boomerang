// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track,track1) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    // console.log(track1.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
