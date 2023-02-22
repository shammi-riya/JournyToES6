
// practice-1 
// convert odd to  even
const odds = [1, 3, 5, 7, 9]
const even =odds.map(odd =>odd+1);
// console.log(even);








// practice pblem 2
// 10 diya bivajjo numbers using filter
const numbers = [33,50,78,79,101,30];
const getDevisionNumbers = numbers.filter(number=> number %10 == 0)
console.log(getDevisionNumbers);

// / practice pblem 2
// 10 diya bivajjo numbers using find

const getDivisionNumber = numbers.find(number=> number %10 == 0)
// console.log(getDivisionNumber);







// practice3
// sum of the array using reduce
const sumNumbers = [1,9,17,22];
const sum = sumNumbers.reduce(function(accoumolator,carrentValue){
   return accoumolator + carrentValue
})

// using arrow fiuntion
const arrow= sumNumbers.reduce((prev,newNumber)=>{
    return prev + newNumber;
})


// use for loop
let sum2 =0;
for(let i = 0; i<sumNumbers.length;i++){
    sum2 = sum2 + sumNumbers[i];
   
}
console.log(sum2);









// practice pblem4
// array thaka age gulare sum korte kobe using reduce

const people =[
    {name:"mena" ,age:20},
    {name:"Rena" ,age:15},
    {name:"Sucorita" ,age:22}
]

const getSum = people.reduce((total,valu)=>{
    const totalage = valu.age
    return total + totalage
},0)
console.log(getSum);


// use for loop;
let sum3 = 0
for(const person of people){
  sum3 = person.age +sum3
}
console.log(sum3);






// practice pblem-5
// object thaka age k  log lorte hobe

const student ={
    name : "tom",
    age : 26
}
console.log(student.age);








// practice pblem-6
// object thaka city k  log lorte hobe

let data ={
  
        location : [
            {
            latitude : '34.5 , 37.8',
            longAtiube : '98.77, 58.7',
            city: "hydarbad",
            country :'indiya'
            }
    ]
    
}

console.log(data.location[0].city);

