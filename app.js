// Start header
let toggleBtn =document.getElementById('toggle_btn');
let toggleBtnIcon =document.getElementById('toggle_btn_Icon');
let dropDownMenu =document.getElementById('dropdown_menu');
toggleBtn.onclick = async function() {
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

nextButton.onclick = async function(){
    showSlider('next');
}
prevButton.onclick = async function(){
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
    }, 0)
}
seeMoreButtons.forEach((button) => {
    button.onclick = async function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        backButton.style.display="block";

    }
});
backButton.onclick = async function(){
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

const featureobserver =new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('feature-show');
      }
  });
});

const feature1= document.querySelectorAll('.feature-1-hide');
const feature2= document.querySelectorAll('.feature-2-hide');
feature1.forEach((el) => featureobserver.observe(el));
feature2.forEach((el) => featureobserver.observe(el));

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

