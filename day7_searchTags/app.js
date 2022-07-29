const content = document.querySelector('.content')
const contentInput = document.querySelector('.content input')
const btnRemoveAll = document.querySelector('.remove_all')

var tags = ['NodeJs', 'ReactJs']

function reRender() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `
        <li>
            ${tag}
            <i class="fas fa-close" onClick="removeTag(${i})"></i>
        </li>
        `
    }
    content.appendChild(contentInput)
    contentInput.focus()
}
reRender()

contentInput.addEventListener('keydown',e=>{
    if(e.key === 'Enter' && e.target.value !== '' ){
        tags.push(e.target.value.trim())
        e.target.value = ''
        reRender()
    }
})

const removeTag =(i)=>{
    tags.splice(i , 1)
    reRender()
}

btnRemoveAll.addEventListener('click',()=>{
    tags = []
    reRender()
})
