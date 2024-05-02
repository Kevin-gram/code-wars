function longestWord(stringOfWords) {
  const words =stringOfWords.split(' ')
  if(words.length===1){return words[0]}
  let leng=words[0];
for(let i=0;i<words.length;i++){
if(words[i].length>leng.length){
  leng=words[i];
}
  else  if(words[i].length===leng.length){
    leng=words[i];
  }
}
  return leng
}
