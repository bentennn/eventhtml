const container = document.querySelector('.container')
const span = document.getElementById('span')
let contador = 0



container.addEventListener('click', (e) => {
console.log(e.target.classlist.contains('btn-success'))

if(e.target.classlist.contains('btn-success')){
    contador ++
    span.textContent = contador
}

if(e.target.classlist.contains('btn-danger')){
    contador --
    span.textContent = contador
}

})