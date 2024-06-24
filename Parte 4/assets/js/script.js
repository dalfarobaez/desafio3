// 4 colores
const cuad1 = document.querySelector("#cuadrado-1")
const cuad2 = document.querySelector("#cuadrado-2")
const cuad3 = document.querySelector("#cuadrado-3")
const cuad4 = document.querySelector("#cuadrado-4")

function pintarNegro (cuadrado) {
    cuadrado.style.backgroundColor = "black"
}

cuad1.addEventListener("click",()=>{
    pintarNegro(cuad1)
})
cuad2.addEventListener("click",()=>{
    pintarNegro(cuad2)
})
cuad3.addEventListener("click",()=>{
    pintarNegro(cuad3)
})
cuad4.addEventListener("click",()=>{
    pintarNegro(cuad4)
})


