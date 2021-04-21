import Project from './project'
import Todo from './todo'
import Content from './content'


let defaultProject = Project('Default Project')
defaultProject.todos.push(Todo(
  'Default todo',
  'This is a sample todo item',
  5,
  '5/5/05'
))

Content.projects.push(defaultProject)

Content.projects.forEach(project => {
  Content.contentDiv.appendChild(project.button)
})





// for each project in Content,
// and for each todo in each project,
// create todo div

Content.projects.forEach(project => {
  project.todos.forEach(todo => {
    let todoDiv = document.createElement('DIV')
    todoDiv.id = todo.title
    todoDiv.class = 'todo'
    // todoDiv.style.display = 'none'
    todoDiv.innerText = todo.title
    Content.contentDiv.appendChild(todoDiv)
  })
})