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
var images = ["assets/images/atacamaDesert.jpg", "assets/images/atlantaAirport.jpeg", "assets/images/singapore.jpg", "assets/images/nile.jpg"];
var wrongAnswerCounter = 0;
var timeToPlay = 10;
var interval;
var timeToShowOutcome = 4;
var intervalResults;
var yourGuess;
var answers = [];

$("#startScreen").show();
$("#timerScreen").hide();
$("#questionScreen").hide();
$("#outcomeScreen").hide();
$("#scoreScreen").hide();

$(document).ready(function () {

    // change screen section to question screen 
    $("#start").click(function run() {
        // change screen section to question screen
        $("#startScreen").hide();
        $("#questionScreen").show(); 
        postQuestions();
    });

    // posts questions on screen
    function postQuestions () {
        // resets timers and erases answer buttons
        timeToPlay = 10;
        timeToShowOutcome = 4;
        $("#answerButtons").empty();
        // set timer interval to 1 second   
        interval = setInterval(decrement, 1000);
        $("#timerScreen").show();
        
        console.log(triviaQuestions[qAndaCounter]);

        // initial then new question on screen 
        $("#question").text(triviaQuestions[qAndaCounter]);     
        // adds next rightAnswer from rightAnswer array into answers array
        answers.push(rightAnswers[qAndaCounter]);
        // adds next 3 wrongAnswers from wrongAnswer array into answers array
        for (var h = 0 + wrongAnswerCounter; h < (3 + wrongAnswerCounter); h++) {
            answers.push(wrongAnswers[h]);
        };

        // Shuffle Possible Answers / create buttons / append to screen 
            // Shuffle Possible Answers    
        for (var i = answers.length - 1; i >= 0; i--) {
            // pick a number between 0 and 3, next run 0 and 2, ect
            var answerChosen = Math.floor(Math.random() * (i + 1));
            // names answer(index of random#) answersShuffled to be used to create answer buttons
            var answersShuffled = answers[answerChosen];

             console.log(answersShuffled);

            // removes answerChosen from answers array (index to start removing, # of indices to remove)
            answers.splice([answerChosen], 1);
            // create buttons with answers printed on them and = to the value of answer
            answerButtons = $("<button>" + (answersShuffled) + "</button>" + "<br />");
            answerButtons.addClass("guess").val([answersShuffled]);
            answerButtons.css({
                "background": "transparent", "margin-top": "8px",
                "font-size": "26px", "font-family": "'Playfair Display', serif"
            });   
            $("#answerButtons").append(answerButtons);
        };    
    } 

    // records answer clicked and checks accuracy
    $(document).on("click", "button.guess", function checkAnswers() {
        clearInterval(interval);
        intervalResults = setInterval(increment, 1000);
        increment()
        // basic outcome screen
        $("#questionScreen").hide();
        $("#outcomeScreen").show();
        // add picture of correct answer
        var picture = $("<img>");
        picture.css ({
            "background-image": "url('" + (images[qAndaCounter]) + "')",
            "background-size": "cover", "background-repeat": "no-repeat", "width": "290px", "height": "180px",
            "margin-top": "8px", "border": "solid", "border-color": "#0c0d57", "border-width": "6", "border-radius": "8px",
            "margin-top": "85px", "position": "relative", "top":"50%", "left": "50%",
            "transform": "translate(-50%, -50%)"
        });
        $("#images").html(picture);
        // add text t0 basic outcome screen
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
    function decrement() {
        // countdown timer
        timeToPlay--
        $("#time").text(timeToPlay);
        // if no answer 
        if (timeToPlay === 0) {
            clearInterval(interval);
            // set show outome screen for...
            intervalResults = setInterval(increment, 1000);
            increment ();
            unansweredCounter++;
            // text no answer outcome on screen
            $("#outcome").text("You ran out of time!");
            $("#ifWrong").text("The correct answer was:");
            $("#rightAnswer").text(rightAnswers[qAndaCounter])
            // add picture of correct answer
            var picture = $("<img>");
            picture.css ({
                "background-image": "url('" + (images[qAndaCounter]) + "')",
                "background-size": "cover", "background-repeat": "no-repeat", "width": "290px", "height": "180px", "margin-top": "8px",
                "border": "solid", "border-color": "#0c0d57", "border-width": "6", "border-radius": "8px",
                "margin-top": "85px", "position": "relative", "top":"50%", "left": "50%",
                "transform": "translate(-50%, -50%)"
            });
            $("#images").html(picture); 
            // show outcome screen              
            $("#questionScreen").hide();
            $("#outcomeScreen").show(); 
        };
    };
    

    // show outcomeScreen for 5 sec. - return to questions or score screen
    function increment() {
        timeToShowOutcome--;
        if (timeToShowOutcome === 0) {
            clearInterval(intervalResults);
            qAndaCounter++;
            whatToDoNext();
        }        
    }

    function whatToDoNext() {
        if (qAndaCounter === triviaQuestions.length) {
            $("#timerScreen").hide();
            $("#outcomeScreen").hide();
            $("#scoreScreen").show();
            $("#correctOutcome").text(correctCounter);
            $("#incorrectOutcome").text(incorrectCounter);
            $("#unansweredOutcome").text(unansweredCounter);
        }
        if (qAndaCounter < triviaQuestions.length) {
            wrongAnswerCounter = (qAndaCounter) * 3;
            $("#outcomeScreen").hide();
            $("#questionScreen").show();
            console.log(wrongAnswerCounter);
            postQuestions ();
        } 
    }

    //reset game counter and reatart game
    $("#restart").click(function restart() {
        clearInterval(interval);
        qAndaCounter = 0
        correctCounter = 0;
        incorrectCounter = 0;
        unansweredCounter = 0;
        $("#questionScreen").show();
        $("#scoreScreen").hide();
        postQuestions ()
    });
});

