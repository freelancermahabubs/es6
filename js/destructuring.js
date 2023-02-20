// Object destructuting
const fish = {
  name: "king Hilsa",
  address: "Chandpur",
  color: "silver",
  phone: "0147524654",
  price: 4545
};

const phone = fish.phone;
const color = fish.color;
const price = fish.price;
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const {age, name} = {name: "mahabub", age: 78, profession: "programer"};
console.log(age, name);

const {address} = fish;
console.log(address);

// array Destructuring
const [first, second, third] = [546, 456, 87, 94];
console.log(first, second, third);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
  return ['alim', 'halim'];
};
const [bab, chaca] = getNames();
console.log(chaca, bab)