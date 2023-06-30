import './styles.scss'

import img from './matrix.png'


function titleCompontent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello World 2'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new image(1200,800)
    elemImg.src = img
    return elemImg
}

document.body.appendChild(titleCompontent())
document.body.appendChild(imageComponent())