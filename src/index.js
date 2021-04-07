


import Todo from './todo'


const projects = document.querySelector('#projects')

// make default project
let defaultProject = document.createElement('DIV')
defaultProject.setAttribute('class', 'project')
defaultProject.setAttribute('id', 'defaultProject')
defaultProject.innerText = 'Default'

//make default project's space
let defaultProjectContent = document.createElement('DIV')
defaultProjectContent.setAttribute('class', 'content')
defaultProjectContent.setAttribute('id', 'defaultProject')
defaultProjectContent.style.display = 'none'

// todo list

let t = new Todo('test title', 'test description', '5/5/30', 5)
let todo = t
let todoDiv = document.createElement('DIV')
let todoDivExpanded = document.createElement('DIV')//expanded todo div
todoDiv.setAttribute('class', 'todo')
todoDiv.setAttribute('id', `${todo.title}`)
todoDivExpanded.setAttribute('class', 'todo')
todoDivExpanded.setAttribute('id', `${todo.title}`)


// divs for title and description

// unexpanded ver.
//========================================
let todoTitle = document.createElement('DIV')
todoTitle.setAttribute('class', 'todoTitle')
todoTitle.innerText = todo.title
todoDiv.appendChild(todoTitle)
todoDivExpanded.appendChild(todoTitle)

let todoDescription = document.createElement('DIV')
todoDescription.setAttribute('class', 'todoDescription')
todoDescription.innerText = todo.description
todoDiv.appendChild(todoDescription)
todoDivExpanded.appendChild(todoDescription)
//===========================================


//expanded ver.
let todoDueDate = document.createElement('DIV')
todoDueDate = setAttribute('class', 'todoDueDate')
todoDueDate.innerText = todo.dueDate
todoDivExpanded.appendChild(todoDueDate)

let todoPriority = document.createElement('DIV')
todoPriority = setAttribute('class', 'todoPriority')
todoPriority.innerText = todo.priority
todoDivExpanded.appendChild(todoPriority)

todoDivExpanded.style.display = 'none'
defaultProjectContent.appendChild(todoDiv)
defaultProjectContent.appendChild(todoDivExpanded)

defaultProject.appendChild(defaultProjectContent)

projects.appendChild(defaultProject)


defaultProject.addEventListener('click', () => {
  let tabContent = document.querySelectorAll('.content')
  tabContent.forEach(tc => {
    tc.style.display = 'none'
  })
  defaultProjectContent.style.display = 'block'
})

//when click on todo, toggle
