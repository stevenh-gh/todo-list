function Project(title) {
  let todos = []

  let button = (() => {
    let b = document.createElement('BUTTON')
    b.innerText = title

    return b
  })()

  return {
    title,
    todos,
    button
  }

}

export default Project