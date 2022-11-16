const $percentage = document.getElementById("percentage")
const $img = document.querySelector(".bg-img")

let i = 0;
let max = 100
let delta = 50

let intervalId = setInterval(()=>{
    $percentage.innerText = `${i}%`
    $percentage.style.opacity = 1 - i/max
    $img.style.filter = `blur(${max-i}px)`
    if (i < max)
        i++
    else
        clearInterval(intervalId)    
}, delta)