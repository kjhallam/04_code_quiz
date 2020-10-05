var startButton = document.getElementById ('start')
var questionContainerEl = document.getElementById ('quest-container')
var questionEl = document.getElementById ('questions')
var answersEl = document.getElementById ('answers')

var shuffledQuestions, currentQuestions

startButton.addEventListener ('click', startGame)

function startGame () {
    console.log('started')
    startButton.classList.add('hide')
    
    currentQuestionIndex = 0

    questionContainerEl.classList.remove('hide')
}

function setNextQuestion () {
    resetState ()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 
}

function showQuestion (question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
     button.innerText = answer.innerTextbutton.classList.add('btn')
     if (answer.correct) {
         button.dataset.correct = answer.correct
     } 
     button.addEventListener('click', selectAnswer)
     answersEl.appendChild(button)
    })
}

function selectAnswer () {

}

var myQuestions = [
    {
        question: 'What is Javascript?',
        answers: [ 'content', 'design', 'functionality'],
        correct: 'functionality'
    },
    {
        question: 'What is the correct way to identify a variable in Javascript?',
        answers: ['johnny on the spot', 'var i = 0 ', 'var i - 0'],
        correct: 'var i = 0'
    },

{
    question: 'You can use a function as (a)...',
    answers: ['declaration', 'expression ', 'both'],
    correct: 'both'
}
]