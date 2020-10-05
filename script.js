
// Click the start button
    // Timer starts (for loop to countdown and remove time off the clock if answer is   incorrect)


    var timer = 60
    var questions = [
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

    var index = 0;

    var startBtn = document.getElementById('start');
    var resultsEl = document.getElementById('results')
    var h2el = document.getElementById('h2')
    var timerEl = document.getElementById('timer')
    var questionEl = document.getElementById('question')
    var answersEl = document.getElementById('answers')

    
    function startQuiz() {
        setInterval(function() {
            timer--
            timerEl.innerHTML = timer
           }, 1000)

           var currentQuestion = questions[index].question
           var answers = question[index].answers
           questionEl.innerHTML = currentQuestion

           for(var i = 0; i < questions[index].answers; i++){
        //loop through the answers array and add buttons with info
           }

    }





    startBtn.addEventListener('click', startQuiz)
    


//---ARRAY of Questions (series of questions & answers)
    //I am presented with a question 
    // answer questions (display correct or wrong)
        // time is subtracted - from the clock
// all questions are answered or the timer reaches 0
// the game is over
// THEN I can save my initials and score