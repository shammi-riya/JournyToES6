// jokhon kono peramitar a arguments set kora hoinh,, tokhon default heseve, peramittaer set korai holo dafult peramittaers

// option 1
function add(num1 ,num2){
    if(num2 == undefined){
        num2 = 5;
    }
 const result = num1 * num2
 console.log(result);
}
add(5);

// option 2
function adds(num1 ,num2){
    num2 = num2 || 7
 const result = num1 * num2
 return result;
}
const maltiply = adds(5);
console.log(maltiply);

// opton 3---- es6
// defalute hisebe number.,string, object  infect funtion kao pathate pari
function adds(num1 ,num2 = getSum()){
 const result = num1 + num2
 return result;
}
const sum= adds(5);
console.log(maltiply);

function getSum(){
  let a = 5
  b = 10;
 const output = a+ b;
 return output

}

