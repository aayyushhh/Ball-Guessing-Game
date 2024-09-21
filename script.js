const circleContainer = document.getElementById('circle-container');
const message = document.getElementById('message');
const attemptCountElement = document.getElementById('attempt-count');


const playBtn = document.getElementById('play-btn');
const rulesContainer = document.getElementById('rules-container');
const gameContainer = document.getElementById('game-container');

playBtn.addEventListener('click', () => {
    rulesContainer.style.display = 'none';  
    gameContainer.style.display = 'block';  
});


const randomNumber = Math.floor(Math.random() * 40) + 1;
console.log(`Random Number: ${randomNumber}`);  

let attempts = 0;



function handleCircleClick(e) {
    const userGuess = parseInt(e.target.textContent);

    if (attempts <= 6) {
        if (userGuess < randomNumber) {
            e.target.classList.add('low');
            message.textContent = `Your guess is too low!`;
        } else if (userGuess > randomNumber) {
            e.target.classList.add('high');
            message.textContent = `Your guess is too high!`;
        } else {
            e.target.classList.add('correct');
            message.textContent = `Congratulations! You guessed the correct number: ${randomNumber} in ${attempts} attempt(s)`;
            disableCircles();
            return;  
        }

        
        attempts++;
        attemptCountElement.innerText = attempts;

        
        if (attempts > 6) {
            message.textContent = `You lost! The correct number was ${randomNumber}`;

            disableCircles();
        }
    }
}


function disableCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.removeEventListener('click', handleCircleClick);
        circle.style.cursor = 'default';  
    });
}


for (let i = 1; i <= 40; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = i; 
    circle.addEventListener('click', handleCircleClick);  
    circleContainer.appendChild(circle);
}
