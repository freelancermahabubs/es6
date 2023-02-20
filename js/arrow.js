// function declaration 

// function add(first, second){
//   const total = first + second;
//   return total
// };
//  document.getElementById('btn-add').onclick = function addBG(){

//  }

const number = 56;

// function Expression 
const add1 = function add1(first, second){
  const total = first + second;
  return total
};

// function expression with anonymous function
const add2 = function(first, second){
  const total = first + second;
  return total
};



function add4(first, second){
  return first + second;
};
const results = add4(54, 54)
console.log(results);

const add5 = function(first, second){
  return first + second
};

// this is a arrow function 
const add6 = (first, second) => first + second;

const result = add6(50, 50);
console.log(result);


