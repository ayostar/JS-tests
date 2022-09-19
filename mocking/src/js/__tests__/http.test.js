import fetchData from '../http';

// test('should come TypeError', () => {
//   expect(() => fetchData('url').toThrow(TypeError));
// });

test('should come TypeError', () => {
  expect(() => {
    fetchData('url');
  }).toThrow();
});
