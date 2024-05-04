let button=document.querySelector('#button');
let parent=document.querySelector('#parent');
button.addEventListener('click',(e)=>{
    let ele =document.createElement('p');
ele.textContent='kevin !!!!'
  parent.appendChild(ele);
  
})
