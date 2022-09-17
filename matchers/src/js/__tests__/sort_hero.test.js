import sortHeroHealth from '../hero';

// test('not the same hero', () => {
//   const received = sortHeroHealth([
//     { name: 'мечник', health: 10 },
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//   ]);
//   const expected = [
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//     { name: 'мечник', health: 10 },
//   ];
//   expect(received).toBe(expected);
// });

test('sort hero array', () => {
  const received = sortHeroHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const result = sortHeroHealth(received);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(expected);
});
