// Append image element and set attribute

function addImage() {
    const imageElement = document.createElement('img')
    const breakElement = document.createElement('br')

    imageElement.setAttribute('src', './images/image.png')
    imageElement.setAttribute('width', '700')
    imageElement.setAttribute('height', '354')
    imageElement.setAttribute('alt', 'First image')

    imageElement.style.marginTop = "20px"
    imageElement.classList.add('center')
    
    document.body.appendChild(imageElement)
    document.body.appendChild(breakElement)
}