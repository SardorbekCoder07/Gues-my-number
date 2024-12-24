const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const closeModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const openModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
for (let i = 0; i < btnOpenModal.length; i++) btnOpenModal[i].addEventListener('click',closeModal)

btnCloseModal.addEventListener('click',openModal)
overlay.addEventListener('click',openModal)

document.addEventListener('keydown',function(event){
  if(event.key==='Escape' && !modal.classList.contains('hidden')){
    openModal();
    console.log('Escape');
  }else if(event.key==="Enter" && modal.classList.contains('hidden')){
    closeModal();
    console.log('adsd');
    
  }
})
