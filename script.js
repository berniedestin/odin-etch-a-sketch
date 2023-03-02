// Etch-a-sketch
// Create etch-a-sketch

const etchAsketch = document.querySelector('.etch-a-sketch')

let currentSize = 16 //base size

const slideValue = document.querySelector('#slider-value')
const slider = document.querySelector('#slider')



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
    //console.log(this.id)
    //console.log(this.matches(':hover'))
    
    this.style.backgroundColor = "black"
    

}



// event listener for click and hover



// gets all three buttons
//const btns = document.querySelectorAll('button')

// Adds EventListener to each of the three buttons and 
// runs letsPlay function when triggered
//btns.forEach( btn => btn.addEventListener('click', letsPlay))