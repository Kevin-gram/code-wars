let k=new Promise(function(resolve,reject){
    if(1===2){
        setTimeout(()=>resolve('this has passed the resolution'),1000);
    }
   else{
      setTimeout(()=>reject('this has not passed the resolution'),3000);
   }
    
})
  k.then((res)=>{
      console.log('kevin doing magic')
  })
  k.catch((error)=>{
      console.log("kevin not doing !!!!")
  });
  