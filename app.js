const lataVerde = document.querySelector('#lata-verde')
const lataBranca = document.querySelector('#lata-branca')
const mudar = document.querySelector('#mudar')
const body = document.querySelector('body')

lataVerde.onclick = () => {
    console.log('verde')
    mudar.src = "img/lata.png"
    body.classList.remove('branco')
    body.classList.add('verde')
}
lataBranca.onclick = () => {
    console.log('branco')
    mudar.src = "img/lataZero.png"
    body.classList.add('branco')
    body.classList.remove('verde')
}