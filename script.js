// Etch-a-sketch

// Create etch-a-sketch

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
    createGrid(slider.value)
})

function createGrid(size = 16) {
    const sketchField = [] // Array for containing div blocks
    const sizeFactor = 100 / size
    for ( let i = 0; i < (size * size); i++) {
        // loop to create div blocks
        sketchField[i] = document.createElement('div')
        sketchField[i].classList.add('sketch-field')
        sketchField[i].height = `${sizeFactor}%`
        sketchField[i].width = `${sizeFactor}%`
        // actually append the stupid squares fam
        // start her ya idiot-------------------------------------
    }

}



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
