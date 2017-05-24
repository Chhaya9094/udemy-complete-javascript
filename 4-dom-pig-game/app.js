/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//document.querySelector('#current-' + activePlayer).textContent = dice; // in order to select ids (like in css), use hash # symbol here [setter]
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent; // [getter]
console.log(x);

document.querySelector('.dice').style.display = 'none'; // select a class with period . symbol here

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*
function btn() {
    //do something here
}
btn();
document.querySelector('.btn-roll').addEventListener('click', btn); // callback function - not called by us, but by another function
*/

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. update the round score IF the rolled number was NOT a 1

}); // anonymous function - no name so cannot be called outside of this expression (created at runtime)
