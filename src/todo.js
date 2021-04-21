function Todo(title, description, priority, date) {

  let div = (() => {
    let todoDiv = document.createElement('DIV')
    todoDiv.id = title
    todoDiv.class = 'todo'
    // todoDiv.style.display = 'none'
    todoDiv.innerText = title

    return todoDiv
  })()

  return {
    title,
    description,
    priority,
    date,
    div
  }
}

export default Todo