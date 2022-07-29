const btnOpenModal = document.querySelector('.openModalBtn')
const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.modal_inner-header i')
const btnClose = document.querySelector('.modal_inner-footer button')

btnOpenModal.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

const handleAddClassHidden = (Class) => {
    Class.classList.add('hidden')
}

iconClose.addEventListener('click', () => { handleAddClassHidden(modal) })

btnClose.addEventListener('click', () => { handleAddClassHidden(modal) })

modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        handleAddClassHidden(modal)
    }
})

