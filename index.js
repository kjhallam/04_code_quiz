
// Click the start button
    // Timer starts (for loop to countdown and remove time off the clock if answer is   incorrect)


    var timer = 60
    var questions = [
        {
            question: 'Why is the sky blue?',
            answers: [ 'reflection of the ocean', 'Ozone releases blue light when heated', 'Because God loves the infantry'],
            correct: 'Ozone releases blue light when heated'
        },
        {
            question: 'What is the meaning of life?',
            answers: ['to be happy', 'to code in javascript', 'undefined'],
            correct: 'undefined'
        }
    ]

    var index = 0;


    var startBtn = document.querySelector('#start');
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