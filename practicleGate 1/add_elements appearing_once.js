function addUniqueElements(arr){
    let uni=[];
    let sum=0
    let noUni=[];
    const words=String(arr).split(',').join('')
     const newAr=Array.from(words)
    newAr.forEach((el)=>{
        if(words.split(el).length>2){
            noUni.push(el)
        }
        else{
            uni.push(el) 
        }
    })
 for (let i=0;i<uni.length;i++){
    sum+= Number(uni[i]);
 }
 return sum;
}