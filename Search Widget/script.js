let context = document.getElementById('content')
let instance = new Mark(context)

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const exactly = document.getElementById('exactly')
const wilds = document.getElementById('wildcards')
let exactlyCheck = ''
let wildcards = ''

btn.addEventListener('click', () => {
  input.focus()
  let keyword = input.value
  if (exactly.checked) {
    exactlyCheck = 'exactly'
  } else {
    exactlyCheck = 'partially'
  }
  if (wilds.checked) {
    wildcards = 'enabled'
  } else {
    wildcards = 'disabled'
  }
  let options = {
    accuracy: exactlyCheck,
    wildcards: wildcards,
  }
  if (search.classList.contains('active')) {
    instance.unmark()
    instance.mark(keyword, options)
  }
  search.classList.toggle('active')
})
