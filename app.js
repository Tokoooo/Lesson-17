let button = document.querySelector('.remove')
const imageAppend = document.querySelector('.image-place')

button.addEventListener('click', () => {
    button.remove()
})

const image = document.createElement('img')
image.src = 'https://picsum.photos/1400/800'
image.setAttribute('alt', 'photo');
image.setAttribute('height', '350')
image.setAttribute('width', '550')
imageAppend.appendChild(image)
