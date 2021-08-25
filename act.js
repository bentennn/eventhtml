const container = document.querySelector('.container')
let botonSumar = document.querySelector('.btn-success')
let botonRestar = document.querySelector('.btn-danger')
const span = document.querySelector('.contador')
let contador = 0

botonRestar.addEventListener('click', (e) =>{
    console.log(e.target)
    contador --
    span.textContent = contador
})

botonSumar.addEventListener('click', (e) => {
    contador ++
    span.textContent = contador
})
