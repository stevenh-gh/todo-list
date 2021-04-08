


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


// add todo form
let formDiv=document.createElement('DIV')
formDiv.innerHTML=`
  <form id='addTodoForm'>
    <input type='text' placeholder='title'><br>
    <input type='text' placeholder='description'><br>
    <input type='number' max=5 placeholder='priority'><br>
    <input type='date'><br>
    <input type='submit' value='Add new todo'>
  </form>
`

defaultProject.appendChild(formDiv)

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