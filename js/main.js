console.log("Hello")

// PROJECT ONE: FAST FOOD MEMORY

// SET UP GAME PAGE

    // User should see on the page:
    // Game title
    // Timer
    // OPTIONAL: round counter
    // Match counter
    // "START" button
    // 12 cards
    
// GAME PLAY

    // To start game:
    // Cards should be placed in 12 random positions face down
    // OPTIONAL: Flash the front of cards at same time and flip back over to back of cards

let time = 30
let matchCount = 0

let clickedCard = ''
let clickedCardValue = ''
let clickedValues = []

const clickCards = document.querySelectorAll('.card-container')
       
// Create array for front of cards
// Shuffle cards => NEED TO DO

let cards = []

const getCards = () => {
    for (let i = 0; i <= 11; i++) {
        let image = {
            imageSource: 'images/card' + i + '.jpg',
            imageValue: i
        }
        cards.push(image)
    }
}

getCards()

// Shuffle array of cards to random positions - function

// User clicks on start button:
    // Add event listener to "start" button
    // Game board becomes clickable
    // Timer starts
    // Match counter set at 0
    // Reset game board => NEED TO DO

const setTimer = () => {
    // start timer in red
    const timer = setInterval(() => {
        document.querySelector('#timer').innerHTML = ('TIMER: ' + time + ' SECONDS')
        document.querySelector('#timer').style.color = 'red'
        time--
        if (time === 0) {
            // reset timer and back to white
            clearInterval(timer)
            time = 30
            document.querySelector('#timer').innerHTML = ('TIMER: ' + time + ' SECONDS')
            document.querySelector('#timer').style.color = 'white'
            setTimeout(function() { alert('Time is up! MATCH COUNT: ' + matchCount + '/6') }, 1000)
            clickCards.removeEventListener('click', flipCard)
        }
    }, 1000)

    // event listener for clicks on cards
    clickCards.forEach(clickCard => clickCard.addEventListener('click', flipCard))
}
 
// event listeners for click on start button
document.querySelector('button').addEventListener('click', setTimer)
// document.querySelector('button').addEventListener('click' resetGame)


// User clicks on 2 cards at a time:

// click event on a card invokes function to flip card, then handles cards, and checks for matches
function flipCard(e) {    
    this.classList.toggle('flip')
    handleCards(e)
}

const handleCards = (e) => {
    // exact element image class back-card 
    e.target = document.querySelector('.flip')
    clickedCard = e.target
    // card value only
    clickedCardValue = e.target.getAttribute('value')
    // pushes values of cards clicked into an empty array
    clickedValues.push(clickedCardValue)
    // after two clicks, check card for a match
    if (clickedValues.length === 2) {
        checkMatch(clickedValues)
    }
}

// Check if the cards match and keep count of matches:

const checkMatch = (clickedValues) => {
    // takes parameter array and checks the card values for a match
    if (clickedValues[0] === clickedValues[1]) {
        // update match counter
        matchCount++
        document.querySelector('#match-counter').innerHTML = ('MATCH COUNT: ' + matchCount + "/6")
        // lock matched cards to stay face up
        let keepFaceUp = document.querySelectorAll('.flip')
        keepFaceUp.forEach(element => element.removeEventListener('click', flipCard))
        // reset array for next pair of clicks
        clickedValues.length = 0        
    } else {
        // an umatched pair will flip face down
        // access first card element with div card-container flip && clicked card value
        let faceDown1 = document.querySelectorAll(`[title="${clickedValues[0]}"]`)
        // set that class attribute to card-container to flip back over
        setTimeout(function() {
            faceDown1.forEach(element => element.setAttribute('class', 'card-container'))
        }, 1000)
        // access second card element with div card-container flip && clicked card value
        let faceDown2 = document.querySelectorAll(`[title="${clickedValues[1]}"]`)
        setTimeout(function() {
            faceDown2.forEach(element => element.setAttribute('class', 'card-container'))
        }, 1000)        
        // reset array for next pair of clicks
        clickedValues.length = 0
    }
}

// console.log(clickCards)   // all elements with class card-container
// console.log(clickedCard)  // last clicked card back-card img
// console.log(clickedCardValue)   // last clicked card value only
// console.log(clickedValues)  // array of both values only from last 2 clicked cards


// OPTIONAL: additional rounds
