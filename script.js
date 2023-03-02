// Etch-a-sketch
// Create etch-a-sketch

const etchAsketch = document.querySelector('.etch-a-sketch')

let currentSize = 16 //base size

let colorOn = false

const slideValue = document.querySelector('#slider-value')
const slider = document.querySelector('#slider')

const btnClear = document.querySelector('.clear')
const btnColor = document.querySelector('.color-toggle')
// setup color button
btnColor.textContent = 'Color'
btnColor.style.color = 'honeydew'
btnColor.style.backgroundColor = 'purple'
btnColor.style.borderColor = randomColor()

btnColor.addEventListener('click', colorCheck)

function colorCheck(){
    if ( btnColor.textContent === 'Color') {
        btnColor.textContent = 'Basic'
        btnColor.style.color = 'black'
        btnColor.style.backgroundColor = 'white'
        btnColor.style.borderColor = 'black'
        colorOn = true
    } else {
        btnColor.textContent = 'Color'
        btnColor.style.color = 'honeydew'
        btnColor.style.backgroundColor = 'purple'
        btnColor.style.borderColor = randomColor()
        colorOn = false
    }
}

btnClear.addEventListener('click', makeWhite)

function makeWhite() {
    const sketchBlocks = document.querySelectorAll('.sketch-field')
    sketchBlocks.forEach( sketchBlock => {
        sketchBlock.style.backgroundColor = 'white'
    })
}

slider.addEventListener('input', () => {
    // updates number in div
    slideValue.textContent = slider.value   
})

slider.addEventListener('change', () => {
    // updates number in div
    // slideValue.textContent = slider.value
    removeGrid(currentSize)
    currentSize = slider.value
    // create new squares
    createGrid(slider.value)
})

function removeGrid(size) {
    const sketchField = []
    for ( let i = 0; i < ( size * size ); i++) {
        sketchField[i] = document.querySelector('.sketch-field')
        etchAsketch.removeChild(sketchField[i])
    }
}

function createGrid(size = 16) {
    const sketchField = [] // Array for containing div blocks
    const sizeFactor = 100 / size
    for ( let i = 0; i < (size * size); i++) {
        // loop to create div blocks
        sketchField[i] = document.createElement('div')
        sketchField[i].classList.add('sketch-field')
        sketchField[i].id = `block-${i}`
        sketchField[i].style.height = `${sizeFactor}%`
        sketchField[i].style.width = `${sizeFactor}%`
        // append the squares
        etchAsketch.appendChild(sketchField[i])
    }
    const sketchBlocks = document.querySelectorAll('.sketch-field')

    sketchBlocks.forEach( sketchBlock => {
        sketchBlock.addEventListener('mouseover', changeColor)
    })

}

createGrid()

// const sketchBlocks = document.querySelectorAll('.sketch-field')

// sketchBlocks.forEach( sketchBlock => {
//     sketchBlock.addEventListener('click', changeColor(sketchBlock.id))
// })
// sketchBlocks.addEventListener('click', () => {
//     sketchBlocks.addEventListener('hover', )
// })

function changeColor() {
    if (colorOn){
        this.style.backgroundColor = randomColor()
    } else {
        this.style.backgroundColor = "black"
    }
}

function randomColor() {
    const colorR = Math.floor(Math.random() * 255)
    const colorG = Math.floor(Math.random() * 255)
    const colorB = Math.floor(Math.random() * 255)
    return `rgb(${colorR}, ${colorG}, ${colorB})`
}

// event listener for click and hover



// gets all three buttons
//const btns = document.querySelectorAll('button')

// Adds EventListener to each of the three buttons and 
// runs letsPlay function when triggered
//btns.forEach( btn => btn.addEventListener('click', letsPlay))