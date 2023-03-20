document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDo(e.target.new_task_description.value)
    form.reset()
  })
});
function toDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteEntry)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}
function deleteEntry(e){
  e.target.parentNode.remove()
}