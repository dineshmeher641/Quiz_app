const questions = [
    {
        question: "Who is prime minsiter of India?",
        answers :[
            { text: "Narendra Modi", correct: true},
            { text: "Barak Obama", correct: false},
            { text: "Rahul Gandhi", correct: false},
            { text: "Amit Saha", correct: false},
        ]
    },
    {
        question: "Who is president of USA?",
        answers :[
            { text: "Barak Obama", correct: false},
            { text: "Vladimir Putin", correct: false},
            { text: "Kamala Haris", correct: false},
            { text: "Joe Biden", correct: true},
        ]  
    },
    {
        question: "Who is president of India?",
        answers :[
            { text: "Dropodi Murmu", correct: true},
            { text: "Prativa Patil", correct: false},
            { text: "Jagdeep Dhankad", correct: false},
            { text: "Ramnath Govind", correct: false},
        ]    
    },
    {
        question: "What is financial capital of India?",
        answers :[
            { text: "Dehli", correct: false},
            { text: "Kolkata", correct: false},
            { text: "Pune", correct: false},
            { text: "Mumbai", correct: true},
        ]     
    },
    {
        question: "What is sillicon vally of India?",
        answers :[
            { text: "Bangaluru", correct: true},
            { text: "Kolkata", correct: false},
            { text: "Pune", correct: false},
            { text: "Mumbai", correct: false},
        ]     
    },
    {
        question: "What is temple city of India?",
        answers :[
            { text: "Dehli", correct: false},
            { text: "Kolkata", correct: false},
            { text: "Bhubaneswar", correct: true},
            { text: "Mumbai", correct: false},
        ]     
    }
];

const questionElement = document.getElementById("question")
const answerElement = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")


let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex =0;
    score = 0 ;
    nextBtn.innerHTML = "Next"
    showQuestion();
}

function showQuestion()
{
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    // console.log(questionElement)
    // let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = currentQuestion.question;
    // console.log(currentQuestion.answers)
    // console.log(currentQuestion)

    currentQuestion.answers.forEach((answer )=>{                             //foreach method
        const button = document.createElement("button") 
        button.innerHTML = answer.text;
        // console.log(answer.text)
        button.classList.add("btn")
        answerElement.appendChild(button)
        // console.log(answerElement.appendChild(button))

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none"
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true" 
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++;
    }
    else  {
        selectBtn.classList.add("incorrect")
    }
    // console.log(Array.from(answerElement.children));
    Array.from(answerElement.children).forEach(button=>{                                               //foreach method & from method
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
           
        }
        button.disabled = true
    })
    nextBtn.style.display= "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextBtn.innerHTML = "Play again"
    nextBtn.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } 
    else{
        showScore();
    }
  }

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
startQuiz()
