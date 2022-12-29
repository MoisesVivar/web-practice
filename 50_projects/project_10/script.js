const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

generateJoke()

btn.addEventListener('click', ()=> generateJoke())

async function generateJoke(){
    const resp = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await resp.json()
    jokeEl.innerHTML = data.joke
}


// Using the .then sintax

// function generateJoke(){
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// }