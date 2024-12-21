let countBtn=document.querySelector('.btn'),
resetBtn=document.querySelector('.reset'),
input=document.querySelector('.input');
let count=0;
countBtn.addEventListener('click',()=>{
	count++;
	input.value=count;
})
resetBtn.addEventListener('click',()=>{
	count=0;
	input.value=count;
})