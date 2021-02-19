const projectLinkDivs = document.querySelectorAll('.link-div')
const projectInfos = document.querySelectorAll('.project-info')

projectLinkDivs.forEach((project, idx) => {
  project.addEventListener('mouseover', () => {
    showProjectInfo(idx)
  })
})

function showProjectInfo(idx) {
  projectInfos[idx].classList.toggle('show-info')
}
