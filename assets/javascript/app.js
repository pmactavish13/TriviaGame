
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
var images = ["assets/images/atacamaDesert.jpg", "assets/images/atlantAirport.jpeg", "assets/images/singapore.jpg", "assets/images/nile.jpg"];
var wrongAnswerCounter = 0;
var answers = [];
var answersShuffled;
var timeToPlay = 10;
var interval;
var timeToShowOutcome = 5;
var intervalResults;

$("#startScreen").show();
$("#timerScreen").hide();
$("#questionScreen").hide();
$("#outcomeScreen").hide();
$("#scoreScreen").hide();

$(document).ready(function () {

    // change screen section to question screen 
    $("#start").click (function run() {
        // change screen section to question screen
        $("#startScreen").hide();
        $("#timerScreen").show();
        $("#questionScreen").show();
        // set timer interval to 1 second   
        interval = setInterval(decrement, 1000);
        debugger
    }); 

    // puts first/next question on screen
    if (!($("#questionScreen").is("show"))) {
        // changes question on screen 
        $("#question").text(triviaQuestions[qAndaCounter]);
        
        //   $("#time").text(timeToPlay)
        console.log(triviaQuestions[qAndaCounter]);
        debugger
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
            var answersShuffled = answers[answerChosen];
            
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
    }

    // activates dynamically created buttons
    // stops game timer and checks answers  
    $(document).on("click", "button.guess", function checkAnswers() {
        debugger
        clearInterval(interval);
        intervalResults = setInterval(increment, 1000);
        debugger
        $("#questionScreen").hide();
        $("#outcomeScreen").show();
        // $("#images").prepend("<img src=""+images[0]+"">"images[0]">");
        // $('').append("<div><img src='"+el[0]+"'>"+el[1]+"</div>"); 
        yourGuess = (this.value);

        if (yourGuess === rightAnswers[qAndaCounter]) {
            $("#outcome").text("You Got it right!!");
            $("#rightAnswer").text(rightAnswers[qAndaCounter])
            correctCounter++;
        } else {
        $("#outcome").text("You got it Wrong");
        $("#ifWrong").text("The correct answer was:");
        $("#rightAnswer").text(rightAnswers[qAndaCounter])
        incorrectCounter++;
        }              
    });
    
    // play timer & what to do in no answer given
    if (!($("#questionScreen").is("show"))) {
        function decrement() {
            timeToPlay--
            $("#time").text(timeToPlay);
            if (timeToPlay === 0) {
                clearInterval(interval);
                intervalResults = setInterval(increment, 1000)
                unansweredCounter++;
                $("#outcome").text("You ran out of time!");
                $("#ifWrong").text("The correct answer was:");
                $("#rightAnswer").text(rightAnswers[qAndaCounter])
                // $("#images").prepend("<img src=""+images[0]+"">"images[0]">");
                // $('').append("<div><img src='"+el[0]+"'>"+el[1]+"</div>");             
                $("#questionScreen").hide();
                $("#outcomeScreen").show();
                debugger         
            };
        };
    };

    // show outcomeScreen for 5 sec. -return to questions or score screen
    if (!($("#outcomeScreen").is("show"))) {
        function increment() {
            timeToShowOutcome--
            console.log(timeToShowOutcome)
            if (timeToShowOutcome === 0)  {
                clearInterval(intervalResults)
                console.log(timeToShowOutcome)    
                qAndaCounter++
                debugger
                if (qAndaCounter > triviaQuestions.length) {
                    $("#timerScreen").hide();
                    $("#questionScreen").hide();
                    $("#outcomeScreen").hide();
                    $("#scoreScreen").show();
                    $("#correctOutcome").text[correctCounter];
                    $("#incorrectOutcome").text[incorrectCounter];
                    $("#unansweredOutcome").text[unansweredCounter];
                    clearInterval(intervalResults)
                    debugger
                }
                if (qAndaCounter < triviaQuestions.length) {
                    wrongAnswerCounter +3;
                    answers = [];
                    answersShuffled;
                    timeToPlay = 10;
                    interval;
                    $("#outcomeScreen").hide();
                    $("#questionScreen").show();
                    clearInterval(intervalResults)
                    debugger                           
                } 
            };
            debugger
        };
    debugger
    };
    
});
