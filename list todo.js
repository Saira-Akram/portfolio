
const taskText = document.querySelector(".my-input")
const addBtn = document.querySelector(".btn")
const tasks = document.querySelector(".my-list")

addBtn.addEventListener("click", () => {
    const taskValue = taskText.value.trim();
    console.log(taskValue);

    const li = document.createElement("li")
    li.classList.add('item')

    const liSpan = document.createElement("span");
    liSpan.classList.add('task-item')
    liSpan.innerText = taskValue

    const delBtn = document.createElement('button')
    delBtn.classList.add('delete-btn')
    delBtn.innerText = "X"

    li.appendChild(liSpan)
    li.appendChild(delBtn)

    tasks.appendChild(li);

    taskText.value = "";

    const delTask = li.querySelector('.delete-btn')
    delTask.addEventListener('click', () => {
        li.remove()
    })
})

taskText.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        addBtn.click()
    }
})





