
//Function for the actual quiz//
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                
                answers.push(
        `<label>
            <input 
                type = "radio" 
                name = "question${questionNumber}" 
                value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>`
                )

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
                );
            }
        }
    )
    quizContainer.innerHTML = output.join('');
}

//variables 
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results')

//basically defines our questions ands answers
const myQuestions = [
    {
        Question: "Who is the all-time leading scorer in the NBA?",
        Answers: {
            a: "Michael Jordan",
            b: "Larry Bird",
            c: "Andre Whitehead",
            d: "Kareem Abdul-Jabbar",
        },
        correctAnswer: "c"
    },
]

//builds the quiz straight away
buildQuiz();

submitButton.addEventListener;
//attaches an event handler (thing that executes an event) to the submitButton