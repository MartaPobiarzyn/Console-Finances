// choices[1]; //'p'

// var str = 'some string';

// choices.length; //3

// str.length; //11

// str[2]; //m (still indexed at 0, just like arrays, so you can pull characters the same way)

//variables that don't change - STATIC
var choices = ['r', 'p', 's'];
var winningConditions = ['pr', 'rs', 'sp'];
var wins = 0, losses = 0, ties = 0;

//stats variables that will change - DYNAMIC (will change in the loop)
var userChoice = 'r';
var compChoice = choices[Math.floor(Math.random() * choices.length)];



while (true) {
 var compChoice = choices[Math.floor(Math.random()* choices.length)];
 var userChoice = prompt('Choose rock(r), paper(p) or scissors(s).')
 var result = userChoice + compChoice;

 alert(`The computer chose ${compChoice}`); 
 
 if (compChoice === userChoice){
    ties++;
    alert('You tied.');
 } else if (winningConditions.includes()) {
    wins++;
    alert('You won!');
 } else {
    losses++;
    alert('You lost...');
 }


//  alert('Wins: ', wins, 'Losses: ', losses, 'Ties: ', ties);
//  alert('Wins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);

alert(`Wins: ${wins}\nLosses: ${losses}\nTies:${ties}`);

var continuePlaying = confirm('Would you like to continue playing?');

if (continuePlaying === false) {
    document.body.innerText = 'Thanks for playing!';
    break;
}
}