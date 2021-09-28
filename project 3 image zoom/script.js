const fullimg=document.querySelector('.full');
const smalling=document.querySelectorAll('.gallery img');
const modal=document.querySelector('.modal');


smalling.forEach(function(item) {
  item.addEventListener('click',function(){
    modal.classList.add('open');
    fullimg.classList.add('open');


const original=item.getAttribute('alt');
fullimg.src=`img/full/${original}.jpg`;
});
});
modal.addEventListener("click",function(e){
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
    fullimg.classList.remove('open');
  }
});
