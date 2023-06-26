const span = document.querySelector(".span")
const button = document.querySelector(".button")
const buttonReset = document.querySelector(".reset")
let buttonYes = document.querySelector(".yes")
let buttonNo = document.querySelector(".no")
let perguntasCaso = document.querySelector(".campo-respostas p")

button.addEventListener("click", () => {
    button.style.display = 'none';
    buttonYes.style.display = 'block';
    buttonNo.style.display = 'block';
    perguntasCaso.style.display = 'block'
    span.style.display = 'none'
    perguntas()
})

const verificador = [];
let contador = 0
buttonYes.onclick = () => {
    contador++
    perguntas()
    console.log(contador)
    verificador.push(true)
    if(contador === 5){
        buttonYes.style.display = 'none'
        buttonNo.style.display = 'none'
        console.log(verificador)
        conclusaoFinalCaso()
        buttonReset.style.display = 'block'
        contador = 0
        verificador.splice(0, verificador.length)
    }
}

buttonNo.onclick = () => {
    contador++
    perguntas()
    console.log(contador)
    if(contador === 5){
        buttonYes.style.display = 'none'
        buttonNo.style.display = 'none'
        console.log(verificador)
        conclusaoFinalCaso()
        buttonReset.style.display = 'block'
        contador = 0
        verificador.splice(0, verificador.length)
    }
}

function perguntas() {
    if(contador === 0){
        perguntasCaso.innerHTML = 'Telefonou para a vítima?'
        buttonYes.innerHTML = 'Sim, eu telefonei.'
        buttonNo.innerHTML = 'Não, nunca liguei para ele'
    }else if(contador === 1) {
        perguntasCaso.innerHTML = 'Esteve no local do crime?'
        buttonYes.innerHTML = 'Sim eu estive no local'
        buttonNo.innerHTML = 'Não, não estive naquele lugar'
    }else if(contador === 2) {
        perguntasCaso.innerHTML = 'Mora perto da vítima?'
        buttonYes.innerHTML = 'Sim, ele é meu vizinho'
        buttonNo.innerHTML = 'Não'
    }else if(contador === 3) {
        perguntasCaso.innerHTML = 'Devia para a vítima?'
        buttonYes.innerHTML = 'Sim, eu devia uma quantia pra ele'
        buttonNo.innerHTML = 'Não, não devia nada'
    }else if(contador === 4) {
        perguntasCaso.innerHTML = 'Já trabalhou com a vítima?'
        buttonYes.innerHTML = 'Sim, já trabalhamos juntos.'
        buttonNo.innerHTML = 'Não, nunca trabalhei com ele.'
    }
}

let h1 = document.querySelector(".h1")
let campoImg = document.querySelector(".campo-respostas")
let img = document.createElement("img")
img.setAttribute("class", 'img')

function conclusaoFinalCaso() {
    if(verificador.length === 1 || verificador.length === 0) {
        h1.innerHTML = 'INOCENTE'
        perguntasCaso.innerHTML = 'Voce foi considerado Inocente!'
        img.style.display = 'block'
        img.src = './inocente.png'
        campoImg.appendChild(img)
    }
    else if(verificador.length === 2) {
        h1.innerHTML = 'SUSPEITO'
        img.style.display = 'block'
        perguntasCaso.innerHTML = 'Voce foi considerado um suspeito, Não saia da cidade'
        img.src = './suspeito.png'
        campoImg.appendChild(img)
    }
    else if(verificador.length === 3 || verificador.length === 4) {
        h1.innerHTML = 'CÚMPLICE'
        img.style.display = 'block'
        perguntasCaso.innerHTML = 'Voce está preso, por ser cumplice do crime!'
        img.src = './cumplice.png'
        campoImg.appendChild(img)
    }
    else if(verificador.length === 5){
        h1.innerHTML = 'Assassino'
        img.style.display = 'block'
        perguntasCaso.innerHTML = 'Você é o Assassino, está preso!'
        img.src = './culpado.png'
        campoImg.appendChild(img)
    }
}

buttonReset.onclick = function() {
    img.style.display = 'none'
    h1.innerHTML = 'Interrogatorio'
    perguntasCaso.innerHTML = ''
    button.style.display = 'block'
    buttonReset.style.display = 'none'
    span.style.display = 'block'
}