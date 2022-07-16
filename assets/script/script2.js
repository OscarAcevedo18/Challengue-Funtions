let elementOne = document.querySelector ("#box-one")
let elementTwo = document.querySelector ("#box-two")
let elementThree = document.querySelector ("#box-three")
let elementFour = document.querySelector ("#box-four")
let color = ''
elementOne.setAttribute('style', 'width: 200px; height: 200px; background-color: red;')
elementTwo.setAttribute('style', 'width: 200px; height: 200px; background-color: blue;')
elementThree.setAttribute('style', 'width: 200px; height: 200px; background-color: yellow;')
elementFour.setAttribute('style', 'width: 200px; height: 200px; background-color: black;')

document.addEventListener('keydown', function (event) {
if (event.key.toLowerCase() === 'a') {
    color = 'maroon'
} else if (event.key.toLowerCase() === 's') {
    color = 'chocolate'
} else if (event.key.toLowerCase() === 'd') { 
    color = 'magenta'
}else if (event.key.toLowerCase() === 'f') {
    color = 'cyan'
}
changeColor(elementOne, color)
changeColor(elementTwo, color)
changeColor(elementThree, color)
changeColor(elementFour, color)
})

let changeColor = (element, color)=> {
    element.addEventListener ('click', () =>{
        element.style.backgroundColor = color
    })
}

