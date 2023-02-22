// class Car {
//     constructor(name, year){
//          this.name = name;
//          this.year = year;
//     }

//     play(){
//         console.log(`${this.name} is playing`);
//     }
// }

// const car1 = new Car("toueta" , 2017)
// const car2 = new Car("BMW" , 2013)
// const car3 = new Car("Crish" , 2014)
// car1.play()

// // console.log(car2);




// // opton1

// function Person(name , age){
//    this.name = name;
//    this.age = age;

   
// }
// Person.prototype ={
//     eat : function(){
//     console.log(`${name} is eating now.${name} is ${age} years old`);
//      }
    
// }

// const sakib = new Person("Sakib" ,20)
// console.log(sakib);
// const Rakib = new Person("Rakib",12)
// console.log(Rakib);

// Rakib.Person.eat()



// class Instractor{
//    name;
//    designation = "web course instractor";
//    team ="web team";
//    location;
//    constructor(name, location){
//         this.name = name;
//         this.location = location;
//    }
//    startSupportSasson(time){
//      console.log(`today start the support sassaon ${time}`);
//    }
//    createQuize(modiul){
//     console.log(`please create quiz for modiul ${modiul}`);
//    }

// }

// const Riya = new Instractor("Riya","pabna");
// const jimu = new Instractor ("jimu" ,"dhaka")
// Riya.startSupportSasson(10);
// jimu.createQuize(2)

// console.log(Riya ,jimu);







// advance........................

class Comons {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
   }
   provideFeedBack(){
    console.log(`thankyou for your feedback ${this.name}`);
   }
}



class Instractor extends Comons{
       designation = "web course instractor";
       team ="web team";
       constructor(name, location){
            super(name,location)
       }
       startSupportSasson(time){
         console.log(`today start the support sassaon ${time}`);
       }
       createQuize(modiul){
        console.log(`please create quiz for modiul ${modiul}`);
       }
    
    }




    class Developer extends Comons{
           designation = "web course instractor";
           team ="web team";
           teach;
           constructor(name, location ,teach){
                super(name,location)
                this.teach = teach;
           }
           developFeature(feature){
            console.log(`please develop the ${feature}`);
           }
        
        }
        
    class Jobplacemeat extends Comons{
           designation = "web course instractor";
           team ="web team";
           regiun;
           constructor(name, location ,regiun){
                super(name,location)
                this.regiun = regiun
           }
         
           providearesumi(feature){
               console.log(`please relase the virsion ${feature}`);
           }
           prepareStudent(virsion ){
            console.log(`please relase the virsion ${virsion}`);
           } 
        
        }

        const Riya = new Developer("riya","Indiya","web")
        console.log(Riya);
        Riya.provideFeedBack()
        
    
    
