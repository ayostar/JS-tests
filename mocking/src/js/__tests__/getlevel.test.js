import { getLevel } from '../app';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => jest.resetAllMocks());

test('test fetchData called with 1', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('test getLevel return level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  const result = getLevel('Открываю все двери');
  expect(result).toBe('Ваш текущий уровень: 5');
});

test('test getLevel return error', () => {
  fetchData.mockReturnValue({ status: 'forbidden' });
  const result = getLevel('Токсик');
  expect(result).toBe('Информация об уровне временно недоступна');
});
