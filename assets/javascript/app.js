$(document).ready(function () {

var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var qAndaCounter = 0;
var triviaQuestions = ["Where is the driest place on Earth?", 
                      "Which is the busiest airport in the World?", 
                      "Worldwide, what is the most expensive city to live in?", 
                      "What is the longest river in the World?"];
var answers = [];
var rightAnswers = ["Atacama Desert, Chile", "Hartsfield-Jackson International, Atlanta, GA", "Singapore", "Nile"];
var wrongAnswerCounter = 0;
var wrongAnswers = ["Sahara Desert, North Africa", "Gobi Desert, China and Mongolia", "Death Valley, California and Nevada, U.S.A.", 
                    "Heathrow Airport, London, England", "Charles de Gaulle Airport, Paris, France", "Narita International Airport, Tokyo, Japan", 
                    "Tokyo", "New York City", "London",
                    "Amazon", "Congo", "Yangtze"];
var answersShuffled = [];
var yourAnswer = "";
var images = ["assets/images/atacamaDesert.jpg", "assets/images/atlantAirport.jpeg", "assets/images/singapore.jpg", "assets/images/nile.jpg"];
var timeToPlay = 10
var interval;


 
$("#start").click (function run() {
    interval = setInterval(decrement, 1000);
    $("#startScreen").hide();
    $("#timerScreen").show();
    $("#questionScreen").show();
    $("#outcomeScreen").hide();
    $("#scoreScreen").hide();
    
    $("#question").text(triviaQuestions[qAndaCounter]);
    console.log(triviaQuestions[qAndaCounter]);
    
    answers.push(rightAnswers[qAndaCounter]);
    
    // moves 3 answers to wrongAnswer array
    for (var h = 0 + wrongAnswerCounter; h < (3+ wrongAnswerCounter); h++) {
        answers.push(wrongAnswers[h]);
        }

    // Shuffle Possible Answers
    if (answers.length = 4){        
        //runs 4 times
        for (var i = answers.length - 1; i >= 0; i--) {        
        // pick a number between 0 and 3, next run 0 and 2, ect
        var answerChosen = Math.floor(Math.random() * (i + 1)); 
        // puts answer(index of random#) into answersShuffled array
        answersShuffled.push(answers[answerChosen]);
        // removes answerChosen from answers array
        answers.splice([answerChosen], 1);
        };    
    };

    
    if (answersShuffled.length = 4) {
        console.log(answersShuffled)
        for (var j = 0; j < answersShuffled.length; j++); {
        
        // $("ans[j]").append(answersShuffled[j-1]);     
        console.log(answersShuffled[j]);
        
        }
    };
    
});

function decrement() {
    timeToPlay--
    $("#time").text(timeToPlay);
    if (timeToPlay === 0) {
        clearInterval(interval);
        $("#outcome").text("You ran out of time!");
        $("#rightAnswer").text("XXXXXXX");
        // $("#images").prepend("<img src=""+images[0]+"">"images[0]">");
        // $('').append("<div><img src='"+el[0]+"'>"+el[1]+"</div>");             
        
        $("#questionScreen").hide();
        $("#outcomeScreen").show();
        
}

function stopPlay() {
    clearInterval(intervalId);
}
      

}

});



