const getData = {
   name:"babul vai",
   friends :["joni" ,"raju","shofik" ,"sujon"],
   like : {
     food : ["nudus","pasta","potato","ca"],
     play : ["football" ,"valiball","criket"],

   },
   study :{
       school:"shahid samaranika high school",
       collage : "pabna polytechnic institute",
       data :[
        {
         name:"sahima",
         id:101,
         rol:12
        },
        {
         name:"mahiya",
         id:101,
         rol:12
        },
        {
         name:"sakib",
         id:101,
         rol:12
        }
      ]

   },
   
  
}
console.log(getData.study.adress?.data[2].rol);

