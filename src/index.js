import Project from './project'
import Todo from './todo'
import Content from './content'
import addTodoForm from './addTodoForm'


let defaultProject = Project('Default Project')
defaultProject.add(Todo(
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
    Content.contentDiv.appendChild(todo.div)
  })
})

Content.contentDiv.appendChild(addTodoForm(defaultProject))