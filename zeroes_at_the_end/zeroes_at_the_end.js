function moveZeros(arr) {
    const noZ=[];
    const z=[];
    arr.forEach((el)=>{
  el===0?z.push(el):noZ.push(el)
  })
    return[...noZ,...z]
  }