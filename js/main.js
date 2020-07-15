console.log("Hello")

// Variables
// Cached Elements
// Event Listeners
// Functions / Game Logic
let time = 30
// const card = document.querySelector('img')

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

// Container element for memory cards
let cardsContainer = document.createElement('div')
cardsContainer.setAttribute('class', 'cards-container')

// Append card container to DOM
document.body.appendChild(cardsContainer)

// Create and place back of memory card element
const placeCards = (numOfCards) => {
    for (let i = 0; i < numOfCards; i++) {
        let memoryCard = document.createElement('img')
        memoryCard.setAttribute('class', 'memoryCard')
        memoryCard.setAttribute('src', 'images/back.jpg')        
        memoryCard.setAttribute('value', i)
        cardsContainer.appendChild(memoryCard)
    }
}

// Create array of memory cards
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

placeCards(12)
getCards()
console.log(cards)

// User clicks on start button:
    // add event listener to "start" button
    // timer starts - function
    // match counter will start counting matches - function

// User clicks on first card (1 of 2):
    // add event listener to cards
    // show face of card - function

// let clickedCard = document.querySelector('img')

// clickedCard.addEventListener('click', () => {
//     console.log("This works!")
//     flipCard()
// })

// const flipCard = () => {
//     let clickedCardValue = (parseInt(clickedCard.getAttribute('value')))
//     clickedCard.setAttribute('src', cards[clickedCardValue].imageSource)
//     clickedCard.setAttribute('value', cards[clickedCardValue].imageValue)
// }

// User clicks on second card (2 of 2):
    // add event listener to cards
    // show face of card - function
    
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



