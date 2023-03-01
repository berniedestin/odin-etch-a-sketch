// Etch-a-sketch

// Create etch-a-sketch




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
