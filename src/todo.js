function Todo(title, description, priority, date) {

  let div = (() => {
    let todoDiv = document.createElement('DIV')
    todoDiv.id = title
    todoDiv.setAttribute('class', 'todo')
    todoDiv.style.display = 'none'
    todoDiv.innerHTML = `
      <div>${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${date}</div>
    `

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