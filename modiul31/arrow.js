// multyple peramittar
const getSum = (num1,num2)=> num1+num2;
const result =  getSum(1,6);
console.log(result);

// single peramittar frist backer use na korlao hobe
const getNumber = num1 => num1

const result2 = getNumber(5)
console.log(result2);

// peramitar nai
const single = ()=> 1.3;
console.log(single());


// funtion er body te multiple line likhte carllbacket use korte hobe
// and return likhhe hoi
// ex:

const getData=(num1,num2,num3,num4)=>{
    const sum = num1 + num2;
    const avareg = (sum + num3  + num4)/2
    return avareg

}
const output = getData(2,3,4,5);
console.log(output);