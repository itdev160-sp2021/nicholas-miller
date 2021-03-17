// Welcome message
var salutation =  'Welcome to the Hip Hop Gauntlet!!! ';
var greeting = salutation + '! Here are the top rappers in the gauntlet';
var greetingEl = document.getElementById('greeting');


greetingEl.textContent = greeting;



    

// Mic scores
var micScore1 = 5,
    micScore2 = 4,
    micScore3 = 3.5,
    micScore4 = 3,
    micScore5 = 4,
    micScore6 = 4.5,
    micScore1El = document.getElementById('micScore1');
    micScore2El = document.getElementById('micScore2');
    micScore3El = document.getElementById('micScore3');
    micScore4El = document.getElementById('micScore4');
    micScore5El = document.getElementById('micScore5');
    micScore6El = document.getElementById('micScore6');
    totalScoreEl = document.getElementById('totalScore');

micScore1El.textContent = micScore1.toFixed(2);
micScore2El.textContent = micScore2.toFixed(2);
micScore3El.textContent = micScore3.toFixed(2);
micScore4El.textContent = micScore4.toFixed(2);
micScore5El.textContent = micScore5.toFixed(2);
micScore6El.textContent = micScore6.toFixed(2);
totalScoreEl.textContent = totalScore.toFixed(2);





