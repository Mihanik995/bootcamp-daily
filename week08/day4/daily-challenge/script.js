let currentId = 0

const _form = document.forms.newTask
_form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newTask = {
        id: `task${currentId}`,
        task: _form.children[0].value,
        isDone: false
    }
    currentId++

    if (!document.getElementById('tasksList')) {
        const tasksDiv = document.createElement('div')
        tasksDiv.id = 'tasksList'
        document.getElementsByTagName('body')[0].appendChild(tasksDiv)
    }

    const tasksList = document.getElementById('tasksList')

    const newBlock = document.createElement('div')
    newBlock.id = newTask.id
    newBlock.className = 'taskBox'

    const newButton = document.createElement('button')
    newButton.innerText = 'X'
    newButton.style.backgroundColor = 'tomato'
    newButton.setAttribute('onclick', `deleteTask('${newTask.id}')`)
    newBlock.appendChild(newButton)

    const newCheckbox = document.createElement('input')
    newCheckbox.type = 'checkbox'
    newCheckbox.id = `${newTask.id}Check`
    newCheckbox.checked = newTask.isDone
    newCheckbox.setAttribute('onclick', `resetValue('${newTask.id}')`)
    newBlock.appendChild(newCheckbox)

    const newLabel = document.createElement('label')
    newLabel.htmlFor = `${newTask.id}Check`
    newLabel.id = `${newTask.id}Label`
    newLabel.innerText = newTask.task
    newBlock.appendChild(newLabel)

    tasksList.appendChild(newBlock)
})

const deleteTask = taskId => {
    document.getElementById(taskId).remove()
    if (!document.getElementById('tasksList').children.length){
        document.getElementById('tasksList').remove()
    }
}

const resetValue = taskId => {
    const checkbox = document.getElementById(`${taskId}Check`)
    const label = document.getElementById(`${taskId}Label`)
    if (checkbox.checked) {
        label.style.color = 'red'
        label.style.textDecoration = 'line-through'
    } else {
        label.style.color = 'black'
        label.style.textDecoration = 'none'
    }
}





