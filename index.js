let toggleBtn = document.querySelector(".menu-hamburguesa")
let toggleBtnIcon = document.querySelector(".menu-hamburguesa i")
let dropDownMenu = document.querySelector(".menu-desplegable")

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")
console.log(isOpen)
    toggleBtnIcon.classList = isOpen    
    ? "fa-solid fa-xmark "
    : "fa-solid fa-bars"
}

