function findOdd(A) {
  const count = {};

  // Подсчет частоты появления каждого числа
  for (const num of A) {
    count[num] = (count[num] || 0) + 1;
  }

  // Поиск числа с нечетным количеством появлений
  for (const num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num); // Приводим к числу перед возвратом
    }
  }

  return 0; // На всякий случай, если не найдено, хотя по условию это не должно произойти
}

module.exports = findOdd;
