
// 3peramiters k multiply kora output k returhn korba
const getMultiply=(num1,num2,num3)=>{
  return num1 * num2 *num3;
}

const result = getMultiply(3,3,3);
// console.log(result);




// pblem2
// 3 lines of code 
const multilie = `
 i am web developer
 i love to code
 i love biriyani
`;
// console.log(multilie);




// pblem_3
// set default peramitter

const defaults =(num1,num2 = 4)=>{
   return `${num1} ${num2}` ;
}
const result2 = defaults(2)
// console.log(result2);





// pblem 4
// array thaka friends name nita hobe then jor num gulo return korte hobe
const getEven=(friendsName)=>{
    let newfriendList = []
   for(const friendName of friendsName){
    if(friendName.length % 2 == 0){
     newfriendList.push(friendName) 
    }else{
        friendName;
    }
   }
   return newfriendList;
}

const result3 = getEven(["Joni" , "Adnan" , "jimu" ,"sadiyaa" , "soniya","halima","raju"])
// console.log(result3);






// pblem5
// array of number squre __ sum____avvareg
const avareg=(numbers)=>{
    let sqrNumbers = []
    let sum = 0
    for(const number of numbers){
      let sqr = Math.pow(number ,2);
      sqrNumbers.push(sqr) 
      
      for(const sumNumber of sqrNumbers){
         sum =sumNumber + sum
        
      }
      const avareg = sum / sqrNumbers.length
      return avareg;
    
    } 
    
  }
  const result6 = avareg([2,2]);
  console.log(result6);
  
  






// pblemsolv-6
const destuctArry =(numbers1, numbers2)=>{
   const newArray = [...numbers1, ...numbers2]
   const maximum = Math.max(...newArray);
   return maximum;
}

const num1 = [2,4,5]
const num2 = [6,2,4,10]
const result5 = destuctArry(num1,num2)
// console.log(result5);

