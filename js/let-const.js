// breakup with var
// no more use of var

let money = 25;
money = 35;
console.log(money);

const bird = "jaan Paki";
// bird = "moyna Paki";
const message = bird + 'potas potas'
console.log(message);

const numbers = [12, 89, 54, 74];
// numbers = [77, 99, 455,]
numbers.push(45);
numbers[1] = 7;
console.log(numbers);

const student = {
  name: "mahabub",
  address: "netrokona",

};
// student = {name: "mofazzal"}
student.name = "mofazall";
console.log(student);

let sum = 0;
for(let i = 0; i < numbers.length; i++){
  const number = numbers[i];
  sum = sum + number;
}
console.log(number)