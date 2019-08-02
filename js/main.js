/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/

//in render, we are grabbing something (element p-score id) over and over again, we should cache
const scoresEl = {
    p: document.getElementById('p-score'),
    t: document.getElementById('t-score'),
    c: document.getElementById('c-score'),
}

/*----- event listeners -----*/
document.querySelector('main button')
.addEventListener('click', playRound);

/*----- functions -----*/

init();

// update state variables with init, then call render

function init() {
    scores = {
        p: 0,
        t: 0,
        c: 0
    };

    results = {
        p: 'r',
        c: 'r'
    };

    winner = null;
    render();
}

function render() {
 //render scores
 for (let score in scores){
     console.log(score)
     scoresEl[score].textContent = scores[score];
 }

}

function playRound() {

}
// alert('ready!')