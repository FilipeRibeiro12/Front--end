import './styles.scss'
import img from './matrix.png'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleCompontent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello World 10'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image(1200,800)
    elemImg.src = img
    return elemImg
}

rootStyle()
document.getElementById('root').appendChild(titleCompontent())
document.getElementById('root').appendChild(imageComponent())
