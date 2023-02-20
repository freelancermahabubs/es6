const max = Math.min(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);

const number3 = [...numbers];
const number4 = [785, 4855, ...numbers, 111, 44];
console.log(number4)