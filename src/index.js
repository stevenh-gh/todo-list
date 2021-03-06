


import Todo from './todo'
import Project from './project'

const body = document.querySelector('body')
const projects = document.querySelector('#projects')
const addProjectForm = document.querySelector('#addProjectForm')

//add 'add project' button
let addNewProjectBtn = document.createElement('BUTTON')
addNewProjectBtn.innerText = 'Add new project'
addNewProjectBtn.setAttribute('id', 'addNewProjectBtn')
addProjectForm.appendChild(addNewProjectBtn)

addNewProjectBtn.addEventListener('click', () => {
  if (projectFormDiv.style.display === 'none') {
    projectFormDiv.style.display = 'block'
  } else {
    projectFormDiv.style.display = 'none'
  }
})

let projectFormDiv = document.createElement('DIV')
projectFormDiv.style.display = 'none'
projectFormDiv.innerHTML = `
  <form id='projectFormDiv'>
    <input type='text' name='projectName' placeholder='project name'><br>
    <input id='projectFormSubmit' type='submit' value='Add project'> 
  </form>
`
let projectFormSubmit = projectFormDiv.querySelector('#projectFormSubmit')
projectFormSubmit.addEventListener('click', e => {
  e.preventDefault()
  console.log(e)

  let form = document.forms.projectFormDiv
  let fd = new FormData(form)

  console.log(fd.get('projectName'))

  let p = new Project(fd.get('projectName'))
  let pTab = p.projectTab()
  let pSpace = p.projectSpace()

  pTab.addEventListener('click', () => {
    let contents = document.querySelectorAll('.content')
    contents.forEach(content => {
      content.style.display = 'none'
    })
    pSpace.style.display = 'block'
    currentProjectContent = pSpace
  })

  body.appendChild(pSpace)
  projects.appendChild(pTab)


  form.reset()

})

addProjectForm.appendChild(projectFormDiv)

let p = new Project('default')
// make default project (the clickable tab)
// let defaultProject = document.createElement('DIV')
// defaultProject.setAttribute('class', 'project')
// defaultProject.setAttribute('id', 'defaultProject')
// defaultProject.innerHTML = `<span>Default</span>`
let defaultProject = p.projectTab()

//make default project's space
// let defaultProjectContent = document.createElement('DIV')
// defaultProjectContent.setAttribute('class', 'content')
// defaultProjectContent.setAttribute('id', 'defaultProjectContent')
// defaultProjectContent.style.display = 'none'
let defaultProjectContent = p.projectSpace()
let currentProjectContent = defaultProjectContent

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

// defaultProject.appendChild(defaultProjectContent)
body.appendChild(defaultProjectContent)

//add 'add new todo' button
let addTodoBtn = document.createElement('BUTTON')
addTodoBtn.innerText = 'Add todo'
addProjectForm.appendChild(addTodoBtn)


// add todo form
let formDiv = document.createElement('DIV')
formDiv.style.display = 'none'
formDiv.innerHTML = `
  <form id='addTodoForm'>
    <input name='title' type='text' placeholder='title'><br>
    <input name='description' type='text' placeholder='description'><br>
    <input name='priority' type='number' max=5 placeholder='priority'><br>
    <input name='date' type='date'><br>
    <input id='addTodoSubmit' type='submit' value='Add new todo'>
  </form>
`

addProjectForm.appendChild(formDiv)


projects.appendChild(defaultProject)


defaultProject.addEventListener('click', () => {
  let tabContent = document.querySelectorAll('.content')
  tabContent.forEach(tc => {
    tc.style.display = 'none'
  })
  defaultProjectContent.style.display = 'block'
})

function makeNewTodo(e) {

  e.preventDefault()

  let form = document.forms.addTodoForm
  let fd = new FormData(form)

  let t = makeTodoDiv(new Todo(fd.get('title'), fd.get('description'), fd.get('date'), fd.get('priority')))
  currentProjectContent.appendChild(t)

  form.reset()
}

document.querySelector('#addTodoSubmit').addEventListener('click', makeNewTodo)

//when click on todo, toggle
addTodoBtn.addEventListener('click', () => {

  if (formDiv.style.display === 'none') {
    formDiv.style.display = 'block'
  } else {
    formDiv.style.display = 'none'
  }
})