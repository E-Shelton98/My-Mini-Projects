const panels = document.querySelectorAll('.panel')
const body = document.querySelector('body')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        body.style.backgroundImage = panel.style.backgroundImage
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

/* const container = document.querySelector('.container')

container.style.backgroundImage = 'url("https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' */