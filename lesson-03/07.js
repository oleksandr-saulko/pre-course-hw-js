const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

const result = [];

for (let i = 0; i < numbers.length; i++) {

  const numbersArr = [];
  for (let j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] % 2 === 1) {
      continue;
    }

    numbersArr.push(numbers[i][j]);
  }

  result.push(numbersArr);
}

console.log(result);
