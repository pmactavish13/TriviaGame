$(document).ready(function () {

var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var qAndaCounter = 0;
var triviaQuestions = ["Where is the driest place on Earth?", 
                      "Which is the busiest airport in the World?", 
                      "Worldwide, what is the most expensive city to live in?", 
                      "What is the longest river in the World?"];

var rightAnswers = ["Atacama Desert, Chile", "Hartsfield-Jackson International, Atlanta, GA", "Singapore", "Nile"];

var wrongAnswers = ["Sahara Desert, North Africa", "Gobi Desert, China and Mongolia", "Death Valley, California and Nevada, U.S.A.", 
                    "Heathrow Airport, London, England", "Charles de Gaulle Airport, Paris, France", "Narita International Airport, Tokyo, Japan", 
                    "Tokyo", "New York City", "London",
                    "Amazon", "Congo", "Yangtze"];
var wrongAnswerCounter = 0;
var answers = [];
var answersShuffled = [];
var images = ["assets/images/atacamaDesert.jpg", "assets/images/atlantAirport.jpeg", "assets/images/singapore.jpg", "assets/images/nile.jpg"];
var timeToPlay = 10;
var interval;
var timeToShowOutcome = 5;
var intervalResults;
 
$("#start").click (function run() {
    // set timer interval to 1 second
    interval = setInterval(decrement, 1000);
    // change screen section to question screen
    $("#startScreen").hide();
    $("#timerScreen").show();
    $("#questionScreen").show();
    $("#outcomeScreen").hide();
    $("#scoreScreen").hide();
    // puts first/next question on screen
    $("#question").text(triviaQuestions[qAndaCounter]);

    console.log(triviaQuestions[qAndaCounter]);
    
    // adds next rightAnswer from rightAnswer array into answers array
    answers.push(rightAnswers[qAndaCounter]);
    
    // adds next 3 wrongAnswers from wrongAnswer array into answers array
    for (var h = 0 + wrongAnswerCounter; h < (3 + wrongAnswerCounter); h++) {
        answers.push(wrongAnswers[h]);    
    };

    // Shuffle Possible Answers / create buttons / append to screen      
    for (var i = answers.length - 1; i >= 0; i--) {        
        // pick a number between 0 and 3, next run 0 and 2, ect
        var answerChosen = Math.floor(Math.random() * (i + 1)); 
        // names answer(index of random#) answersShuffled to be used to create answer buttons
        answersShuffled = answers[answerChosen];
        console.log(answersShuffled) 
        // removes answerChosen from answers array (index to start removing, # of indices to remove)
        answers.splice([answerChosen], 1);
        // create buttons with answers printed on them and = to the value
        answerButtons = $("<button>" + (answersShuffled) + "</button>" +"<br />")
        answerButtons.addClass("guess").val([answersShuffled]);
        answerButtons.css({
            "background": "transparent",  "margin-bottom": "0px",
            "font-size": "26px", "font-family": "'Playfair Display', serif"
        });
        $("#answerButtons").append(answerButtons);
    };

    // activates dynamically created buttons and runs checks answers  
    $(document).on("click", "button.guess", function checkAnswers() {
        clearInterval(interval);
        intervalResults = setInterval(increment, 1000);
        $("#questionScreen").hide();
        $("#outcomeScreen").show();
        // $("#images").prepend("<img src=""+images[0]+"">"images[0]">");
        // $('').append("<div><img src='"+el[0]+"'>"+el[1]+"</div>"); 
        yourGuess = (this.value);
        if (yourGuess === rightAnswers[qAndaCounter]) {
            correctCounter++;
            $("#outcome").text("You Got it right!!");
            $("#rightAnswer").text(rightAnswers[qAndaCounter])
        } else {
            incorrectCounter++;
            $("#outcome").text("You got it Wrong");
            $("#ifWrong").text("The correct answer was:");
            $("#rightAnswer").text(rightAnswers[qAndaCounter])
        }               
    });

// times outcomes shown  & what to do if on-click outcome 
function increment() {
    timeToShowOutcome--
    if ((timeToShowOutcome === 0) && (qAndaCounter < triviaQuestions.length)) {
        clearInterval(intervalResults)
        $("#questionScreen").show();
        $("#outcomeScreen").hide();
//        nextRound();
    } 
    if ((timeToShowOutcome === 0) && (qAndaCounter = triviaQuestions.length)) {
        clearInterval(intervalResults)
        $("#timerScreen").hide();
        $("#questionScreen").hide();
        $("#outcomeScreen").hide();
        $("#scoreScreen").show();
    }

}

function decrement() {
    timeToPlay--
    $("#time").text(timeToPlay);
    if (timeToPlay === 0) {
        clearInterval(interval);
        unansweredCounter++;
        $("#outcome").text("You ran out of time!");
        $("#ifWrong").text("The correct answer was:");
        $("#rightAnswer").text(rightAnswers[qAndaCounter])
        // $("#images").prepend("<img src=""+images[0]+"">"images[0]">");
        // $('').append("<div><img src='"+el[0]+"'>"+el[1]+"</div>");             
        $("#questionScreen").hide();
        $("#outcomeScreen").show();
        intervalResults = setInterval(increment, 1000);        
    };
};    

});
 
// function nextRound() {
//     if 
//     clearInterval(intervalId);
//     console.log(qAndaCounter);
//     console.log(correctCounter);
//     console.log(incorrectCounter);
//     console.log(unansweredCounter);
//     debugger
// }
      
});
