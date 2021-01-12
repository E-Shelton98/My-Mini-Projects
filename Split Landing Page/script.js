const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const leftBtn = document.getElementById('left-btn')
const leftHolder = document.getElementById('left-holder')
const rightBtn = document.getElementById('right-btn')
const rightHolder = document.getElementById('right-holder')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
  leftHolder.classList.remove('active')
})

leftBtn.addEventListener('click', () => leftHolder.classList.add('active'))
leftHolder.addEventListener('click', () => leftHolder.classList.remove('active'))

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
  rightHolder.classList.remove('active')
})
rightBtn.addEventListener('click', () => rightHolder.classList.add('active'))
rightHolder.addEventListener('click', () =>
  rightHolder.classList.remove('active')
)
