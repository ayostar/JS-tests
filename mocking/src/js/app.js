import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}

// import { httpGet } from './http';
// export default function loadUser(id) {
//   //bad practice
//   const data = httpGet(`http://server:8080/users/${id}`);
//   return JSON.parse(data);
// }
