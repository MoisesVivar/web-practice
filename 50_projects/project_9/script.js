const audios = document.querySelectorAll('audio')
const buttons_container = document.querySelector('#buttons')
var audio_playing = ""

audios.forEach(audio => {
    let btn = document.createElement('button')

    btn.classList.add('btn')
    btn.innerText = audio.id
    buttons_container.appendChild(btn)

    btn.addEventListener('click', ()=>{
        if (audio_playing != ""){
            let cur_audio = document.getElementById(audio_playing)
            cur_audio.pause()
            cur_audio.currentTime = 0;
        }
        audio_playing = audio.id
        audio.play()
    })

    audio.addEventListener('ended', ()=>{
        audio_playing = ""
    })
})
