const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const navList = document.getElementById('nav-list')
const navListItems = document.querySelectorAll('nav-item')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  setTimeout(() => { navList.classList.toggle('active') }, 350)
})
