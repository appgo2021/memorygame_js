const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.getElementById('grid');
const resultDisplay = document.querySelector('[data-result]');
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneIds = cardsChosenIds[0]
    const optionTwoIds = cardsChosenIds[1]

    if(optionOneIds == optionTwoIds) {
        alert('You have clicked the same image!')
        cards[optionOneIds].setAttribute('src', 'images/blank.png')
        cards[optionTwoIds].setAttribute('src', 'images/blank.png')
    }

    if(cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneIds].setAttribute('src', 'images/white.png')
        cards[optionTwoIds].setAttribute('src', 'images/white.png')
        cards[optionOneIds].removeEventListener('click', flipCard)
        cards[optionTwoIds].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneIds].setAttribute('src', 'images/blank.png')
        cards[optionTwoIds].setAttribute('src', 'images/blank.png')
        alert('Sorry Try again')
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation you found them all'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}