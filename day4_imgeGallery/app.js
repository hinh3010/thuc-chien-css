const image = document.querySelectorAll('.image img')
const bntClose = document.querySelector('.gallery .gallery_close')
const bntPrev = document.querySelector('.gallery .gallery_control.prev')
const bntNext = document.querySelector('.gallery .gallery_control.next')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery .gallery_inner img')

var currenIndex = 0

const galleryShow = (currenIndex)=>{
    console.log(currenIndex)
    galleryImg.src = image[currenIndex].src
    gallery.classList.add('show')
    if(currenIndex === 0){
        bntPrev.classList.add('hidden')
    }else if(currenIndex === image.length-1){
        bntNext.classList.add('hidden')
    }else{
        bntPrev.classList.remove('hidden')
        bntNext.classList.remove('hidden')
    }
}

image.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        currenIndex = index
        galleryShow(currenIndex)
    })
})

bntClose.addEventListener('click',()=>{
    gallery.classList.remove('show')
})
document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 27){
        gallery.classList.remove('show')
    }
})

bntPrev.addEventListener('click',()=>{
    if(currenIndex > 0){
        currenIndex = currenIndex-=1
        galleryShow(currenIndex)
    }
})

bntNext.addEventListener('click',()=>{
    if(currenIndex < image.length-1){
        currenIndex = currenIndex+=1
        galleryShow(currenIndex)
    }
})