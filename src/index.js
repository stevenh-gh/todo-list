


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

let t = new Todo('test title', 'test description', '5/5/30', 5)

function makeTodoDiv(todo) {

  let todoDiv = todo.genDiv()
  let todoTitle = todo.genTitle()
  let todoDescription = todo.genDescription()
  let todoDueDate = todo.genDueDate()
  let todoPriority = todo.genPriority()

  todoDiv.appendChild(todoTitle)
  todoDiv.appendChild(todoDescription)
  todoDiv.appendChild(todoDueDate)
  todoDiv.appendChild(todoPriority)

  todoDiv.addEventListener('click', () => {
    if (todoDueDate.style.display === 'none') {
      todoDueDate.style.display = 'block'
      todoPriority.style.display = 'block'
    } else {
      todoDueDate.style.display = 'none'
      todoPriority.style.display = 'none'
    }
  })

  return todoDiv
}

let todoDiv = makeTodoDiv(t)


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
addTodoBtn.addEventListener('click', e => {
  console.log(e)
})