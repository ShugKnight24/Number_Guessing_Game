$(document).ready(function(){

	'use strict';

	$('#number-generator').on('click', function(){

		guessNumber();

	});

	function guessNumber() {

	/* Clear the #result ID before running the function */
		$('#result').html('');

	/* Generate a random number */
		var randomNumber = Math.floor(Math.random() * 10) + 1;

	/* Can check the value of the random number in the console */
		console.log(randomNumber)

	/* User's guess */
		var userNumber = getNumber('Please enter a number between 1 and 10');

	/* If user guessed the random number on the first attempt */
		if (userNumber === randomNumber) {

			$('#result').html('Was that a lucky guess? ... You must have read my mind!');

		} else {

			while (userNumber !== randomNumber){

				if (userNumber > randomNumber){

					userNumber = getNumber('Nope! The number I\'m thinking of is lower than what you guessed. Try again.');

				} else if (userNumber < randomNumber){

					userNumber = getNumber('Nope! The number I\'m thinking of is higher than what you guessed. Try again.');

				}

			}

	/* When user eventually gets to the final answer  */
		$('#result').html('Good Work! Way to stick with it!');
		
		}

	}

	/* A function within a function --- Gets a number from the user between 1 and 10 */
	function getNumber(message) {

		var userNumber = parseInt(prompt(message));

		while (!userNumber || userNumber < 1 || userNumber > 10) {

			userNumber = parseInt(prompt('Oops! You\'ll have to enter a number between 1 and 10 to get the program to work.'));

		}

		return userNumber;

	}

});
