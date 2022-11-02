const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

let cur_active = 1;

next.addEventListener('click', () =>{
    if (cur_active < circles.length){
        cur_active++
        circles[cur_active-1].classList.add('active')
        progress.style.width = (cur_active-1)*100/(circles.length-1) + '%'
    }
    next.disabled = cur_active == circles.length ? true : false
    prev.disabled = cur_active == 1 ? true : false
})

prev.addEventListener('click', () =>{
    if (cur_active > 1){
        circles[cur_active-1].classList.remove('active')
        cur_active--
        progress.style.width = (cur_active-1)*100/(circles.length-1) + '%'
    }
    next.disabled = cur_active == circles.length ? true : false
    prev.disabled = cur_active == 1 ? true : false
}) 