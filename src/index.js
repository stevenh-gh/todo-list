


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
todoDiv.setAttribute('class', 'todo')
todoDiv.setAttribute('id', `${todo.title}`)


// divs for title and description

// unexpanded ver.
//========================================
let todoTitle = document.createElement('DIV')
todoTitle.setAttribute('class', 'todoTitle')
todoTitle.innerText = todo.title
todoDiv.appendChild(todoTitle)

let todoDescription = document.createElement('DIV')
todoDescription.setAttribute('class', 'todoDescription')
todoDescription.innerText = todo.description
todoDiv.appendChild(todoDescription)
//===========================================


//expanded ver.
let todoDueDate = document.createElement('DIV')
todoDueDate.setAttribute('class', 'todoDueDate')
todoDueDate.innerText = todo.dueDate
todoDueDate.style.display = 'none'
todoDiv.appendChild(todoDueDate)

let todoPriority = document.createElement('DIV')
todoPriority.setAttribute('class', 'todoPriority')
todoPriority.innerText = todo.priority
todoPriority.style.display = 'none'
todoDiv.appendChild(todoPriority)



defaultProjectContent.appendChild(todoDiv)

defaultProject.appendChild(defaultProjectContent)

//add 'add new todo' button
let addTodoBtn = document.createElement('BUTTON')
addTodoBtn.innerText = 'Add todo'
defaultProject.appendChild(addTodoBtn)

projects.appendChild(defaultProject)


defaultProject.addEventListener('click', () => {
  let tabContent = document.querySelectorAll('.content')
  tabContent.forEach(tc => {
    tc.style.display = 'none'
  })
  defaultProjectContent.style.display = 'block'
})

//when click on todo, toggle
todoDiv.addEventListener('click', () => {
  if (todoDueDate.style.display === 'none') {
    todoDueDate.style.display = 'block'
    todoPriority.style.display = 'block'
  } else {
    todoDueDate.style.display = 'none'
    todoPriority.style.display = 'none'
  }
})