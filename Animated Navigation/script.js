const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const navList = document.getElementById('nav-list')
const navListItems = document.querySelectorAll('nav-item')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  if (navList.classList.contains('active')) {
    setTimeout(() => {
      navList.classList.toggle('active')
    }, 500)
  }
  else {
      setTimeout(() => {
          navList.classList.toggle('active')
      }, 100)
  }
  
  
})
