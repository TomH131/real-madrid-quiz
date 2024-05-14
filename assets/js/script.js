// Shuffle function
function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//List of questions, their answers and the correct one
let questions = [
    {
        question: "1. Who is the all-time top scorer for Real Madrid?",
        answers: shuffleAnswers(["Cristiano Ronaldo", "Raul", "Alfredo Di Stefano", "Karim Benzema"]),
        correctAnswer: "Cristiano Ronaldo"
    },
    {
        question: "2. How many UEFA Champions League titles has Real Madrid won?",
        answers: shuffleAnswers(["10", "12", "14", "16"]),
        correctAnswer: "14"
    },
    {
        question: "3. Who is the current manager of Real Madrid?",
        answers: shuffleAnswers(["Zinedine Zidane", "Jose Mourinho", "Carlo Ancelotti", "Rafa Benitez"]),
        correctAnswer: "Carlo Ancelotti"
    },
    {
        question: "4. Who is the current captain of Real Madrid?",
        answers: shuffleAnswers(["Nacho", "Sergio Ramos", "Jude Bellingham", "Luka Modric"]),
        correctAnswer: "Nacho"
    },
    {
        question: "5. What time did Sergio Ramos score the famous equalising goal in the 2014 Champions League final?",
        answers: shuffleAnswers(["89:00", "91:54", "92:48", "90:02"]),
        correctAnswer: "92:48"
    },
    {
        question: "6. Who is Real Madrid's most expensive transfer?",
        answers: shuffleAnswers(["Gareth Bale", "Jude Bellingham", "Eden Hazard", "Toni Kroos"]),
        correctAnswer: "Eden Hazard"
    },
    {
        question: "7. What year was Real Madrid founded?",
        answers: shuffleAnswers(["1910", "1898", "1955", "1902"]),
        correctAnswer: "1902"
    },
    {
        question: "8. Who is the current Real Madrid President?",
        answers: shuffleAnswers(["Ramon Calderon", "Florentino Perez", "David Beckham", "Joan Laporta"]),
        correctAnswer: "Florentino Perez"
    }
];

let currentQuestionNumber = 0;
let score = 0;

function displayQuestion() {

    //Making the question show the first question from the array
    let currentQuestion = questions[currentQuestionNumber];
    document.getElementById('question').textContent = currentQuestion.question;

    //Adding in the answers and running the checkAnswer function when they are clicked
    let answersBox = document.getElementById('answers');
    answersBox.innerHTML = "";
    currentQuestion.answers.forEach(function (option) {
        let button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function () {
            checkAnswer(option);
        });
        answersBox.appendChild(button);
    });
}

function checkAnswer(selectedOption) {

    //Increasing the score by 1 every time a correct answer is selected
    let currentQuestion = questions[currentQuestionNumber];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('score').textContent = "Score: " + score + "/8";
    }

    //Moving the screen onto the next question or ending the quiz if it's the last question
    currentQuestionNumber++;
    if (currentQuestionNumber < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    if (score === 8) {
        Swal.fire({
            title: "Amazing!",
            text: `You scored ${score}/8`,
        })
    } else if (score > 4) {
        Swal.fire({
            title: "Well done!",
            text: `You scored ${score}/8`,
        })
    } else {
        Swal.fire({
            title: "Unlucky!",
            text: `You scored ${score}/8`,
        })
    }
};

function restartQuiz() {

    //Adding a restart quiz function so the user can try again after completing their first attempt
    currentQuestionNumber = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: 0/8";
    displayQuestion();
}

document.getElementById('restart-button').addEventListener('click', function () {
    restartQuiz();
});

//Running the function to begin the quiz
displayQuestion();