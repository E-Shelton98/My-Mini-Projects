//set array of possible faces on a die.
const faces = [
  'show-one',
  'show-six',
  'show-four',
  'show-three',
  'show-two',
  'show-five',
]

//get die one element.
const dice = document.querySelectorAll('.die')
const rollBtn = document.getElementById('roll-btn')
const dieFaces = document.querySelectorAll('.die-face')
const counterSpan = document.getElementById('counter')

let lockedDieValue = []
let counter = 1
counterSpan.innerHTML = counter

//give cubes a random face at load.
dice.forEach((die) => {
  die.classList.add(faces[Math.floor(Math.random() * faces.length)])
})

//roll unlocked Dice on click
rollBtn.addEventListener('click', () => {
  counterSpan.innerHTML = counter
  if (counter < 3) {
    rollDice()
    counter++
  } else if (counter === 3) {
    rollDice()
    counter = 1
  }
})

function rollDice() {
  //Create array Unlocked Dice from nodeList cubes
  let unlockedDice = Array.from(dice)

  //determine locked dice and remove from unlockedCubes array
  dice.forEach((die) => {
    for (let i = 0; i < die.children.length; i++) {
      let face = die.children[i]
      if (face.classList.contains('lock')) {
        for (let i = 0; i < unlockedDice.length; i++) {
          if (unlockedDice[i] === die) {
            unlockedDice.splice(i, 1)
            i--
          }
        }
      }
    }
  })

  //Set interval and "roll" dice every 800 milliseconds by adding/removing classes.
  const interval = setInterval(() => {
    unlockedDice.forEach((die) => {
      die.classList.remove(
        'show-one',
        'show-six',
        'show-four',
        'show-three',
        'show-two',
        'show-five'
      )
      die.classList.add(faces[Math.floor(Math.random() * faces.length)])
    })
  }, 800)

  //Stop dice roll after 7 seconds
  setTimeout(() => {
    clearInterval(interval)
  }, 7000)
}

dieFaces.forEach((face) => {
  face.addEventListener('click', () => {
    face.classList.toggle('lock')
    if (face.classList.contains('lock')) {
      lockedDieValue.push(face.classList[1])
    } else {
      index = lockedDieValue.indexOf(face.classList[1])
      if (index > -1) {
        lockedDieValue.splice(index, 1)
      }
    }
    console.log(lockedDieValue)
  })
})
