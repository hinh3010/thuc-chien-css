const body = document.querySelector('body')

const search = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const tempValue = document.querySelector('.temp_value')

const shortDesc = document.querySelector('.short_desc')
const visibility = document.querySelector('.visibility span')
const win = document.querySelector('.win span')
const humidity = document.querySelector('.humidity span')

const time = document.querySelector('.time')

const content = document.querySelector('.content')

const APP_ID = 'cf26e7b2c25b5acd18ed5c3e836fb235'


async function changeWeaatherUi(value = 'hanoi') {

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&units=metric&appid=${APP_ID}&units=metric&lang=vi`
    // console.log(apiUrl)

    var data = await fetch(apiUrl).then(res => { return res.json() })
    console.log(data.cod)

    if (data.cod === 200) {
        content.classList.remove('hidden')

        city.innerText = data.name
        country.innerText = data.sys.country
        tempValue.innerText = data.main.temp

        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        visibility.innerText = data.visibility + 'm'
        win.innerText = data.wind.speed + 'm/s'
        humidity.innerText = data.main.humidity + '%'

        time.innerText = new Date().toLocaleString('vi')

        if(data.main.temp < 15){
            return body.setAttribute('class','cold')
        }if(data.main.temp >= 15 && data.main.temp < 20){
            return body.setAttribute('class','warm')
        }if(data.main.temp >= 20 && data.main.temp < 30){
            return body.setAttribute('class','cool')
        }else{
            return body.setAttribute('class','hot')
        }

    } else {
        console.log('not foudn')
        content.classList.add('hidden')
    }

}

// search.addEventListener('keypress',(e)=>{
//     if(e.code === 'Enter' || e.code === 'NumpadEnter'){
//         changeWeaatherUi(e.target.value)
//     }
// })

search.addEventListener('change', (e) => {
    changeWeaatherUi(e.target.value)
    // e.target.value = ''
})
changeWeaatherUi('ha noi')