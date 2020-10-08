
var timerElement = document.getElementById ('time-set');
var startButton = document.getElementById('startBtn');
var startEl= document.getElementById('starter');
var quizEl = document.getElementById('quiz');
var questionElement = document.getElementById('questions');
var buttonA = document.getElementById('btnA');
var buttonB = document.getElementById('btnB');
var buttonC = document.getElementById('btnC');
var resultEl = document.getElementById('results');
var submit = document.getElementById('submit');
var initialText = document.getElementById('initials');
var highScore = document.getElementById('high-score');
var scoreForm = document.getElementById('score-form');
var scoreList = document.getElementById('score-list');
var reStart = document.getElementById('restart');
var loseEl = document.getElementById('loser');
var responseEl = document.getElementById('response');

var topScoreCount = 0;
var topScores = [];
var timeInterval;
var countDown = 60;
var score = 0;

var currentQ = 0;
var currentScore = 0;
var setTimesup = 0;
var timeSet = 0;

loadTopScores();

var myQuestions = [{
   
        question: 'What is Javascript?',
        answer: ['A. content', 'B. design', 'C. functionality'],
        correct: 3
    },
{
        question: 'What is the correct way to identify a variable in Javascript?',
        answer: ['A. var 2 | 0', 'B. var i = 0', 'C. var i - 0'],
        correct: 2
        },
{
        question: 'You can use a function as (a)...',
        answer: ['A. declaration', 'B. expression ', 'C. all of the above'],
        correct: 3
}
];


quizEl.style.display = "none";
resultEl.style.display = "none";
loseEl.style.display = "none";

function setTime() {
    timeInterval = setInterval(function () {
        if (countDown <= 1 || currentQ === myQuestions.length) {
            clearInterval(timeInterval);
            countDown = 0;
            quizEl.style.display = "none";
            loseEl.style.display = "block";

        }
        countDown--;
        timerElement.textContent = countDown;
    }, 1000);
}

function nextQuestion (currentQ) {
    startButton.style.display = "none"
    if (currentQ < myQuestions.length) {
        questionElement.textContent = myQuestions[currentQ].question
        buttonA.textContent = myQuestions[currentQ].answer[0]
        buttonB.textContent = myQuestions[currentQ].answer[1]
        buttonC.textContent = myQuestions[currentQ].answer[2]     
    } else {
    
         score = timeSet;
         renderScoreForm ();
         quizEl.style.display = "none";
         startEl.style.display = "none";
         resultEl.style.display = "block";
     }
}

function renderScoreForm () {
    console.log("I am in render score.")
    for (var i = 0; i < topScores.length; i++){
        var li = document.createElement('li');
        li.setAttribute('data-index', i);
        li.innerHTML = topScores[i];
        scoreList.appendChild(li);
    } 
}

function beginQuiz() {
    console.log('click');
    startEl.style.display = "none";
    quizEl.style.display = "block";
    setTime();
    nextQuestion(currentQ)
} 

var i = 0;


function showAnswers (num) {
    if (num === myQuestions[currentQ].correct)
        {
        responseEl.style.display = "block";
        responseEl.textContent = "CORRECT!";

        setTimesup -= 10;
        currentQ++;
        nextQuestion(currentQ);
        
        } else {
            (num != myQuestions[currentQ].correct)
            {
        responseEl.style.display = "block";
        responseEl.textContent = "WRONG!";
            }
        }
} 

function responseElHide () {
    responseEl.style.display = "none"
} 

function placeScore () {
    localStorage.setItem ("placeScore", JSON.stringify(topScores));
    
}

function addScore () {
    var totalScore = 'Player: ' + initialText.value.trim() + '' + score
    if (!totalScore) {
        return false;
    }
    var totalScore = 'Player: ' + initialText.value.trim() + '' + score
        console.log("score function");
    var user = {
        user: initialText.value.trim(),
        score: score
    }

    topScores.push(user);
    initialText.value = '';
    placeScore();
    renderScoreForm ();
}

function loadTopScores() {
var storedTopScores = JSON.parse(localStorage.getItem("placeScore"));
 if (storedTopScores !== null) {
     topScores = storedTopScores;
 }
}

startButton.addEventListener('click', beginQuiz);

buttonA.addEventListener('click', 
    function (){
        showAnswers(3);
        })

buttonB.addEventListener('click',
function (){
    showAnswers(2)
})
buttonC.addEventListener('click',
function (){
    showAnswers(3)
})

submit.addEventListener('click', function(event) {
  event.preventDefault
  addScore();
})

reStart.addEventListener('click', 
function () {
    currentQ = 0;
    score = 0;
    timeSet = 60;
    resultEl.style.display = "none";
    beginQuiz ();
})

loseEl.addEventListener('click', function (){
    currentQ = 0;
    score = 0;
    timeSet = 60;
    loseEl.style.display = "none";
    timerElement.textContent = "60";
    clearInterval(timeInterval);
    beginQuiz ();
})
