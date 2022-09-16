export default function sortHeroHealth(data) {
  // data.sort((a, b) => (a.health < b.health ? 1 : -1));
  data.sort((prev, next) => next.health - prev.health);
  return data;
}
