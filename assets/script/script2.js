let element_one = document.querySelector ("#box-one")
let element_two = document.querySelector ("#box-two")
let element_three = document.querySelector ("#box-three")
let element_four = document.querySelector ("#box-four")
let color = 'violet'
element_one.setAttribute('style', 'width: 200px; height: 200px; background-color: red;')
element_two.setAttribute('style', 'width: 200px; height: 200px; background-color: blue;')
element_three.setAttribute('style', 'width: 200px; height: 200px; background-color: yellow;')
element_four.setAttribute('style', 'width: 200px; height: 200px; background-color: black;')

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
})

element_one.addEventListener ('click', () => element_one.style.backgroundColor=color)
element_two.addEventListener ('click', () => element_two.style.backgroundColor=color)
element_three.addEventListener ('click', () => element_three.style.backgroundColor=color)
element_four.addEventListener ('click', () => element_four.style.backgroundColor=color)
