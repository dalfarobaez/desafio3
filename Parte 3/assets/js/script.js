
const ele = document.getElementById("ele1")
const par = document.getElementById("parrafo")

function pintar(objeto,color="green"){
    objeto.style.backgroundColor = color
}
    
ele.addEventListener("click", ()=>{
    pintar(ele,"yellow")
})
