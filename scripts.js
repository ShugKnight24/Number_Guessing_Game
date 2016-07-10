function guessNumber() {
/* Use Math.random to generate a random number and Math.floor to round it down
Necessary to multiply by 10 and add 1 becuase otherwise 0 would be included in the range
Use parseInt because otherwise you would return a string and userNumber would never equal randomNumber*/
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var userNumber = parseInt(prompt("Enter a number between 1 and 10"));

    if (randomNumber === userNumber) {
      document.getElementById("result").innerText = "Good guess... Did you read my mind?";
    } while (userNumber !== randomNumber) {
        if (userNumber > randomNumber){
        userNumber = parseInt(prompt("Nope! The number I'm thinking of is lower than what you guessed. Try again."));
      } else if (userNumber < randomNumber){
      userNumber = parseInt(prompt("Nope! The number I'm thinking of is higher than what you guessed. Try again."));
      } else if (randomNumber === userNumber){
      document.getElementById("result").innerText ="Good Work! Way to stick with it!";
    } else {
      userNumber = parseInt(prompt("You have enter a number between 1 and 10!"));
    }
  }
}
