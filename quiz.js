var start=document.getElementById("start");
var startPrompt=document.getElementById("startPropmt");
var time=document.getElementById("timer");
var score=document.getElementById("finalScore");
var questions=document.getElementById("questionsText");
var answers=document.getElementById("answers")

var answers=[];
var time = 30;
var questionIndex = 0;

var score= 0;
var counter=0;


questionContainer.style.display = "none";

// nameBox.style.display="none";

var questions = [
  {
    text: "How is Javascript abbreviated?",
    answers: [" Jav", "JSC", "JS", "SJ"],
    correctAnswer: 2,
  },
  {
    text: "Is Javascript a type of coffee?",
    answers: [" True", "False"],
    correctAnswer: 1,
  },
  {
    text: "Was Javascript  being developed under the name Mocha?",
    answers: [" True", "False"],
    correctAnswer: 0,
  },
  {
    text: "Was Javascript  born in 1995?",
    answers: [" True", "False"],
    correctAnswer: 0,
  },
];


function startQuiz(){
    startButton.disabled=true;
    startTimer();
    displayQuestion();
    getScore();
}

function startTimer(){
    timer=setInterval(function(){
        time--;
        timerElement.textContent=time;
        if(time<=0){
            clearInterval(time);
        }
    }, 1000)
}

function setScore(){
    score.textContent=score;
    localStorage.setItem("finalScore", score)
} 

function checkAnswers(answers){
    var answer = false;
    for(var i=0; i<answers; i++){
        if(chosenAnswer[i]=== correctAnswer){
            answer=true;
        }
    }
    answer.textContent=correctAnswer.join("");
}

startButton.addEventListener("click", startQuiz);