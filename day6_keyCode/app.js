const cardKey = document.querySelector('.card_key .card_value')
const cardLocation = document.querySelector('.card_location .card_value')
const cardWhich = document.querySelector('.card_which .card_value')
const cardCode = document.querySelector('.card_code .card_value')

const boxKeyCodeResult = document.querySelector('.boxKeyCode_result')
const alert = document.querySelector('.alert')
const boxKeyCode = document.querySelector('.boxKeyCode')

document.addEventListener('keydown',e=>{
    // console.log(e)
    cardKey.innerText = e.key
    cardLocation.innerText = e.location
    cardWhich.innerText = e.which
    boxKeyCodeResult.innerText = e.which
    cardCode.innerText = e.code
    alert.classList.add('hidden')
    boxKeyCode.classList.remove('hidden')
})