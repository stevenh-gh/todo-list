



class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  genDiv() {
    let todoDiv = document.createElement('DIV')
    todoDiv.setAttribute('class', 'todo')
    todoDiv.setAttribute('id', `${this.title}`)
    return todoDiv
  }

  genTitle() {
    let todoTitle = document.createElement('DIV')
    todoTitle.setAttribute('class', 'todoTitle')
    todoTitle.innerText = this.title
    return todoTitle
  }

  genDescription() {
    let todoDescription = document.createElement('DIV')
    todoDescription.setAttribute('class', 'todoDescription')
    todoDescription.innerText = this.description
    return todoDescription
  }

  genDueDate() {
    let todoDueDate = document.createElement('DIV')
    todoDueDate.setAttribute('class', 'todoDueDate')
    todoDueDate.innerText = this.dueDate
    todoDueDate.style.display = 'none'
    return todoDueDate
  }

  genPriority() {
    let todoPriority = document.createElement('DIV')
    todoPriority.setAttribute('class', 'todoPriority')
    todoPriority.innerText = this.priority
    todoPriority.style.display = 'none'
    return todoPriority
  }
}

export default Todo