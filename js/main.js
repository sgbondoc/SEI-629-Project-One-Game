console.log("Hello")

// PROJECT ONE: FAST FOOD MEMORY

// SET UP GAME PAGE

    // User should see on the page:
    // Game title
    // Timer
    // Match counter
    // "START" button
    // 12 cards
    
// Create object for game set up of cards and placement on page
let gameSetup = {

    cardValues: ['burger-king', 'five-guys', 'in-n-out', 'kfc', 'mcdonalds', 'nathans', 'burger-king', 'five-guys', 'in-n-out', 'kfc', 'mcdonalds', 'nathans'],
    
    divContainers: [],

    frontCards: [],

    backCards: [],

    divCardElements: [],
    
    frontImageElements: [],

    backImageElements: [],

    memoryCardElements: [],
    
    // array for each card container
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
    
    // array for each front image
    frontImages: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let image = {
                class:'front-card',
                src: 'images/card' + i + '.jpg',
                value: this.cardValues[i]
            }
            this.frontCards.push(image)
        }
    },
    
    // array for each back image
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
    
    // array for each div element
    createDivs: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let createCardDivs = document.createElement('div')
            createCardDivs.setAttribute ('class', this.divContainers[i].class)
            createCardDivs.setAttribute ('id', this.divContainers[i].id)
            createCardDivs.setAttribute ('data-title', this.divContainers[i].title)
            this.divCardElements.push(createCardDivs)                
        }
    },

    // array for each front image element
    createFront: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let createImage = document.createElement('img')
            createImage.setAttribute ('class', this.frontCards[i].class) 
            createImage.setAttribute ('src', this.frontCards[i].src) 
            createImage.setAttribute ('value', this.frontCards[i].value) 
            this.frontImageElements.push(createImage)
        }
    },    
    
    // array for each back image element
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
    
    // array to append each div card container
    appendDiv: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            const main = document.querySelector('.game-board')
            main.appendChild(this.divCardElements[i])
        }    
    },

    // array to append each front image to div card container
    appendFront: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let card = document.querySelector(`[id="${this.divContainers[i].id}"]`)
            card.appendChild(this.frontImageElements[i])
        }
    },

    // array to append each back image to div card container
    appendBack: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            let card = document.querySelector(`[id="${this.divContainers[i].id}"]`)
            card.appendChild(this.backImageElements[i])
        }
    },

    // array of all game elements in object
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

    // array to append shuffled elements
    appendShuffleElements: function () {
        for (let i = 0; i < this.cardValues.length; i++) {
            const main = document.querySelector('.game-board')
            main.appendChild(this.memoryCardElements[i].div)
        }    
    },

    // start game method
    startGame: function () {
        let gameBoard = document.querySelector('.game-board')
        while (gameBoard.hasChildNodes()) {
            gameBoard.removeChild(gameBoard.firstChild)
        }
        this.memoryCardElements.length = 0
        clickCards.forEach(element => element.setAttribute('class', 'card-container'))
        time = 30
        matchCount = 0
        document.querySelector('#match-counter').innerHTML = ('MATCH COUNT: ' + matchCount + "/6")
    },

    // set game elements method
    setGame: function () {
        this.cardContainers()
        this.frontImages()
        this.backImages()

        this.createDivs()
        this.createFront()
        this.createBack()

        this.appendDiv()
        this.appendFront()
        this.appendBack()

        this.allCardElements()
    }
}    

// Call functions to create, append, and set memory game elements 

// // start game via object method
// // (didn't work, need to rework code)
// const main = document.querySelector('.game-board')
// gameSetup.setGame()


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

// all game elements set up in an object
gameSetup.allCardElements()


// GAME PLAY

let time = 30
let matchCount = 0

let clickedCard = ''
let clickedCardValue = ''
let clickedClasses = []
let clickedValues = []

const clickCards = document.querySelectorAll('.card-container')

