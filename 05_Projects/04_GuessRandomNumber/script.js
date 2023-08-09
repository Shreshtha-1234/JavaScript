let randomNumber = Math.floor(Math.random()*100 + 1);
console.log(randomNumber);
const submitButton = document.getElementById("subBtn");
const valueField = document.getElementById("val");
const arrayDiplayArea = document.getElementById("oldGuesses");
const remainingElementDisplayArea = document.getElementById("remainingAttempts");
const paragraph = document.getElementById("loworhigh");
const parentResultLocation = document.getElementById("resultparas");

const newButton = document.createElement('button');

let guessedValues = [];
let attemptNumber = 1; 
let canPlay = true;


if(canPlay)
{
submitButton.addEventListener('click',
(e)=>{
    e.preventDefault();
    const userValue = parseInt(valueField.value);
    validateUserInput(userValue); 
})
}

function validateUserInput(value)
{
    if(isNaN(value))
    alert("Kindly enter a number");
    else if(value<1)
    alert('Kindly enter a number greater than 0');
    else if(value>100)
    alert('Kindly enter a number below 100');
    else
    {
        updateUserProp();
        if(attemptNumber>10)
        {
            displayMessage(`Game Over ! Random Number was ${randomNumber}`);
            endGame();
        }
        else
        {
            guessedValues.push(value);
            attemptNumber++;
            checkGuess(value);
        }
    }
   
}

function checkGuess(value)
{
    if(value==randomNumber)
    {
        displayMessage("You guessed it right !");
        endGame();
    }
    else if(value < randomNumber)
    {
        displayMessage("You guessed it less !");
    }
    else
    {
        displayMessage("You guessed it more !");
    }
}

function updateUserProp()
{
    valueField.value='';
    arrayDiplayArea.innerHTML=guessedValues;
    remainingElementDisplayArea.innerHTML=(11-attemptNumber);
}
function displayMessage(value)
{
    paragraph.innerHTML=`<h2>${value}</h2>`
}

function endGame()
{
    valueField.value='';
    valueField.setAttribute('disabled','')
    newButton.id = "bBtn"
    newButton.innerHTML='Start Again'
    parentResultLocation.appendChild(newButton);
    canPlay=false;
    newGame();
}

function newGame()
{
    const b = document.getElementById('bBtn');
    b.addEventListener('click', (e)=>{
        paragraph.innerHTML='';
        randomNumber = Math.floor(Math.random()*100 + 1);
        guessedValues = [];
        attemptNumber = 1;
        valueField.removeAttribute('disabled','')
        parentResultLocation.removeChild(b);
        canPlay=true;
    })
}