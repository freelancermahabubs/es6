// 3 way to declary string

const person = 'Adam Sandler';
const parson2 = "Ben White";
const parson3 = `Donald Trump`;
const multiline = 'First Line Text \n' + 
'second line of code \n' +
'Third line of code \n' +
'fourth line of code \n';
// console.log(multiline);

const newMultiline = `First line of Text
Second line of text
Third line of String
Fourth line of Text
`;
// console.log(newMultiline);

const a = 20; 
const b = 30;
const nums = [45, 78 , 51, 24, 85]
const summary  = 'sum of: ' + a + ' and: ' + b + ' is: ' + (a+b);
// console.log(summary);

const newSummary = `sum of: ${a} and ${b} is: ${a+b}`;
console.log(newSummary);