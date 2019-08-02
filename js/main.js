/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');
const rpsLookup = {
    r: {
        imgUrl: 'imgs/rock.png',
        beats: 's'
    },
    p: {
        imgUrl: 'imgs/paper.png',
        beats: 'r'
    },
    s: {
        imgUrl: 'imgs/scissors.png',
        beats: 'p'
    }
}

/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/

//in render, we are grabbing something (element p-score id) over and over again, we should cache
const scoresEl = {
    p: document.getElementById('p-score'),
    t: document.getElementById('t-score'),
    c: document.getElementById('c-score'),
}
//rock paper or scissors imgs. BorderEl to say who is the winner for that round that is why we made an obj of objs
const resultsEl = {
    p: {
        borderEl: document.getElementById('p-result'),
        imgEl: document.querySelector('#p-result img')
    },
    c: {
        borderEl: document.getElementById('c-result'),
        imgEl: document.querySelector('#c-result img')
    }
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
 //go through the scoresEl in cache to grab html ids for scores and update the score!
 for (let score in scores){
     scoresEl[score].textContent = scores[score];
 }

 //how we will render the board, if winner is c,p then we want grey. Ternary
 
 for (let result in results){
     
     resultsEl[result].borderEl.style.borderColor = 
        winner === result ? 'grey' : 'white';
    //lookup rpsLookup p or c and from that grab img
     resultsEl[result].imgEl.src = 
        rpsLookup[results[result]].imgUrl;
 }

}

function playRound() {
    //Determine results
    results.p = getRandomRPS();
    results.c = getRandomRPS();


    //Determine Winner
    if (results.p === results.c){
        winner = 't';
        scores[winner] += 1;
    } else if (results.c === rpsLookup[results.p].beats){
        winner = 'p';
        scores[winner] += 1;
    } else {
        winner ='c';
        scores[winner] += 1;
    }
    

    render();
}

function getRandomRPS() {
    let rps = Object.keys(rpsLookup); // [r,p,s]
    let rndIdx = Math.floor(Math.random() * rps.length );
    return rps[rndIdx] //return r p s KEY to PLAYROUNBD FUnction where results obj is equal to rps
}