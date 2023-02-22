// const myArray = [12,2,4,6,3]
// const makeDuble =(n)=> {
//  let newNumber = []
//   for(const number of n){
//     const dubles = duble(number)
//     newNumber.push(dubles)
//   } 
//   return newNumber

// }
// const duble=(num) => num*2

// const makeDoubleDirct = myArray.map(n=>n*2)
// console.log(makeDoubleDirct);
// const makeDoubleFuntion = myArray.map(duble)
// console.log(makeDoubleFuntion);
// const derect =  [12,2,4,6,3].map(n=> n*2)
// console.log(derect);

// const result = makeDuble(myArray)
// console.log(result);



// const myFriends=["Rakib","Riya Moni","kanal","kabbo","Taniya"];
// let newFriend = []
// for(const friend of myFriends){
//     if(friend.length>newFriend.length){
//        newFriend = friend
//     }
// }
// console.log(newFriend);

const myFriends=["Rakib","Riya Moni","kanal","kabbo","Taniya"];
const getBigFriends =(myFriends)=>{
    let newFriend = []
    for(const friend of myFriends){
        if(friend.length>newFriend.length){
           newFriend = friend
        }
    }
    console.log(newFriend);
    return newFriend;
}
const result = getBigFriends(myFriends)
console.log(result);

const friendsFrisletter = myFriends.map(friend=> friend[0]);
const friendsLength = myFriends.map(f=>f.length)
console.log(friendsFrisletter,friendsLength);


const myProduct = [
    {id:1 , name:"mobile" , prize :10000},
    {id:2 , name:"laptop" , prize :9000},
    {id:3 , name:"monitor" , prize :20000},
    {id:4 , name:"watch" , prize :5000}
]

const productName = myProduct.map(p=>p.name)
console.log(productName);

  








// const friends = myFriends.map(friend=>friend[0]);
// const friends2 = myFriends.map(friend=>friend.length);
// console.log(friends,friends2);

