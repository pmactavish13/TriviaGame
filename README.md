# TriviaGame
World Trivia
Set up HTML
    Base screen with Trivia Header
        -timer div
        -question, gameplay (correct, wrong and timeout )- changeable text) and score div
JavaScript
   * start game function
   hide all divs but base, timer and question div
    loop through var arrays and put ? text on screen (add event listener to detect choice)
    timer begin on upload of first question
    *at click
        stop time
        add to plays counter
        post matching winning image
        check answer by looping through array
            *if 30 sec passed - show  gameplay div with appropriate added text
                hide ? text
                 add to results counter
           *if correct answer
                show correct div with added text
                hide > text
                add to results counter
            else wrong answer
                hide ? text
                show div & text
                add to results counter
    4 seconds on screen - start #of plays function
        *if plays <4
            loop to next ?
        else
            hide ? div
           show  score div
   wait for click event to restart
    on click
        set all counters to 0
        startgame function
         
        
 
        
