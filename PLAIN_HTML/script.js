const buttons = document.querySelectorAll('.accordion .btn')

buttons.forEach((button, index) => button.addEventListener('click', () => {
    const content = button.nextElementSibling.querySelector('.content')
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none'
}))