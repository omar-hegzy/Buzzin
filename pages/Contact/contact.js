
// Start header
let toggleBtn =document.getElementById('toggle_btn');
let toggleBtnIcon =document.getElementById('toggle_btn_Icon');
let dropDownMenu =document.getElementById('dropdown_menu');
let solutions =document.getElementById('sol');
let dropDownSol =document.getElementById('dropdown_sol');
solutions.onclick= function() {
  dropDownSol.classList.toggle('open')
}

toggleBtn.onclick =function() {
  dropDownMenu.classList.toggle('open')
  dropDownSol.classList.remove('open');
  const isOpen =dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList =isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}
// ENd header

const inputs= document.querySelectorAll(".contact-input");

inputs.forEach(ipt =>{
  ipt.addEventListener("focus", ()  =>{
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", ()  =>{
    if(ipt.value == ""){
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});
