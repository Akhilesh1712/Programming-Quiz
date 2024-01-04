const quizData = [
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'Hyper Tool Markup Language',
        correct: 'a'
    },
    {
        question: 'Which of these is NOT a programming language?',
        a: 'Java',
        b: 'Python',
        c: 'HTML',
        d: 'C++',
        correct: 'c'
    },
    {
        question: 'What is the output of 2 + "2" in JavaScript?',
        a: '22',
        b: '4',
        c: 'Error',
        d: '24',
        correct: 'a'
    },
    {
        question: 'Which symbol is used for single-line comments in Python?',
        a: '//',
        b: '#',
        c: '--',
        d: '/* */',
        correct: 'b'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Computer Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Colorful Style Sheets',
        d: 'Creative Style Sheets',
        correct: 'b'
    },
    {
        question: 'What is the capital of JavaScript?',
        a: 'J',
        b: 'S',
        c: 'T',
        d: 'Error',
        correct: 'd'
    },
    {
        question: 'Which programming language is used for web development?',
        a: 'Python',
        b: 'Java',
        c: 'Swift',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'What is the result of 3 * "3" in JavaScript?',
        a: '9',
        b: 'Error',
        c: '33',
        d: '6',
        correct: 'a'
    },
    {
        question: 'Which symbol is used for block comments in JavaScript?',
        a: '//',
        b: '/* */',
        c: '--',
        d: '#',
        correct: 'b'
    },
    {
        question: 'Which language is primarily used for machine learning?',
        a: 'Java',
        b: 'Python',
        c: 'C++',
        d: 'Ruby',
        correct: 'b'
    },
    {
        question: 'What does SQL stand for?',
        a: 'Structured Query Language',
        b: 'Strong Question Language',
        c: 'Simple Query Language',
        d: 'Structured Question Language',
        correct: 'a'
    },
    {
        question: 'Which programming language is known for its "Hello World" simplicity?',
        a: 'C++',
        b: 'Python',
        c: 'Java',
        d: 'Ruby',
        correct: 'b'
    },
    {
        question: 'What is the correct way to declare a variable in JavaScript?',
        a: 'let x = 10;',
        b: 'variable x = 10;',
        c: 'x = 10;',
        d: 'int x = 10;',
        correct: 'a'
    },
    {
        question: 'Which of the following is a JavaScript framework?',
        a: 'Django',
        b: 'Flask',
        c: 'React',
        d: 'Ruby on Rails',
        correct: 'c'
    },
    {
        question: 'What does API stand for?',
        a: 'Application Programming Interface',
        b: 'Advanced Programming Interface',
        c: 'Automated Programming Interface',
        d: 'Application Process Integration',
        correct: 'a'
    },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

 let currentQuiz = 0;
 let score = 0;
 loadQuiz();

 function loadQuiz(){
    deselectAnswer();//to yha isse call kar diya 
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 }


function getSelected(){
    
   
    let answer = undefined;
    answerEls.forEach(answerEls =>{
             if(answerEls.checked){
                   answer = answerEls.id;//secleted ans
             }
    })
    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {//age q me point selected na ho
        answerEl.checked = false;
    }); 
}

 submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    if(answer){//ans select kia to kio bhi to vo undefined nhi hoga
        if(answer == quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>your score: ${score}/${quizData.length}</h2> <button onclick="location.reload()">Retake</button>`;
        }
    }
    
 })