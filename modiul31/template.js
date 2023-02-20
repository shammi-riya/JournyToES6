// option 1
const multiline = 'hello how are you \n'+
"fine thank you \n"+
"nice to meet you";

console.log(multiline);

// option2 -------es6

const multiline2 = `hello how are 
 how old are you
 i love my parents `;

 console.log(multiline2);



//  option 1

const a = 3;
const b = 4;
const result = a + b;

const result3 = ("a = ", a ,"b=" , b ,"result = " , result);
console.log(typeof result3);

// option 2 -----------es6

const x = 3;
const y = 4;
const result2 = a + b;
const result4 =(` a = ${x} b = ${b} result = ${result2}`);
console.log(typeof result4);