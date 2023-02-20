const averageOfSquares = (numbers) => {
const sumOfSquares = numbers.reduce((a, b) => a + b ** 2, 0);
console.log(sumOfSquares)
const avg = sumOfSquares / numbers.length;
// return avg;
}
const numbers = [14, 41, 441, 84, 41];
const result = averageOfSquares(numbers);
console.log(result)