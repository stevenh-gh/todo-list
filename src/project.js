function Project(title) {
  let todos = []

  function add(todo) {
    todo.div.setAttribute('class', `${todo.div.className} ${title.replace(/\s+/g, '-')}`)
    todos.push(todo)
  }

  let button = (() => {
    let b = document.createElement('BUTTON')
    b.innerText = title

    return b
  })()

  button.addEventListener('click', e => {
    document.querySelectorAll('.todo').forEach(todo => {
      todo.style.display = 'none'
    })
    document.querySelectorAll(`.${title.replace(/\s+/g, '-')}`).forEach(todo => {
      todo.style.display = 'block'
    })
  })

  return {
    title,
    todos,
    add,
    button
  }

}

export default Project