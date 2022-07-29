const searchBox = document.querySelector('.searchBox')

const btnSearchBox = document.querySelector('.searchBox_btn')
const inputSearchBox = document.querySelector('.searchBox_input')

// btnSearchBox.addEventListener('click',()=>{
//     searchBox.classList.toggle('open')
//     inputSearchBox.focus()
// })
btnSearchBox.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})