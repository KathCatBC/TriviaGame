
// var rightNumber = 0;  //number questions answered correctly
// var wrongNumber = 0;  // number of questions answered incorretly
// var timedOutNumber = 0;  // number of questions not answered before the clock ran out
// var maxTime = 30;   // number of seconds allowed to answer a question
// var winStatus = "";  // boolean true if answered correctly - false if timed out or wrong
// var trivia = {};   // object containing all the Q's & A's and right A's



// reset function {
// 	set all variable except object & maxTime back to original values //maxTime does not change
// 	rightNumber = 0 ;
// 	wrongNumber =0 ;
// 	timeOutNumber = 0;
// }



// on hover event {
// 	if mouse is hovering over a button 
// 		highlight button
// }


// on click event {   //probably need to use the document on click like hangman since the buttons will be reloaded with different values
// 	stop timer
// 	if button clicked is the correct button {
// 		rightNumber++
// 		winStatus = true
// 	}
// 	else {
// 		wrongNumber++
// 		winStatus = false
// 	}
// 	Call function to display right or wrong answer
// }


// function to display right or wrong answer
// 	if (winStatus)
// 		display New screen with "correct" or similar message
// 	else //  if time ran out or wrong answer
// 		display new screen with wrong answer and tell the user the correct answer
// }  end of function

// function timechecker {

// 	should be able to run the timer in this event as well a check to make sure there is enough time on the clock



// 	if time >= time allowed
// 		timedOut = true
// 		timeCount++
// 		winStatus = false
// 		call function to display right or wrong answer
// 	} // end of function



// for object length  // all questions in the object
// 	display question  // display in jumbotron
// 	display choice one //display in button 1
// 	display choice two //display in button 2
// 	display choice three //display in button 3
// 	display choice four //display in button 4
// 	start timer  // call timer function  
// end for loop


// end of game
// 	display number of correct answers
// 	display number of wrong answers
// 	display number of answers timedOut
// 	Ask if you want to play again
// 		if yes
// 			Call reset function
