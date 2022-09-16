export default function sortHeroHealth(data) {
  data.sort((a, b) => (a.health < b.health ? 1 : -1));
  return data;
}
