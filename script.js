// Etch-a-sketch

// Create etch-a-sketch
const etchAsketch = document.querySelector('.etch-a-sketch')

let currentSize = 16

//etchAsketch.textContent = 'it worked'

const slideValue = document.querySelector('#slider-value')
const slider = document.querySelector('#slider')

slider.addEventListener('input', () => {
    // updates number in div
    slideValue.textContent = slider.value
    // create new squares
    
})

slider.addEventListener('change', () => {
    // updates number in div
    // slideValue.textContent = slider.value
    // create new squares
    removeGrid(currentSize)
    currentSize = slider.value
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
        sketchField[i].style.height = `${sizeFactor}%`
        sketchField[i].style.width = `${sizeFactor}%`
        // actually append the stupid squares fam
        etchAsketch.appendChild(sketchField[i])
    }

}

createGrid()

// This code is for reference only yall
//
//
// computerResults is the last div and is for posting the results
const computerResults = document.querySelector('.computer')

// gets all three buttons
const btns = document.querySelectorAll('button')

// Adds EventListener to each of the three buttons and 
// runs letsPlay function when triggered
btns.forEach( btn => btn.addEventListener('click', letsPlay))

function letsPlay() {
    // This function resets the .computer div output
    // then set userInput to the class of the clicked button
    // then runs the playRound function and posts the results
    computerResults.textContent = ''
    let userInput = this.classList.value
    const results = playRound(userInput)
    computerResults.textContent = results
}
