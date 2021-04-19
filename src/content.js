const Content = (() => {
  let projects = []
  const content = document.querySelector('#content')

  return { projects, contentDiv: content }
})()

export default Content