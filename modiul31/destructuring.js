
// array destructring
let a, b, rest;

[a,b] = [2,5]
console.log(a,b);
[a,b,...rest]= [ 3,6,9,7,4,3]
console.log(rest);
console.log([a,b,...rest]);


const friutes = ["mangoo","apple"];
let [frist,second] = friutes
// [frist,second] = [second,frist] 
console.log([frist,second] = [second,frist] );

// console.log(frist,second)


const edibles = ["food", "fruits"];
let [positionOne, positionTwo] = edibles;
[positionOne, positionTwo] = [positionTwo, positionOne];
console.log(positionOne, positionTwo);



// destructuring obj

const develop ={
    fontEnd:"react",
    backend : "nood",
    database : "mongodib"
}
// const {fontEnd,backend} = develop;
// console.log(fontEnd,backend);

const {fontEnd: course1 ,backend: course12} = develop

console.log(course1 ,course12);


const person = {
    name : "riya",
    year : 22,
    favoritelanguge: "jacvascript"   
}

const {name ,year} = person; 
console.log(name,year);


const me ={
   fristname : "riya",
   lastName  : "moni"
}

let {fristname,lastName , fullName = `${fristname} ${lastName}`} = me
console.log(fullName);



// *****************

const ajax ={
    adress : "pabna",
}
const {adress:parmanentAdress} = ajax;
console.log(parmanentAdress);


// **************

const user ={
    name : "riya Moni",
    city : "pabna",
    collage : {
        name:"pabna polytechnic institute",
        collageDescription:{
          CI : "altaf Uddin",
          favoriteTeacher : "nurul"
        },
        department : "computer",
        shift : "second",
        Roll: 120452
    },
    email: "shammiriya455@gmail.com"
}
console.log(user.collage.collageDescription.favoriteTeacher);

// const {collage:{collageDescription:{favoriteTeacher}}} = user
// console.log(favoriteTeacher);



const getUserData=()=>{
    return{
        name : "riya Moni",
        city : "pabna",
        collage : {
            name:"pabna polytechnic institute",
            collageDescription:{
              CI : "altaf Uddin",
              favoriteTeacher : "nurul"
            },
            department : "computer",
            shift : "second",
            Roll: 120452
        },
        email: "shammiriya455@gmail.com"
    }
    
    
}
const {collage:{collageDescription:{favoriteTeacher}}} = getUserData()
console.log(favoriteTeacher);


const findFavorite=[
    {
        name:"riya Moni",
        favoriteFriutes:"dub",
        year : 22

    
    },
    {
        name:"Rimi",
        favoriteFriutes:"licu",
        year :10
    
    },
    {
        name:"Mim",
        favoriteFriutes:"mangoo",
        year : 16
    
    }

]
console.log(findFavorite)
for(const {name,year} of findFavorite){
  console.log(`${name} is ${year} old`);
}





