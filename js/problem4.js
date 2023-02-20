const findMax = (array1, array2) => {
const combineTwoArray = [...array1, ...array2];
const maxNumber = Math.max(...combineTwoArray);
return maxNumber

};

const array1 = [4, 51, 12, 45, 13];
const array2 = [7, 41, 4, 2, 75];
const result = findMax(array1, array2);
console.log(result);

// const getSum =(a, b = 9) => a + b;
// const results =(getSum(2, 7));
// console.log(results);

// const y = x => x*x; 
// const z = y(5);
// console.log(z);

// const name = "Hero";
// const greeting = 'Welcome Home!'+' '+ name;
// const greetings = `Welcome Home!${name}`;
// console.log(greetings);

// const division = (num1, num2) => num1 / num2;
// console.log(division(4,2));

const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima'];
// const arrasy2 = [...nayikas];
// console.log(arrasy2, nayikas);

const numbers = [10, 55, 85, 89, 54, 74, 5543, 456554, 75654];
// const bigestNumber = Math.max(...numbers);
// console.log(bigestNumber);

// const cars = ['toyota', 'honda', 'mercedes'];
// const newCars = [...cars, 'ferrari'];
// console.log(newCars)

// const combineArray = [...nayikas, ...numbers];
// console.log(combineArray)