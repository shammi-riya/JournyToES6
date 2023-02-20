const avareg=(numbers)=>{
    let sqrNumbers = []
    let sum = 0
    for(const number of numbers){
      let sqr = Math.pow(number ,2);
      sqrNumbers.push(sqr) 
      console.log(sqrNumbers);
      
      for(const sumNumber of sqrNumbers){
         sum =sumNumber + sum
        
      }
      const avareg = sum / sqrNumbers.length
      return avareg;
    
    } 
    
  }
  const result = avareg([2,2]);
  console.log(result);
  
  