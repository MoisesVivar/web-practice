const $boxes = document.querySelectorAll(".box")
const boxHight = $boxes[0].offsetHeight
const boxMargin = parseInt(window.getComputedStyle($boxes[0]).margin.split('px')[0])
const trigerBottom = window.innerHeight - boxHight - 2*boxMargin

showHideBoxes()

window.addEventListener('scroll', showHideBoxes)

function showHideBoxes(){
    $boxes.forEach((box, index) =>{
        var boxTop = box.getBoundingClientRect().top
        if (boxTop - boxMargin < trigerBottom)
            box.style.transform = `translateX(0)`
        else if (index%2)
            box.style.transform = `translateX(400%)`
        else if (index%2 == 0)
            box.style.transform = `translateX(-400%)` 
    })
}