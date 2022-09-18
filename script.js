
//function playGuessingGame(x, y) {
//  let numToGuess = x;
//  let totalGuesses = y;
//  let guesses = 0;

function playGuessingGame(numToGuess, totalGuesses = 10){

  let promptText = "Enter a number between 1 and 100.";

  //for loop. Checks to see if the user doesn't enter anything
  //or if the user enters a number that is not a number

  for (guesses = 1; guesses < totalGuesses; guesses++) {
    //check if the user doesn't enter anything.  If they do not enter anything, exist
    let num = prompt(promptText);

    if (num === null) {
      return 0;
    }

    // checks to see if the value they entered is a number
    else if (num === "" || isNaN(num)) {
      promptText = "Please enter a number";
      guesses--;
    } else if (num > numToGuess) {
      guesses++;
      promptText = "Please enter a number";
      userGuess = prompt(num + " is too large. Guess a smaller number.");
    } else if (num < numToGuess) {
      guesses++;
      promptText = "Please enter a number";
      userGuess = prompt(num + " is too small. Guess a smaller number.");
    }  else
      guesses = 0;
      promptText = "You failed to guess the number.";

    return guesses;
  }

  var randomNum = Math.random() * 11 | 0,


  //console.log("The random number is: " + randomNum);
 // totalGuesses = prompt("How many guesses would you like to make?")

  // playGuessingGame(randomNum, totalGuesses)

  // let countAttempts = 0;
  countAttempts = playGuessingGame(7, 8);

  //console.log("You took " + countAttempts + " attempts to guess the number.");
}