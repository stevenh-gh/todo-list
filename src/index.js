import Project from './project'

const content = document.querySelector('#content')

let defaultProject = Project('Default')
let defaultProjectButton = document.createElement('BUTTON')
defaultProjectButton.innerText = defaultProject.title
content.appendChild(defaultProjectButton)