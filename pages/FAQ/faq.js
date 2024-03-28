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
    });
});


const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".acc-description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".acc-description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}