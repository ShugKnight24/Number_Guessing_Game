var randomNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = parseInt(prompt("Enter a number between 1 and 10"));

    if (randomNumber === userNumber){
      userNumber = parseInt(prompt("Good guess... Did you read my mind?"));
  } else if {
    while (userNumber !== randomNumber){
    if (userNumber > randomNumber){
    userNumber = parseInt(prompt("Nope! The number I'm thinking of is lower than what you guessed. Try again."));
  } else if (userNumber < randomNumber){
    userNumber = parseInt(prompt("Nope! The number I'm thinking of is higher than what you guessed. Try again."));
  } else if (randomNumber === userNumber){
    userNumber = parseInt(prompt("Good Work! Way to stick with it!"));
  } else {
    userNumber = parseInt(prompt("You have enter a number between 1 and 10!"));
  }
}
}
