const lastDigit = (numbers) => {
  let index = numbers[0] % 10;
  for (let i of numbers) {
    if (i % 10 != index) {
      console.log(i);
      return false;
    }
  }
  return true;
};
console.log(lastDigit([10, 20, 30, 40, 100, 150, 300]));
