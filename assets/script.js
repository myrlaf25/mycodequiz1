//To Do:
// click the start button
var startButton= document.querySelector("#start")
var clock= document.querySelector("#timer")
var time = 500;

//Need an eventListener for the start button
// using the (e) for event
startButton.addEventListener("click", function(e){
//     timer starts 

// call timer
// and
// call displayQuestion

startTimer()
displayQuestion()
});

function startTimer(){
    setInterval(function() {
        time--;
        clock.textContent = time;
        
    }, 1000);
}

function displayQuestion(){
    // hide the text and start buton
    startButton.style.visibility = "hidden"
    // display question 1
    // you can nest another function in here
    // if answerButton is clicked
    // then call nextQuestion()


    nextQuestion()
}

function nextQuestion(){

}
// need to stop the time once it reaches 0
//     I am presented with a question
// answer a question
//     presented with another question
// if question incorrect
//     time subtracted
// if no more questions or the timer reaches 0
//     game over
//         ask for user initials
        // save initial and quiz score
