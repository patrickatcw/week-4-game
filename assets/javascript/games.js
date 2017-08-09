  

  $( document ).ready(function() {
    console.log( "ready!" );

    
    var wins = 0;
    var losses = 0;
    var redbutton, bluebutton, yellowbutton, greenbutton;
    var goal;
    var score;
    var scoreDisp = $("#score");  //these are to grab onto address in the document, or the html
    //var tally;
    var talleyWins = $("#wins");
    var talleyLosses = $("#losses");
    var goalGoal = $("#goal");
    //var didUserWin;

    function init(){
        redbutton = Math.floor(Math.random()*12) +1;        //random value range of 1 to 12
        bluebutton = Math.floor(Math.random()*12) +1;
        yellowbutton = Math.floor(Math.random()*12) +1;
        greenbutton = Math.floor(Math.random()*12) +1;
        goal =  Math.floor((Math.random() * 120) + 19);     //random value range of 19 to 120
        score = 0;
        updateDisplay();
         };

    function updateDisplay(){
        scoreDisp.text(score);
        talleyWins.text(wins);
        talleyLosses.text(losses);
        goalGoal.text(goal);
        };

   /* function updateDom(didUserWin) {                                      //code to apply for updating
    $("#tally").empty();
    if (didUserWin === true) {
        $("#tally").append($("wins").text(" You won!!!"));
        setGame();
        renderMatchingNumber();
    } else if (didUserWin === false) {
        $("#tally").append($("losses").text(" You Lost!!!"));
        setGame();
        renderMatchingNumber();
    };*/

    
     //score equals accumulated button clicks
    //reset after each game
    
      //5 random values or variables       

    console.log ("linked")                                  //using this to make sure the html and js are linked

    $("#redbutton").on("click", function() 
    {executeTurn(redbutton);
    });

     $("#bluebutton").on("click", function() 
    {executeTurn(bluebutton);
    });

      $("#yellowbutton").on("click", function() 
    {executeTurn(yellowbutton);
    });

       $("#greenbutton").on("click", function() 
    {executeTurn(greenbutton);
    });

    function executeTurn(x){
        score+=x;
        if (score > goal) //todo put losing process here
        {
            losses++;
        }
        else if (score===goal)  
        {
            wins++;
        }
        updateDisplay();
    };

    


    init();

    });

       