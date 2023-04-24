#Planning for Pokemon Memory Game

## Analyze the apps functionality

As a user....
- I want to be able to be able to initialize the game with a start button
- I want to be able to have multiple chances to get matches
- When the game starts I want to be able to see all the cards for a period of at least 5 seconds
- I want some type of identifier for when a match is wrong
- I want my correct matches to stay flipped
- I want to play again when all matches are correct
- I want an unlimited amount of tries as a childrens game or a minimum of 10 tries

Bonus
I want the Pokemon matches to show in the pokedex to reflect they are "caught"
I want to go to the next level to catch more Pokemon, "Gotta Catchem All!"

## Design

- clean/minimalist
- flat design
- blue and dark blue background
- pokemon logo for the title
- cards are orange and white with a picture of the pokemon
- font Manrope, Rubik or Nunito Sans
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet">
```
```css
font-family: 'Manrope', sans-serif;
```

## Wireframe
- High fidelity
    - Working demo (almost)
    - Buttons are clickable
    - Hover effects happen on those buttons
    - More tech demo than a drawing
- Low fidelity
    - Drawing of the app
    - Layout of the page (pages)
    - Where is the header going?
    - Where are my messages to the user going
    - Where are my buttons going
    - Does this feel too crowded? Does this feel to empty

## Pseudocode

1) Render play game screen
    - img for Pokemon: Memory Game 
    - div and img for pokeball
    - html button with playgame to initialize the board
    
2) Define required constants
    - color constant - background, titles, headers

3) Define required variables used to track the state of the game
    1) game board - 1 array with 5 nested arrays
    2) randomize array for the pokemon cards
    3) winner / game complete variable

4) Cache DOM elements
    1) Incorrect match
    2) Winning match
    3) Replay button
    4) Game board

    bonus: pokedex
    
5) Upon loading the app should:
    1) Load the Pokemon: Memory Game img, pokeball img div, play game button
    2) Play game button should initialize the game board 
        - game board should be 10 columns 5 rows
        - the game should start a timer that allows the player to see the cards on the board for 5 secs
        - all cards should be face up and visible 
        - the board arrays should have randomized placement of cards
    3) After the 5 seconds are up the cards should flip over to start the game

6) Handle a player interaction
    1) Update the board with whether the player has chosen a correct pair
        - if an incorrect pair is chosen the cards should flip back over
        - if a correct pair is chosen the correct pair should stay face up
    2) Check for winner state

7) Handle a player clicking the replay
    1) Reset the state variables
    2) Render the board

8) Check for a winner
    1) If the requirement for all cards are strictly equal to another card has been met game is won

9) Final game state
    1) once all matches have been met render game state for "Pokemon Caught"
    2) Board is removed
    3) Pokemon: Memory Game logo at the top and centered
        - pokeball img in the center 
        - play next level button
            - play next level will be null as this is out of scope for this project

## Identify the applications state (data)

- Game board - 1 array 5 nested arrays
```js
let board
```
- Card flip
```js
cards = [
    {front: 'ace', back: 'backOfCard'},
    {front: 'queen', back: 'backOfCard'},
    {front: 'jack', back: 'backOfCard'},
]
```

##Wireframe Sketch

![Alt text](https://github.com/xaviercarter/Pokemon-Memory-Game/blob/c5b9906d9f6830e757c258e3f55799d5d142d8b3/Pokemon%20Memory%20Game%20Sketch.png) "Optional Title")
