// referenciamos los elementos del DOM 
const inputBuscar =document.getElementById('buscar')
const celdas =document.getElementsByTagName ('td')

// Aqui traemos nuestros datos de la api 

let uri = 'https://jsonplaceholder.typicode.com/users'
fetch(uri)

 .then (response=> response.json())
 .then (json => mostrarDatos(json))
 .catch( e => console.log(e))


const mostrarDatos =(data) => {
    console.log(data)
    let body=''
    for (let i=0 ; i < data.length ; i++ ){
    body += `<tr><td>${data[i].name}</td></tr>`  
}
document.querySelector('.datos').innerHTML = body
}


// Busqueda
inputBuscar.addEventListener('keyup',(e) => {
        let texto = e.target.value
        let er = new RegExp(texto, 'i')
        for (let i = 0; i < celdas.length; i++) {
            let valor = celdas[i]
            if (er.test(valor.innerText)) {
                valor.classList.remove("ocultar")
            }
            else {
                valor.classList.add('ocultar')
            }
        }
    })