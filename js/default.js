// function add(first, second){
//   console.log(first, second);
//   // second = second || 0;
//   // if(second === undefined){
//   //   second = 0
//   // }
//   const total = first + second;
//   return total;
// }
function add(first = 0, second = 0){
  const total = first + second;
  return total;
}
const result = add();
console.log(result);

function fullName(firstName, lastName = "chowdhury"){
  const name = firstName + ' ' + lastName
  return name
}
const name = fullName("Galam");
console.log(name);