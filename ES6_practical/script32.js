function divisors(integer) {
  
    let res=  [];
    
    for(let i =0;i<integer;i++){
      if(i!=1 && integer % i === 0){    
        res.push(i)
      }
    }
    
    
    if(res.length === 0)
    {
        return `${integer} is prime`
    }
    
    return res;