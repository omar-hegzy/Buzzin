let nextBtn =document.getElementById('next');
let prevBtn =document.getElementById('prev');


let lastPosition= list.length -1;
let active =0;






nextBtn.onclick =function(){

  const widthItem =document.querySelector('.item').offsetWidth;
  document.getElementById('cards').scrollLeft += (widthItem);

}

prevBtn.onclick =function(){
  let newValue= active - 1 < 0 ? lastPosition  : active - 1;
  const widthItem =document.querySelector('.item').offsetWidth;
  document.getElementById('cards').scrollLeft -= (widthItem);
  
}

