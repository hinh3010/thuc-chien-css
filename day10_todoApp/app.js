const input = document.querySelector('form input')
const button = document.querySelector('form button')
const form = document.querySelector('form')
const todos = document.querySelector('.todo')

form.addEventListener('submit',e=>{
    e.preventDefault()
    let value = input.value.trim()
    if(value){
        addTodoElement({
            text : value 
        })
    }
    input.value = ''
    input.focus()

    saveTodoList()
})

const addTodoElement = (todo)=>{
    var li = document.createElement('li')
    li.innerHTML = ` <span>${todo.text}</span>
                    <i class="fas fa-trash"></i>
                   `
    if(todo.status === 'completed'){
        li.setAttribute('class','completed')
    }

    li.addEventListener('click',()=>{
        li.classList.toggle('completed')
    })

    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove()
    })

    todos.appendChild(li)
}

function saveTodoList(){
    let todoList = document.querySelectorAll('.todo li')
    let todoListStorage = []
    todoList.forEach((element,i)=>{
        let value =  element.querySelector('span').innerText
        let status =  element.querySelector('span').getAttribute('class')
        todoListStorage.push({
            text : value ,
            status
        })
    })
    localStorage.setItem('todoCSS',JSON.stringify(todoListStorage))
    console.log(JSON.parse(localStorage.getItem('todoCSS')))
}

function init (){
    let data = JSON.parse(localStorage.getItem('todoCSS'))
    data.forEach((item)=>{
        addTodoElement(item)
    })
}

init()