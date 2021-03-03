//To Do:
// click the start button
var startButton= document.querySelector("#start")
var clock= document.querySelector("#timer")
var time = 50;

//Need an eventListener for the start button
// using the (e) for event
startButton.addEventListener("click", function(e){
//     timer starts 
clock.textContent = time;
setInterval(function() {
    time--;

}, 1000);

});

//     I am presented with a question
// answer a question
//     presented with another question
// if question incorrect
//     time subtracted
// if no more questions or the timer reaches 0
//     game over
//         ask for user initials
        // save initial and quiz score
