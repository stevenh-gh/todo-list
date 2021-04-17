import Project from './project'
import Todo from './todo'

const content = document.querySelector('#content')

let defaultProject = Project('Default Project')
defaultProject.todos.push(Todo(
  'Default todo',
  'This is a sample todo item',
  5,
  '5/5/05'
))

let defaultProjectBtn = document.createElement('BUTTON')
defaultProjectBtn.innerText = defaultProject.title

content.appendChild(defaultProjectBtn)










defaultProject.todos.forEach(todo => {
  let todoDiv = document.createElement('DIV')
  todoDiv.id = todo.title
  todoDiv.class = 'todo'
  // todoDiv.style.display = 'none'
  todoDiv.innerText = todo.title
  content.appendChild(todoDiv)
})