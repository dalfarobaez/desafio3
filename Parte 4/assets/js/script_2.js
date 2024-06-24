// teclado

const cuad1 = document.querySelector("#key")
const cuad2 = document.querySelector("#key2")
let color

function segundo (color) {
    cuad2.style.display = "block"
    cuad2.style.backgroundColor = color
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink"
        cuad1.style.backgroundColor = color
    } else if (event.key === 's') {
        color = "orange"
        cuad1.style.backgroundColor = color
    } else if (event.key === 'd') {
        color = "lightblue"
        cuad1.style.backgroundColor = color
    } else if (event.key === 'q') {
        color = "purple"
        segundo(color)
    } else if (event.key === 'w') {
        color = "gray"
        segundo(color)
    } else if (event.key === 'e') {
        color = "brown"
        segundo(color)
    }
})

