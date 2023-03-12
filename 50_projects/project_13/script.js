const $textarea = document.querySelector('textarea')
const $tagsContainer = document.querySelector('#tags')
var choices = []

$textarea.addEventListener('keyup', (event)=>{
    if (event.key == 'Enter' && choices.length > 0){
        $textarea.value = ""
        get_random_choice(choices)
        choices = []
    }
    else{
        choices = $textarea.value.split(',')
        var tags = ''
        choices.forEach((choice)=>{
            if (choice.trim() != "")
                tags += "<span class='tag'>"+ choice +"</span>"
        })
        $tagsContainer.innerHTML = tags
    }
})

function get_random_choice(){
    var cycles = 30, count = 0, delta = 100

    var randomizer = setInterval(()=>{
        var tags = document.querySelectorAll(".tag")
        var $item = tags[Math.floor(Math.random()*tags.length)]
        $item.classList.add('highlight')
        if (count == cycles)
            clearInterval(randomizer)
        else{
            setTimeout(() => $item.classList.remove('highlight'), 100)
            count ++
        }
    }, delta)
}