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


let list = document.querySelectorAll('.list .item');

list.forEach(item => {
    item.addEventListener('click', function (event){
        if(item.classList.contains('active')){
            if(event.target.classList.contains('dropdown') || event.target.classList.contains('close') ){
                item.classList.remove('active');
            }
        }else{
            item.classList.add('active');
        }
    })
})