// To start game:

    // User clicks on start button:
    // Add event listener to "start" button
    // Timer starts
    // Match counter set at 0
    // Shuffle array of cards to random positions
    // Set game board
    // Game board becomes clickable
    
// event listener for click on start button
document.querySelector('button').addEventListener('click', function () {
    gameSetup.startGame()
    gameSetup.setGame()
    
    gameSetup.shuffle(gameSetup.memoryCardElements)
    gameSetup.appendShuffleElements()
    
    setTimer()
})

const setTimer = () => {
    // start timer in red
    const timer = setInterval(() => {
        document.querySelector('#timer').innerHTML = ('TIMER: ' + time + ' SECONDS')
        document.querySelector('#timer').style.color = 'red'
        time--
        // stop timer if user finds all matches before alloted time
        if (matchCount === 6) {
            clearInterval(timer)
            setTimeout(function() { alert('Awesome! You found all the matches!') }, 1000)
        }
        if (time === 0) {
            // reset timer and back to white
            clearInterval(timer)
            document.querySelector('#timer').innerHTML = ('TIMER: ' + time + ' SECONDS')
            document.querySelector('#timer').style.color = 'white'
            setTimeout(function() { alert('Time is up! Match Count: ' + matchCount + '/6') }, 1000)
        }
    }, 1000)
    
    // event listener for clicks on cards
    clickCards.forEach(clickCard => clickCard.addEventListener('click', flipCard))
}
    
// User clicks on 2 cards at a time:

// click event on a card invokes function to flip card, then handles cards, and checks for matches
function flipCard(e) {    
    this.classList.toggle('flip')
    handleCards(e)
}

const handleCards = (e) => {
    // exact element image class back-card 
    e.target = document.querySelector('.flip')
    console.log(e.target)
    clickedCard = e.target
    // card class only
    clickedCardClass = e.target.getAttribute('class')
    // pushes classes of cards clicked into an empty array
    clickedClasses.push(clickedCardClass)
    // card value only
    clickedCardValue = e.target.getAttribute('value')
    // pushes values of cards clicked into an empty array
    clickedValues.push(clickedCardValue)
    // after two clicks, check card for a match
    if (clickedValues.length === 2) {
        checkMatch(clickedValues)
        // // diasable clicks while match is checked
        // // (didn't work, need to rework code)
        // clickCards.forEach(element => element.removeEventListener('click', flipCard))
    }
}

// Check if the cards match and keep count of matches:

const checkMatch = (clickedValues) => {
    // takes parameter array and checks the card values for a match
    if (clickedValues[0] === clickedValues[1] && clickedClasses[0] == clickedClasses[1]) {
        // update match counter
        matchCount++
        document.querySelector('#match-counter').innerHTML = ('MATCH COUNT: ' + matchCount + "/6")
        // keep matched cards face up
        let keepFaceUp = document.querySelectorAll('.flip')
        keepFaceUp.forEach(element => element.removeEventListener('click', flipCard)) 
        // reset array for next pair of clicks
        clickedClasses.length = 0
        clickedValues.length = 0
    } else {
        // an umatched pair will flip face down
        // access first card element with div card-container flip && clicked card value
        let faceDown1 = document.querySelectorAll(`[data-title="${clickedValues[0]}"]`)
        // set that class attribute to card-container to flip back over
        setTimeout(function() {
            faceDown1.forEach(element => element.setAttribute('class', 'card-container'))
        }, 1000)
        // access second card element with div card-container flip && clicked card value
        let faceDown2 = document.querySelectorAll(`[data-title="${clickedValues[1]}"]`)
        setTimeout(function() {
            faceDown2.forEach(element => element.setAttribute('class', 'card-container'))
        }, 1000)        
        // reset array for next pair of clicks
        clickedClasses.length = 0
        clickedValues.length = 0
    }
    // // enable clicks after match is checked
    // // (didn't work, need to rework code)
    // clickCards.forEach(clickCard => clickCard.addEventListener('click', flipCard))
}
