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


let sidecards= document.querySelectorAll(".side-card");
let cards = document.querySelectorAll(".article-card");
sidecards.forEach((item , i) => {
  item.onclick = function(){
    let active_side=document.querySelector(".side-card.active");
    active_side.classList.remove("active");
    item.classList.add("active");
    let active_card=document.querySelector(".article-card.active");
    active_card.classList.remove("active");
    cards[i].classList.add("active");
  }
});


