// Shuffle function
function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//List of questions, their answers including the correct one and an image
let questions = [
    {
        question: "1. Who is the all-time top scorer for Real Madrid?",
        answers: shuffleAnswers(["Cristiano Ronaldo", "Raul", "Alfredo Di Stefano", "Karim Benzema"]),
        correctAnswer: "Cristiano Ronaldo",
        image: "assets/images/cristiano-ronaldo.jpg"
    },
    {
        question: "2. How many UEFA Champions League titles has Real Madrid won?",
        answers: shuffleAnswers(["10", "12", "14", "16"]),
        correctAnswer: "14",
        image: "assets/images/madrid-14.jpg"
    },
    {
        question: "3. Who is the current manager of Real Madrid?",
        answers: shuffleAnswers(["Zinedine Zidane", "Jose Mourinho", "Carlo Ancelotti", "Rafa Benitez"]),
        correctAnswer: "Carlo Ancelotti",
        image: "assets/images/carlo-ancelotti.jpg"
    },
    {
        question: "4. Who is the current captain of Real Madrid?",
        answers: shuffleAnswers(["Nacho", "Sergio Ramos", "Jude Bellingham", "Luka Modric"]),
        correctAnswer: "Nacho",
        image: "assets/images/nacho.jpg"
    },
    {
        question: "5. What time did Sergio Ramos score the famous equalising goal in the 2014 Champions League final?",
        answers: shuffleAnswers(["89:00", "91:54", "92:48", "90:02"]),
        correctAnswer: "92:48",
        image: "assets/images/sergio-ramos.jpg"
    },
    {
        question: "6. Who is Real Madrid's most expensive transfer?",
        answers: shuffleAnswers(["Gareth Bale", "Jude Bellingham", "Eden Hazard", "Toni Kroos"]),
        correctAnswer: "Eden Hazard",
        image: "assets/images/eden-hazard.jpg"
    },
    {
        question: "7. What year was Real Madrid founded?",
        answers: shuffleAnswers(["1910", "1898", "1955", "1902"]),
        correctAnswer: "1902",
        image: "assets/images/real-madrid-1902.jpg"
    },
    {
        question: "8. Who is the current Real Madrid President?",
        answers: shuffleAnswers(["Ramon Calderon", "Florentino Perez", "David Beckham", "Joan Laporta"]),
        correctAnswer: "Florentino Perez",
        image: "assets/images/florentino-perez.jpg"
    }
];

let currentQuestionNumber = 0;
let userScore = 0;
let countdownInterval;

let restart = document.getElementById('restart');
let countdown = document.getElementById('countdown');
let answersBox = document.getElementById('answers');
let question = document.getElementById('question');
let score = document.getElementById('score');

// Function to start the quiz
function startQuiz() {

    countdown.textContent = "";
    restart.innerHTML = "";
    score.textContent = ""

    //An opening explanation for the website and quiz
    let openMessage = "Hope you're ready to test your knowledge on the football club Real Madrid. You will have 120 seconds to answer 8 questions. Click 'Start quiz' below to begin!";
    question.textContent = openMessage;

    answersBox.innerHTML = "";

    let startButton = document.createElement('button');
    startButton.textContent = "Start quiz";
    startButton.addEventListener('click', function () {
        countdown.textContent = "Your countdown: 120 seconds";
        displayQuestion();
        startCountdown();
    });

    answersBox.appendChild(startButton);
}

function displayQuestion() {

    //Making sure the first question from the array is shown
    let currentQuestion = questions[currentQuestionNumber];
    question.textContent = currentQuestion.question;

    //Adding in the answers and running the checkAnswer function when they are clicked
    answersBox.innerHTML = "";
    currentQuestion.answers.forEach(function (option) {
        let button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function () {
            checkAnswer(option);
        });
        answersBox.appendChild(button);
    });

    // Adding the restart quiz button
    restart.innerHTML = "";
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart quiz';
    restartButton.addEventListener('click', function () {
        restartQuiz();
    });
    restart.appendChild(restartButton);

    score.textContent = `Score: ${userScore}/8`;
}

// Checking the answers selected and providing a response
function checkAnswer(selectedOption) {
    let currentQuestion = questions[currentQuestionNumber];
    if (currentQuestion && selectedOption === currentQuestion.correctAnswer) {
        ++userScore;
        Swal.fire({
            imageUrl: currentQuestion.image,
            title: "Correct!",
            imageWidth: 425,
            imageHeight: 250,
            text: "You've got the correct answer.",
            timer: 2000,
        }).then(function () {
            if (++currentQuestionNumber < questions.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        });
    } else {
        Swal.fire({
            title: "That's wrong unfortunately",
            text: `The answer is "${currentQuestion.correctAnswer}."`,
            timer: 2000
        }).then(() => {
            if (++currentQuestionNumber < questions.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        });
    }
}

// Different responses for the end of the quiz depending on the score you get
function endQuiz() {
    clearInterval(countdownInterval);
    let endMessage;
    if (currentQuestionNumber < questions.length) {
        endMessage = {
            title: "Time's up!",
            html: `You ran out of time. You scored ${userScore}/8. Click to share your score on <a href="https://www.facebook.com/" target="_blank" >Facebook</a>!`,
        };
    } else if (userScore === 8) {
        endMessage = {
            title: "Amazing!",
            html: `You scored ${userScore}/8. Click to share your score on <a href="https://www.facebook.com/" target="_blank" >Facebook</a>!`,
        };
    } else if (userScore > 4) {
        endMessage = {
            title: "Well done!",
            html: `You scored ${userScore}/8. Click to share your score on <a href="https://www.facebook.com/" target="_blank" >Facebook</a>!`,
        };
    } else {
        endMessage = {
            title: "Unlucky!",
            html: `You scored ${userScore}/8. Click to share your score on <a href="https://www.facebook.com/" target="_blank" >Facebook</a>!`,
        };
    }

    Swal.fire(endMessage).then(function () {
        restartQuiz();
    });
}

function restartQuiz() {
    // Clear the existing countdown interval if it exists
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    //Adding a restart quiz function so the user reset the quiz if they wish
    currentQuestionNumber = 0;
    userScore = 0;
    startQuiz();
}

//Countdown function
function startCountdown() {
    //The user will have 120 seconds to answer the questions
    var countdownValue = 120;

    //Displaying the countdown on the webpage
    function displayCountdown() {
        countdown.textContent = `Your countdown: ${countdownValue} seconds`;
    }

    //Countdown reduces by 1 every second
    countdownInterval = setInterval(function () {
        countdownValue--;
        displayCountdown();

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            endQuiz();
        }
    }, 1000);
}

//Running the first function
startQuiz();