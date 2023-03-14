// let button = document.querySelector('.remove')
// const imageAppend = document.querySelector('.image-place')
//
// button.addEventListener('click', () => {
//     button.remove()
// })
//
// const image = document.createElement('img')
// image.src = 'https://picsum.photos/1400/800'
// image.setAttribute('alt', 'photo');
// image.setAttribute('height', '350')
// image.setAttribute('width', '550')
// imageAppend.appendChild(image)



function filterCountries () {

    let country;
    country = countries.map((countries) => {
        return `<div class="card">
                   <img src="${countries.flags.png}" alt="${countries.flags.alt}" >
                   <h1>${countries.name.official}</h1>
               </div>`
    })

    let showContent = document.querySelector('.country')
    showContent.innerHTML = country
    showContent.style.display = 'flex'
    showContent.style.justifyContent = 'center'
    showContent.style.gap = '15px'
}

filterCountries()


