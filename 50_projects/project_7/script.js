const left = document.querySelector(".split.left")
const right = document.querySelector(".split.right")

left.addEventListener('mouseenter', ()=> left.style.flex = 3 )
left.addEventListener('mouseleave', ()=> left.style.flex = 1 )

right.addEventListener('mouseenter', ()=> right.style.flex = 3 )
right.addEventListener('mouseleave', ()=> right.style.flex = 1 )

