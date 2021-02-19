const progress = document.getElementById('progress')
const progressBar = document.getElementById('progress-bar')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progressContainerBar = document.getElementById('progress-container-bar')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
    progressBar.style.width = '0%'
  } else if (currentActive === circles.length) {
    next.disabled = true
    progressBar.style.width = '100%'
  } else {
    prev.disabled = false
    next.disabled = false
  }

  if (progressBar.style.width === '100%') {
    let node = document.createElement('p')
    let textNode = document.createTextNode('Progress Complete!')
    node.appendChild(textNode)
    node.classList.add("progress-statement")
    
    setTimeout(() => {progressContainerBar.appendChild(node)}, 4000)
    
  }
}
