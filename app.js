let flippedCard = null;
let preventClick = false;
let matchesFound = 0;
let turnsLeft = 5;

// flip the card by removing the color-hidden class this reveals the color underneath
const flipCard = (e) => {
    const target = e.currentTarget;
   
    if ( preventClick || target === flippedCard || target.className.includes('correct')) {
        return;
    }

    target.className = target.className
        .replace('color-hidden', '')
        .trim();
    target.className += ' correct';
    
// flip first card and show until second card is clicked
    if (!flippedCard) {
        flippedCard = target;
        
    } else if (flippedCard) {

// after first card is flipped check for a match if no match flip card back over
        if (flippedCard.getAttribute('data-card') !== target.getAttribute('data-card')) {
            preventClick = true;
            setTimeout(() => {
                flippedCard.className = flippedCard.className.replace('correct', '').trim() +
                ' color-hidden';
                target.className = target.className.replace('correct', '').trim() + 
                ' color-hidden';
                flippedCard = null;
                preventClick = false;

// if no match found after check turnsLeft is reduced by 1
                turnsLeft--;
                console.log(turnsLeft);
                document.getElementById('turnsUp').innerHTML = "Turns Left: " + turnsLeft ;
                if (turnsLeft === 0) {
                    console.log('you lose');
                    document.body.innerHTML = "Sorry you lose!";
                }
            }, 500);
        } else {
            matchesFound++;
            flippedCard = null;

// create win logic and print to the screen
            if (matchesFound === 8) {
                console.log('you win');
                document.body.innerHTML = "You Win!";
            }
        }
    }
}

