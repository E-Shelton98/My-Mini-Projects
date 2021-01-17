const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const favBtn = document.getElementById('favBtn')
const viewFavBtn = document.getElementById('viewFavBtn')
const saveFavJokes = document.getElementById('saveJokesBtn')

let favoriteJokes = []
generateJoke()

const saveFavoritesToFile = (content, filename, contentType) => {
  const a = document.createElement('a')
  const file = new Blob([content], { type: contentType })

  a.href = URL.createObjectURL(file)
  a.download = filename
  a.click()

  URL.revokeObjectURL(a.href)
}

jokeBtn.addEventListener('click', generateJoke)
favBtn.addEventListener('click', favoriteJoke)
viewFavBtn.addEventListener('click', viewFavoriteJokes)
saveFavJokes.addEventListener(
  'click',() => {
      saveFavoritesToFile(favoriteJokes, 'my-favorite-jokes.txt', 'text/plain')
  })

//USING Async/Await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

//USING .then
/* function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
} */

function favoriteJoke() {
  if (!favoriteJokes.includes(jokeEl.innerHTML)) {
    favoriteJokes.push(jokeEl.innerHTML)
  }
}

function viewFavoriteJokes() {
  jokeEl.innerHTML =
    favoriteJokes[Math.floor(Math.random() * Math.floor(favoriteJokes.length))]
}
