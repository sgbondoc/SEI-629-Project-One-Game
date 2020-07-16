console.log("Hello")

// SET UP GAME PAGE
    // User should see on the page:
    // game title - div / h1
    // timer - div / span id timer
    // OPTIONAL: round - div / span id round
    // match counter - div / span id counter
    // "start" button - div/ button
    // back side of 12 cards - div class cards (image, source, value)
    
// GAME PLAY
    // To start game OR to reset game:
    // cards should be placed in 12 random positions
    // show image of back of card for each of the 12 positions
    // OPTIONAL: flash the front of cards at same time and flip back over to back of cards

// CODE
    
// Variables
// Cached Elements
// Event Listeners
// Functions / Game Logic

let time = 30
let matchCount = 0
       
// Create array for front of cards
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
console.log(cards)

// Shuffle array of cards to random positions - function

// User clicks on start button:
    // Add event listener to "start" button
    // Timer starts - function
    // Match counter will start counting matches - function

const setTimer = () => {
    const timer = setInterval(() => {
        document.querySelector('#timer').innerHTML = ('TIMER: ' + time + ' SECONDS')
        document.querySelector('#timer').style.color = 'red'
        time--
        if (time === 0) {
            clearInterval(timer)
            time = 30
            document.querySelector('#timer').innerHTML = ('TIMER: ' + time + ' SECONDS')
            document.querySelector('#timer').style.color = 'white'
        }
    }, 1000)
}
    
document.querySelector('button').addEventListener('click', setTimer)

// User clicks on first card (1 of 2):
    // add event listener to cards
    // show face of card - function

// User clicks on second card (2 of 2):
    // add event listener to cards
    // show face of card - function

const clickedCards = document.querySelectorAll('.card-container')

function flipCard(e) {    
    this.classList.toggle('flip')
    clickCard(e)
}

let clickCardValue = ''

const clickCard = (e) => {
    e.target = document.querySelector('.flip').getAttribute('value')
    console.log(e.target)
    clickCardValue = e.target.getAttribute('value')
    console.log(clickCardValue)
    // let clickValues = []
    // clickValues.push(clickCardValue)
    // console.log(clickValues)
}

clickedCards.forEach(clickedCard => clickedCard.addEventListener('click', flipCard))




// Check if the cards match - function:
    // if match 
        // keep both cards faced up
    // if not match
        // turn both cards over to show back of cards

// keep count of matches - function:
    // if selected cards are a match
        // count++

// option: if all matches found before timer ends
    // stop timer
    // message user all matches found
    // ask user to play again
        // if yes 
            // reset game
        // if no
            // say goodbye
        
// game timer
    // when timer reaches 0
        // alert user time is up
        // alert user of match count
        // ask user to play again - function
            // if yes 
                // reset game
            // if no
                // say goodbye

// OPTIONAL: additional rounds

