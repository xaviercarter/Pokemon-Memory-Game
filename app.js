//  const variable creation
const section = document.querySelector('section');
const pokeballsCount = document.querySelector('span');
let pokeballsLeft = 3;

// add the pokeballsCount to the text field
pokeballsCount.textContent = pokeballsLeft;

//create an array of objects to access the cards and info for the cards. an image is linked to its name
const getCards = () => [ 
    { imgSrc: "./images/bulbasaur-front.png", pokemon: "bulbasaur", imgSrcBack: "./images/back-of-card.png", },
    { imgSrc: "./images/squirtle-front.png", pokemon: "squirtle", imgSrcBack: "./images/back-of-card.png", },
    { imgSrc: "./images/charmander-front.png", pokemon: "charmander", imgSrcBack: "./images/back-of-card.png", },
    { imgSrc: "./images/bulbasaur-front.png", pokemon: "bulbasaur", imgSrcBack: "./images/back-of-card.png", },
    { imgSrc: "./images/squirtle-front.png", pokemon: "squirtle", imgSrcBack: "./images/back-of-card.png", },
    { imgSrc: "./images/charmander-front.png", pokemon: "charmander", imgSrcBack: "./images/back-of-card.png", },
];

// now that we have the cards all in an array of objects we need a function to shuffle
const shuffleCards = () => {
    const cardInfo = getCards();
    cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};

// using js to generate the html using the shuffled cards this function will generate a card slot and card image
const cardGenerator = () => {
    const cardInfo = shuffleCards();

const cards = document.querySelectorAll(".card");

// loop to generate multiple cards
    cardInfo.forEach(item => {
        const card = document.createElement("div");
        const front = document.createElement("img");
        const back = document.createElement("img");

// create classes for the cards
        card.classList = "card";
        front.classList = "front";
        back.classList = "back";

// html and classes have been created however they do not have nodes attached to them
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

// attach the info to the cards using dot notation
        front.src = item.imgSrc;
        back.src = item.imgSrcBack;
        card.setAttribute('pokemon', item.pokemon);

// flip the card
        card.addEventListener("click", (e) => {

 // card.classList.toggle("toggleCard");
        if (e.target.src == item.imgSrcBack) {
            e.target.src = item.imgSrc;

        } else {
            e.target.src = item.imgSrcBack;
        }
        checkCards(e);
        });
    });
};

//Check for a match, after flipping 2
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("pokemon") === flippedCards[1].getAttribute("pokemon")){
                console.log("match");
            } else {
                console.log('wrong');
                pokeballsLeft--;
                pokeballsCount.textContent = pokeballsLeft;
            } 
    }
};

cardGenerator();

