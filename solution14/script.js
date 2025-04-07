const numbers = [10, 45, 32, 67, 89, 21];

const maxNumber = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);

console.log(maxNumber);
