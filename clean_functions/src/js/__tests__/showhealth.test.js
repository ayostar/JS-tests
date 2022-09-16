import showHealth from '../health';

test.each([
  { name: 'Маг', health: 51, expected: 'healthy' },
  { name: 'Маг', health: 15, expected: 'wounded' },
  { name: 'Маг', health: 7, expected: 'critical' },
])('should show health', ({ health, expected }) => {
  const data = { health };
  const received = showHealth(data);
  expect(received).toBe(expected);
});

test('should show health null', () => {
  const expected = null;
  const received = showHealth({ name: 'Маг', health: -5 });
  expect(received).toBe(expected);
});

test('no data health', () => {
  const received = showHealth({ name: 'Маг' });
  expect(received).toBeNull();
});
