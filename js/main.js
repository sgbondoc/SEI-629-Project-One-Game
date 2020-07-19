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
    
    // Cards should be placed in 12 random positions face down
    // OPTIONAL: Flash the front of cards at same time and flip back over to back of cards
    
// Create object for cards and placement
let gameSetup = {

    cardValues: ['burger-king', 'five-guys', 'in-n-out', 'kfc', 'mcdonalds', 'nathans', 'burger-king', 'five-guys', 'in-n-out', 'kfc', 'mcdonalds', 'nathans'],
    
    divContainers: [],

    frontCards: [],

    backCards: [],

    divCardElements: [],
    
    frontImageElements: [],

    backImageElements: [],

    memoryCardElements: [],
    
    cardContainers: function () {
        for (let i = 0; i < this.cardValues.length; i ++) {
            let container = {
                class: 'card-container',
                id: 'div' + i,
                title: this.cardValues[i]
            }
            this.divContainers.push(container)
        }
    },
    
    frontImages: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let image = {
                class:'front-card',
                src: 'images/card' + i + '.jpg',
                alt: this.cardValues[i],
                value: this.cardValues[i]
            }
            this.frontCards.push(image)
        }
    },
    
    backImages: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let image = {
                class:'back-card',
                src: 'images/back.jpg',
                alt: 'memory-card',
                value: this.cardValues[i]
            }
            this.backCards.push(image)
        }    
    },
    
    createDivs: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let createCardDivs = document.createElement('div')
            createCardDivs.setAttribute ('class', this.divContainers[i].class)
            createCardDivs.setAttribute ('id', this.divContainers[i].id)
            createCardDivs.setAttribute ('title', this.divContainers[i].title)
            this.divCardElements.push(createCardDivs)                
        }
    },


    createFront: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let createImage = document.createElement('img')
            createImage.setAttribute ('class', this.frontCards[i].class) 
            createImage.setAttribute ('src', this.frontCards[i].src) 
            createImage.setAttribute ('alt', this.frontCards[i].alt) 
            createImage.setAttribute ('value', this.frontCards[i].value) 
            this.frontImageElements.push(createImage)
        }
    },    
    
    createBack: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let createImage = document.createElement('img')
            createImage.setAttribute ('class', this.backCards[i].class) 
            createImage.setAttribute ('src', this.backCards[i].src) 
            createImage.setAttribute ('alt', this.backCards[i].alt) 
            createImage.setAttribute ('value', this.backCards[i].value) 
            this.backImageElements.push(createImage)
        }
    },    
    
    appendDiv: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            const main = document.querySelector('.game-board')
            main.appendChild(this.divCardElements[i])
        }    
    },

    appendFront: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let card = document.querySelector(`[id="${this.divContainers[i].id}"]`)
            card.appendChild(this.frontImageElements[i])
        }
    },

    appendBack: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let card = document.querySelector(`[id="${this.divContainers[i].id}"]`)
            card.appendChild(this.backImageElements[i])
        }
    },

    allCardElements: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let memoryCardElement = {
                div: this.divCardElements[i],
                frontCard: this.frontImageElements[i],
                backCard: this.backImageElements[i]
            }
            this.memoryCardElements.push(memoryCardElement)
        }
    },

    // fisher-yates shuffle (https://bost.ocks.org/mike/shuffle/)
    shuffle: function (array) {
        let m = array.length
        let t = ''
        let i = ''
        
        while (m) {
            i = Math.floor(Math.random() * m--)
            t = array[m]
            array[m] = array[i]
            array[i] = t
        }
        
        return array
    },

    appendShuffleElements: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            const main = document.querySelector('.game-board')
            main.appendChild(this.memoryCardElements[i].div)
        }    
    }
}    

// Call functions to create, place, and append memory game elements

// array of each card container attributes and images
gameSetup.cardContainers()
gameSetup.frontImages()
gameSetup.backImages()

// array of each element
gameSetup.createDivs()
gameSetup.createFront()
gameSetup.createBack()

// append each element into postion on game board
const main = document.querySelector('.game-board')
gameSetup.appendDiv()
gameSetup.appendFront()
gameSetup.appendBack()

// all game elements set up in object
gameSetup.allCardElements()
    
        
// GAME PLAY

let time = 30
let matchCount = 0

let clickedCard = ''
let clickedCardValue = ''
let clickedValues = []

const clickCards = document.querySelectorAll('.card-container')

// To start game:

    // User clicks on start button:
    // Add event listener to "start" button
    // Game board becomes clickable
    // Timer starts
    // Match counter set at 0
    // Shuffle array of cards to random positions
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
            // clickCards.removeEventListener('click', flipCard)
        }
    }, 1000)

    // event listener for clicks on cards
    clickCards.forEach(clickCard => clickCard.addEventListener('click', flipCard))
}
    
// event listeners for click on start button
document.querySelector('button').addEventListener('click', function () {
    setTimer()

    gameSetup.shuffle(gameSetup.memoryCardElements)
    console.log(gameSetup.memoryCardElements)
    
    gameSetup.appendShuffleElements()
})

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

// OPTIONAL: additional rounds