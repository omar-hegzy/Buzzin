// Start header
let toggleBtn =document.getElementById('toggle_btn');
let toggleBtnIcon =document.getElementById('toggle_btn_Icon');
let dropDownMenu =document.getElementById('dropdown_menu');
toggleBtn.onclick =function() {
  dropDownMenu.classList.toggle('open')
  const isOpen =dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList =isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}
// ENd header

//Start Carousel
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 200)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        backButton.style.display="block";

    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    backButton.style.display="none";
}
//End Carousel

//Start Video

const observer =new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      }
  });
});

const hiddenElements= document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// End Video


//Start Features
let nextBtn =document.getElementById('fnext');
let prevBtn =document.getElementById('fprev');
let lastPosition= list.length -1;
let active =0;

nextBtn.onclick =function(){
  const widthItem =document.querySelector('.Features-item').offsetWidth;
  document.getElementById('fcards').scrollLeft += (widthItem);
}
prevBtn.onclick =function(){
  let newValue= active - 1 < 0 ? lastPosition  : active - 1;
  const widthItem =document.querySelector('.Features-item').offsetWidth;
  document.getElementById('fcards').scrollLeft -= (widthItem);
}
const observerR =new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting ){
      entry.target.classList.add('show-r');
      }
  });
});
const hiddenElementsR = document.querySelectorAll('.hidden-r');
hiddenElementsR.forEach((el) => observerR.observe(el));
const observerL =new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show-l');
      }
  });
});
const hiddenElementsL= document.querySelectorAll('.hidden-l');
hiddenElementsL.forEach((el) => observerL.observe(el));

// End Features
//Start Card
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
//End Cards

//Start logos
var copy = document.querySelector(".slider").cloneNode(true);
document.querySelector(".hover").appendChild(copy);
// ENd logos

// Start communities
var copy = document.querySelector(".c-slider").cloneNode(true);
document.querySelector(".c-hover").appendChild(copy);
// ENd communities

