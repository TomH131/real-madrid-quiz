//List of questions, their answers and the correct one
let questions = [
    {
        question: "Who is the all-time top scorer for Real Madrid?",
        answers: ["Cristiano Ronaldo", "Raul", "Alfredo Di Stefano", "Karim Benzema"],
        correctAnswer: "Cristiano Ronaldo"
    },
    {
        question: "How many UEFA Champions League titles has Real Madrid won?",
        answers: ["10", "12", "14", "16"],
        correctAnswer: "14"
    },
    {
        question: "Who is the current manager of Real Madrid?",
        answers: ["Zinedine Zidane", "Jose Mourinho", "Carlo Ancelotti", "Rafa Benitez"],
        correctAnswer: "Carlo Ancelotti"
    },
    {
        question: "Who is the current captain of Real Madrid?",
        answers: ["Nacho", "Sergio Ramos", "Jude Bellingham", "Luka Modric"],
        correctAnswer: "Nacho"
    },
    {
        question: "What time did Sergio Ramos score the famous equalising goal in the 2014 Champions League final?",
        answers: ["89:00", "91:54", "92:48", "90:02"],
        correctAnswer: "92:48"
    },
    {
        question: "Who is Real Madrid's most expensive transfer?",
        answers: ["Gareth Bale", "Jude Bellingham", "Eden Hazard", "Toni Kroos"],
        correctAnswer: "Eden Hazard"
    },
    {
        question: "What year was Real Madrid founded?",
        answers: ["1910", "1898", "1955", "1902"],
        correctAnswer: "1902"
    },
    {
        question: "Who is the current Real Madrid President?",
        answers: ["Ramon Calderon", "Florentino Perez", "David Beckham", "Joan Laporta"],
        correctAnswer: "Florentino Perez"
    }
];

let currentQuestionNumber = 0;
let score = 0;

function displayQuestion() {

    //Making the question show to the first question from the array
    let currentQuestion = questions[currentQuestionNumber];
    document.getElementById('question').textContent = currentQuestion.question;

    //Adding in the answers and running the checkAnswer function when they are clicked
    let answersBox = document.getElementById('answers');
    currentQuestion.answers.forEach(function (option) {
        let button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function () {
            checkAnswer(option);
        });
        answersBox.appendChild(button);
    });
}

function checkAnswer() {

}

//Running the function to begin the quiz
displayQuestion();
