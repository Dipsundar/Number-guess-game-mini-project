const totalAttempts = 10;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;



const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
let formInput = document.getElementById('guessing-number');
const button = cardBody.querySelector('.btn');
let resultText = cardBody.querySelector('.result-text');
const remainingAttempt = cardBody.querySelector('.remaining-attempt');
const lostWonMessage = document.createElement('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    attempts++;
    if(attempts === 10){
        formInput.disabled = true;
        button.disabled = true;
        alert('Game already finished');
    }
    if(attempts < 11){
        checkResult(parseInt(formInput.value));
        remainingAttempt.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`;
    }
    formInput.value = '';
})

const checkResult = (userInput) => {
    console.log(userInput);
    const randomNumber = getRandomNumber(10);
    console.log(randomNumber);
    if (userInput === randomNumber) {
        resultText.innerHTML = `You have Won.`;
        totalWons++;

    } else {
        resultText.innerHTML = `You have lost. Actual number is: ${randomNumber} , You guess: ${userInput}`;
        totalLosts++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWons} & Lost: ${totalLosts}`;
    lostWonMessage.classList.add('large-text');
    cardBody.appendChild(lostWonMessage);
}

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
}