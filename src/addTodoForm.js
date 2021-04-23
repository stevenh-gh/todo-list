function addTodoForm(project) {

  let form = document.createElement('DIV')
  form.innerHTML = `
    <form>
      <input type='text' name='title' placeholder='title'></input><br>
      <input type='text' name='description' placeholder='description'></input><br>
      <input type='number' name='number' max=5 value=0></input><br>
      <input type='date' name='date'></input><br>
    </form>
  `
  let submitBtn = (() => {
    let b = document.createElement('BUTTON')
    b.innerText = `Submit to project ${project.title}`
    form.appendChild(b)
    b.addEventListener('click', e => {
      e.preventDefault()
      console.log(e)
    })
  })()

  return form
}

export default addTodoForm