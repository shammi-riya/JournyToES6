// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index},    returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);



// const numbers = [2,2,2,5];

// // option1
// const sum = numbers.reduce(func)
// function func(accumulator,carrentValu){
//   return accumulator + carrentValu
// }
// console.log(sum);

// option2

// const sum2 = numbers.reduce(function(accoumolator,carentValu){
//     return accoumolator + carentValu
// })
// console.log(sum);


// apply arrow funtion
// option3

// const sum3= numbers.reduce((acc,valu)=>{
//    return acc + valu
// })
// console.log(sum3);





// get largest Number
const numbers2 = [2,2,45,2,5,7];
const bigs = numbers2.reduce((accumulator,carrentvalu)=>{
    if(accumulator>carrentvalu){
       return accumulator;
    }else{
        return carrentvalu
    }
   
})
console.log(bigs);


const min = numbers2.reduce((acc,valu)=> Math.min(acc,valu));
console.log(min);





const product =[
    {
        name:"book",
        price :200,
        quantity : 3
    },
    {
        name:"pencil",
        price :40,
        quantity : 1
    },
    {
        name:"Rabar",
        price :20,
        quantity : 3
    }
   
]
// use arrow funtion
const totalPrice = product.reduce((total,item)=>{
  const totals = item.price * item .quantity;
  return total + totals;
},0)
console.log(totalPrice);

// use regular funtion

const totalP = product.reduce(myFunction,0);
function myFunction(total,item){
return total +(item.price*item.quantity)
}
console.log(totalP);

