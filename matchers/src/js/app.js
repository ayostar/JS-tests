import sortHeroHealth from './hero';

const heroName = document.querySelector('#hero');

function showHealth(data) {
  if (data.health) {
    const { health } = data;
    if (health > 50) {
      return 'healthy';
    }
    if (health <= 50 && health >= 15) {
      return 'wounded';
    }
    if (health < 15 && health >= 0) {
      return 'critical';
    }
    return null;
  }
  return null;
}

function showHeroes(array) {
  array.forEach((element) => {
    const healthStatus = showHealth(element);

    heroName.insertAdjacentHTML('beforeend', `<div> ${element.name} </div>`);
    heroName.insertAdjacentHTML(
      'beforeend',
      `<div id="health"> <div class="${healthStatus}" style="width: ${element.health}%">${element.health}</div></div>`
    );
  });
}

const heroesArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedHeroes = sortHeroHealth(heroesArray);

console.log(sortHeroHealth(heroesArray));

showHeroes(sortedHeroes);
