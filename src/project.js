




class Project {
  constructor(name) {
    this.name = name
  }

  projectTab() {
    let project = document.createElement('DIV')
    project.setAttribute('class', 'project')
    project.setAttribute('id', `${this.name}project`)
    project.innerHTML = `<span>${this.name}</span>`
    return project
  }

  projectSpace() {
    let projectContent = document.createElement('DIV')
    projectContent.setAttribute('class', 'content')
    projectContent.setAttribute('id', `${this.name}ProjectContent`)
    projectContent.style.display = 'none'
    return projectContent
  }

}

export default Project