var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  //letter choices

    var wins = 0;
    var loses = 0;
    var guessesRemaining = 10;
    var guessessoFar = [];                                          //this may be questionable                                     
    var showGuess = document.getElementById("guess");
    var showguesRemain = document.getElementById("guesremain");
    var showguessoFar = document.getElementById("guessofar");    

    console.log("linked to html showing up in console");            //checks html linking to javascript

    document.onkeyup = function(event) {      
    showGuess.innerHTML = event.key;
    var userGuess = event.key;                             //variable to compute user's guess     
    //showguesRemain.textContent = event.key; 
    //showguessoFar.textContent = event.key;

    guessessoFar.push(userGuess);                                          //This is suppose to capture letters entered by the user   
    computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    showGuess.textContent=userGuess;
    showguesRemain.textContent=guessesRemaining;
    showguessoFar.textContent=guessessoFar.join(", ");


    //conditional statements
    if (userGuess === computerChoices) 
     {
       return wins++;
    }                                       
       
     else if(userGuess !== computerChoices && guessesRemaining >0)
      {
    
        return guessesRemaining--;
    }


    return loses++

      
     };
   

          