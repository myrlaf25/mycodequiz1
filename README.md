# mycodequiz1
Quiz using Web APIs

https://github.com/myrlaf25/mycodequiz1


https://myrlaf25.github.io/mycodequiz1/.


This assignment is a code quiz. I attempted to create most of my code in Javascript dynamically. I could have used a list of items on HTML and target each individual one but I decided to try to challenge myself and tried doing it by using an array of questions and answers in JS. 

At teh tope of my Javascript I listed most of my variables. I wanted to keep my work as organized as possible. 

Some of my variables:
var startButton = document.querySelector("#start");
var clock = document.querySelector("#timer");

This is the initial portion of my array:
var questions = [
  {
    text: "How is Javascript abbreviated?",
    answers: [" Jav", "JSC", "JS", "SJ"],
    correctAnswer: "JS",
  },

  I added an eventListener that told my program when to make certain functions occur. 
example:
startButton.addEventListener("click", function (e) {

I used this next function to manipulate the timer on this webpage. 

function startTimer() {
  timer = setInterval(function () {
    time--;
    clock.textContent = time;
if(!time){
    alert("You are out of time!")
    clearInterval(timer);      

All of the functions were nested and trigerred the webpage to display teh next question as the user selected an answer. I used the following function to connect the answer button to the answer options.

function displayQuestion() {
  var question = questions[questionIndex];

  questionText.textContent = question.text;
  answers.innerHTML = "";
  
  question.answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answerBtn.onclick= buttonWasClicked
    answers.append(answerBtn);
  });
}

When the timer runs out of time and alert pops up telling the user, he/she ran out of time. 

The site was saved in localStorage.

Thank you for visiting my page and please let me know your feedback. This has been a great learning experience and I need to continue applying the skills I am in the process of learning. 

