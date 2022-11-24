const sliderLines = document.querySelectorAll('.slider-line');
let offset = 0;
const slider = document.querySelectorAll('.slider-box');
slider.forEach(el =>{
   el.addEventListener('click', (e)=>{
      let sl = e.currentTarget;
      let btn = sl.closest('.slider-box').querySelector('button')
      let sliderLine = btn.closest('.slider-box').querySelector('.slider-line')
      let position;
      position = -256;
      let next = btn.classList.contains('next');
      let prev = btn.classList.contains('prev');
      if(next){
         position = position +256;
         if(position > 1536){
            position = 0;
         }
         sliderLine.style.left = -position +'px';
      }
      if(prev){
         offset = offset -256;
         if(offset < 0){
            offset = 1536;
         }
         sliderLine.style.left = -offset +'px';
      }
      })
})
