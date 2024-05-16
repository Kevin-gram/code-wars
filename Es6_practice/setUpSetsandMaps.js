const unique=(ids)=>{
    const unique=new Set(ids)
   return unique;
   }
   const ids=[1,2,3,3,4,5,5,6,7,8,'d','g']
   console.log(unique(ids))