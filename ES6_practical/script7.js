function sentence(arrayOfObjects) {
    let res=[]
    for(let item of arrayOfObjects){
        for(let [key,value]of Object.entries(item)){
       res.push([parseInt(key),value]);
     } 
    }
    res.sort((a,b)=>a[0]-b[0])
      return res.map(value=>value[1]).join(' ') // return '';
   }
   const arrayOfObjects= [ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ];
   console.log(sentence(arrayOfObjects))