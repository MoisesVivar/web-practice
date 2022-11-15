const $button = document.querySelector(".container i");
const $container = document.querySelector(".container");

$button.addEventListener('click', ()=>{
    $container.classList.toggle('show')  
})