const quizData = [
    {
        question: "How old is florine ?",
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: "What is the best Programming Language ?",
        a: "Java",
        b: "Python",
        c: "C",
        d: "JavaScript",
        correct: "d"        
    },{
        question: "Who is the president of US ?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Sandolo",
        d: "Mihai Andrei",
        correct: "b"        
},{
    question: "What does HTML stands for ?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Json object Notation",
    d: "Helicapter Terminal Motorboat",
    correct: "a"        
},{
    question: "What year the JavaScript Launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b"        
}
] 
const answerEl = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
let currentQuiz = 0;
let score = 0;
loadQuiz()
function loadQuiz(){
    deslectAnswer()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;     
}
function getSelected(){    
    let answer = undefined;
    answerEl.forEach((answerEl)=>{
        if(answerEl.checked){
          answer = answerEl.id
        }
    })
    return answer;
}
function deslectAnswer(){
    answerEl.forEach((answerEl)=>{
       answerEl.checked = false;
    })
}
submitBtn.addEventListener("click", () =>{
    const answer = getSelected()    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz()
        }
        else{           
            quiz.innerHTML = "You answered correctly " + score+ " questions out of 5 questions and your score is " + score +"/5"        }
    }        
    
})