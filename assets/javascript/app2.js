$(document).ready(function () {

var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var question = 0;
var triviaQuestions = ["Where is the driest place on Earth?", 
                      "Which is the busiest airport in the World?", 
                      "Worldwide, what is the most expensive city to live in?", 
                      "What is the longest river in the World?"];
var answer = 0;
var rightAnswers = ["Atacama Desert, Chile", "Hartsfield-Jackson International, Atlanta, GA", "Singapore", "Nile"];
var wrong = 0;
var wrongAnswers = ["Sahara Desert, North Africa", "Gobi Desert, China and Mongolia", "Death Valley, California and Nevada, U.S.A.", 
                    "Heathrow Airport, London, England", "Charles de Gaulle Airport, Paris, France", "Narita International Airport, Tokyo, Japan", 
                    "Tokyo", "New York City", "London",
                    "Amazon", "Congo", "Yangtze"];
var yourAnswer = "";
var images = ["assets/images/atacamaDesert.jpg", "assets.images/atlantAirport.jpeg", "assets/images/singapore.jpg", "assets/images/nile.jpg"];
var timeToPlay = 30
var interval;


 
$("#start").click (function run() {
    interval = setInterval(decrement, 1000);
    $("#startScreen").hide();
    $("#timerScreen").show();
    $("#questionScreen").show();
    $("#outcomeScreen").hide();
    $("#scoreScreen").hide();  
});

function decrement() {
   timeToPlay--
    $("#question").text(triviaQuestions[question]);
    console.log(triviaQuestions[question]);
    $("#time").text(timeToPlay);
    if (timeToPlay === 0) {
        $("#outcome").text("You ran out of time!")
        $("#rightAnswer").text("XXXXXXX")
        $("#questionScreen").hide();
        $("#outcomeScreen").show();
        stopPlay();
}

function stopPlay() {
    clearInterval(intervalId);
}
      
run();
}


function myStopFunction() {
    clearTimeout(guess);
}

});



