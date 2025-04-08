const questions = [
    { 
        question: "Qual é o acompanhamento mais típico servido com café em São Paulo?",
        answers: [
            { id: 1, text: "Pão de queijo", correct: true },
            { id: 2, text: "Pudim", correct: false },
            { id: 3, text: "Quindim", correct: false },
            { id: 4, text: "Pão Francês", correct: false },
        ],
    },

    { 
        question: "Qual é o nome da cafeteria localizada na Avenida São Luís, 84?",
        answers: [
            { id: 1, text: "Cafeteria São Luís", correct: false },
            { id: 2, text: "Café+Bar São Luís 84", correct: true },
            { id: 3, text: "Bar são luís", correct :false },
            { id: 4, text: "Cafeteria do São Luís 84", correct: false },
        ],
    },

    { 
        question: "O que é Latte art",
        answers: [
            { id: 1, text: "Técnica feita com leite vaporizado", correct: true },
            { id: 2, text: "Desenhos no Café", correct: false },
            { id: 3, text: "Café com leite", correct: false },
            { id: 4, text: "Exposição de cafés", correct: false },
        ],
    },

    { 
        question: "Quando e onde foi inaugurada a primeira cafeteria de São Paulo?",
        answers: [
            { id: 1, text: "1985", correct: false },
            { id: 2, text: "1960", correct: false },
            { id: 3, text: "1978", correct: false },
            { id: 4, text: "1860", correct: true },
        ],
    },

    { 
        question: "Qual é a maior cafeteria da América Latina localizada em São Paulo?",
        answers: [
            { id: 1, text: "Padaria Brasileira", correct: false },
            { id: 2, text: "Padaria Santa Marta", correct: false },
            { id: 3, text: "Octávio Café", correct: true },
            { id: 4, text: "Starbucks", correct: false },
        ],
    },

    { 
        question: "Qual cafeteria famosa abriu recentemente um espaço temporário no Shopping Iguatemi?",
        answers: [
            { id: 1, text: "Tigrinhos Coffe", correct: false },
            { id: 2, text: "Café Suplicy", correct: false },
            { id: 3, text: "Blue Box Café da Tiffany & Co.", correct: true },
            { id: 4, text: "Coffeshop Sp", correct: false },
        ],
    },

    { 
        question: "Qual país o café foi descoberto?",
        answers: [
            { id: 1, text: "Brasil", correct: false },
            { id: 2, text: "Etiópia", correct: true },
            { id: 3, text: "França", correct: false },
            { id: 4, text: "Arábia Saudita", correct: false },
        ],
    },

    { 
        question: "Qual país é o maior produtor de café?",
        answers: [
            { id: 1, text: "Israel", correct: false },
            { id: 2, text: "Colombia", correct: false },
            { id: 3, text: "Brasil", correct: true },
            { id: 4, text: "Kenya", correct: false },
        ],
    },

    { 
        question: "Qual é a origem do termo: Café expresso?",
        answers: [
            { id: 1, text: "Romano, Expresse coffea", correct: false },
            { id: 2, text: "Italiano, Feito rapidamente", correct: true },
            { id: 3, text: "Francês, Expresse cafe", correct: false },
            { id: 4, text: "Latim, Coffeae expressae", correct: false },
        ],
    },
]
 const questionElement = document.getElementById('question');
 const answerButtons = document.getElementById('answer-buttons');
 const nextButton = document.getElementById('next-btn');

 let currentQuestionIndex = 0;
 let score = 0;  
 
 function startQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML= "Próxima";
     showQuestion();
 }

 function resetState() {
     nextButton.style.display = 'none';
     while (answerButtons.firstChild) {
         answerButtons.removeChild(answerButtons.firstChild);
     }
 }

 function showQuestion() {
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
       const button = document.createElement('button');
       button.innerHTML = answer.text;
       button.dataset.id = answer.id;
       button.classList.add('btn');
       button.addEventListener('click', selectAnswer);
       answerButtons.appendChild(button);
   });

 }

 function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const corretAnswer = answers.filter((answer) => answer.correct === true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == corretAnswer.id;
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });

    nextButton.style.display = 'block';
 }
 function showScore() {
     resetState();
     questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
     nextButton.innerHTML = "Recomeçar";
     nextButton.style.display = 'block';
 }

 function handleNextButton() {
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
       showQuestion();
   } else {
        showScore();
   }     
 }

 nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton ();
    } else {
        startQuiz();
    }
 })
 
 startQuiz();