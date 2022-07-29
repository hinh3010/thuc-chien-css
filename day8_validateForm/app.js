
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passConfirn = document.querySelector('#password_Confirn')

const form = document.querySelector(' form')

function showError(input , mes){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = mes
}
function showSuccess(input , mes){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}
function checkEmtyError(listInput){
    let isEmtyError = false
    listInput.map(input => {
        input.value = input.value.trim()

        if(!input.value){
            showError(input , 'Chưa nhập trường này')
            isEmtyError = true
        }
        // else{
        //     showSuccess(input)
        // }
    })
    return isEmtyError
}
function checkEmail(input){
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)

    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input , 'Email Invalid')
    }
    return isEmailError
}
function checkLengthError(input , min , max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input , `Phải có ít nhất ${min} kí tự`)
        return true
    }else if(input.value.length > max){
        showError(input , `Không được vượt quá ${max} kí tự`)
        return true
    }else{
        showSuccess(input)
        return false
    }
}
function checkMathPass(passwordInput,passConfirnInput){
    if(passwordInput.value !== passConfirnInput.value){
        showError(passConfirnInput , 'Mật khẩu không khớp')
        return true
    }
    return false
}

form.addEventListener('submit',e=>{
    e.preventDefault()

    let isEmailError = checkEmail(email)

    let isLengthUser = checkLengthError(username ,6 ,12)
    let isLengthPass = checkLengthError(password ,6 ,16)
    let isLengthPassConfirn = checkLengthError(passConfirn ,6 ,16)

    let isEmtyError = checkEmtyError([username,email,password,passConfirn])

    let isCheckMathPassError = checkMathPass(password,passConfirn)

    console.log(isEmtyError,isEmailError,isLengthUser,isLengthPass,isLengthPassConfirn,isCheckMathPassError)

    if(isEmtyError||isEmailError||isLengthUser||isLengthPass||isLengthPassConfirn||isCheckMathPassError){
        // ko làm gì cả
    }else{
        // nếu mà ko có bất kì lỗi nào => cho login
    }

})
