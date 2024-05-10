let questions = [
    {
        question: "Who is the all-time top scorer for Real Madrid?",
        options: ["Cristiano Ronaldo", "Raul", "Alfredo Di Stefano", "Karim Benzema"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "How many UEFA Champions League titles has Real Madrid won?",
        options: ["10", "12", "14", "16"],
        answer: "14"
    },
    {
        question: "Who is the current manager of Real Madrid?",
        options: ["Zinedine Zidane", "Jose Mourinho", "Carlo Ancelotti", "Rafa Benitez"],
        answer: "Carlo Ancelotti"
    },
    {
        question: "Who is the current captain of Real Madrid?",
        options: ["Nacho", "Sergio Ramos", "Jude Bellingham", "Luka Modric"],
        answer: "Nacho"
    },
    {
        question: "What time did Sergio Ramos score the famous equalising goal in the 2014 Champions League final?",
        options: ["89:00", "91:54", "92:48", "90:02"],
        answer: "92:48"
    },
    {
        question: "Who is Real Madrid's most expensive transfer?",
        options: ["Gareth Bale", "Jude Bellingham", "Eden Hazard", "Toni Kroos"],
        answer: "Eden Hazard"
    },
    {
        question: "What year was Real Madrid founded?",
        options: ["1910", "1898", "1955", "1902"],
        answer: "1902"
    },
    {
        question: "Who is the current Real Madrid President?",
        options: ["Ramon Calderon", "Florentino Perez", "David Beckham", "Joan Laporta"],
        answer: "Florentino Perez"
    }
];

let currentQuestionNumber = 0;
let score = 0;

function displayQuestion() {
    let currentQuestion = questions[currentQuestionNumber];
    document.getElementById('question').textContent = currentQuestion.question;
    let answersBox = document.getElementById('answers');
    answersBox.innerHTML = "";
    currentQuestion.options.forEach(option => {
        let button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function() {
            checkAnswer(option);         
        });
        answersBox.appendChild(button);
    });
}

function checkAnswer() {

}

displayQuestion();
