const calculateArea=(width, height)=>{
    let result= width*height;
    return  result%2===0?`${result} is Even`:`${result} is Odd`;
}
console.log(calculateArea(5, 7))