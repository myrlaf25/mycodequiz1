//To Do:
// click the start button
var startButton = document.querySelector("#start");
var clock = document.querySelector("#timer");
var startHeader = document.querySelector("#startPrompt");
var answer = document.querySelector("#answers");
var score=document.querySelector("#finalScore")
var time = 200;
var questionIndex = 0;


questionContainer.style.display = "none";

var questions = [
  {
    text: "How is Javascript abbreviated?",
    answers: [" Jav", "JSC", "JS", "SJ"],
    correctAnswer: "JS",
  },
  {
    text: "Is Javascript a type of coffee?",
    answers: [" True", "False"],
    correctAnswer: "False",
  },
  {
    text: "Was Javascript  being developed under the name Mocha?",
    answers: [" True", "False"],
    correctAnswer: "True",
  },
  {
    text: "Was Javascript  born in 1995?",
    answers: [" True", "False"],
    correctAnswer: "True",
  },
];

//Need an eventListener for the start button
startButton.addEventListener("click", function (e) {
  //call timer and display fist question
startButton.style.visibility="hidden"
startHeader.style.display="none"
questionContainer.style.display="block"
  startTimer();
  displayQuestion();
});

function startTimer() {
  timer = setInterval(function () {
    time--;
    clock.textContent = time;
if(time<=0)
return;
alert("You are out of time. Game Over!")

  }, 1000);
}

function displayQuestion() {
  var question = questions[questionIndex];

  questionText.textContent = question.text;

  //render the answers, for each button, add an id to it
  // add an id here, of index[i]
  answers.innerHTML = "";
  question.answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);
  });
}

// you can nest another function in here
answers.addEventListener("click", function (e) {
  //call next question

  if (!e.target.matches("button")) return;
  var val = e.target.textContent;
  questionIndex++;

  if (questionIndex === questions.length) {
  } else {
    displayQuestion();
  }
});

// if answerButton is clicked
//     // then call nextQuestion()
//     nextQuestion()

// answers.append(answerBtn1)
//answers.append(answerBtn2)
