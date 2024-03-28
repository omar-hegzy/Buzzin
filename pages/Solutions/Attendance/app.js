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