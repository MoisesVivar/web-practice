const color_area = document.querySelector(".color-area")
const option_buttons = [].slice.call(document.querySelectorAll(".option"))
const next_button = document.querySelector(".next")

function generate_random_color(){
    let random_decimal = Math.floor(Math.random()*16777215)
    let random_hex = '000000' + random_decimal.toString(16)
    return '#' + random_hex.toUpperCase().slice(-6)
}

function assign_colors_to_options(options_array, correct_color){
    let correct_index = Math.floor(Math.random()*3)
    options_array[correct_index].innerText = correct_color
    options_array.forEach((option, index)=> {
        if(index != correct_index)
            option.innerText = generate_random_color()
    })
}

var correct_color = generate_random_color()
color_area.style.backgroundColor = correct_color
assign_colors_to_options(option_buttons, correct_color)

option_buttons.forEach(option=>{
    option.addEventListener('click',()=>{
        if(option.innerText == correct_color){
            option.classList.add('correct')
            next_button.disabled = false
        }
        else
            option.classList.add('incorrect')
    })
})

next_button.addEventListener('click',()=>{
    correct_color = generate_random_color()
    color_area.style.backgroundColor = correct_color
    assign_colors_to_options(option_buttons, correct_color)
    option_buttons.forEach(option => option.classList.remove('correct', 'incorrect'))    
    next_button.disabled = true
})





