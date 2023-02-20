/*
let: it resasign;
const : do not reasign;
var :  it reasaign


const : puro man k change korte parbona but partial ekta man k update kora jaba;const block scop;
let: block scop
var : block scop nh;


const : re declare kora jainh;
let: let can be updated but not redeclare;
var : redeclare kora jai;






*/


let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
   
}
console.log(greeting); // "say Hi"



let fruites = "mango";
console.log(fruites);

// obj use const
const greetings = {
    message: "say Hi",
    times: 4
}
console.log(greetings);

// greetings = {
//     call: "say Hi",
//     times: 4             its err
// }
// console.log(greetings);

greetings.message = " hello js"
console.log(greetings);

// sob obj er valu k update korta pari const dia
