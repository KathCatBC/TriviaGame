
var rightCount = 0;  //number questions answered correctly
var wrongCount = 0;  // Count of questions answered incorretly
var timedOutCount = 0;  // number of questions not answered before the clock ran out
var winStatus = "";  // boolean true if answered correctly - false if timed out or wrong
var maxTime = 30;
var counter = 0; // used for the timer
correctAns = ""
var trivia = [ 
			{"question":"Which state was not one of the original 13 colonies?",
			"a0":"Vermont", "a1": "South Carolina",	"a2": "New Hampshire", "a3": "Georgia",
			"correct": "opt0"}, 
			{"question": "What is the top selling duty-free product?", "a0": "Perfume", "a1": "Alcohol", "a2": "Cigarettes", "a3": "Jewelry",
			"correct": "opt2"},
			{"question": "What can horses not do?", "a0": "Fart", "a1": "Cough", "a2": "Sneeze", "a3": "Burp",
			"correct": "opt3"} // object containing all the Q's & A's and right A's
];

var x = load()

//create a function to set up buttons with attributes the first time the program runs



$(document).on('click', ".btn", function() {

	console.log("button clicked")

// 	stop timer

	console.log("button number:  " + $(this).attr("id"))
		//this tells me which button was clicked.  Check it against "correct"
		if($(this).attr("id") === correctAns) {
			console.log("you are right")
			rightCount++
			winStatus = true
		}
		else {
			console.log("WRONG!")
			wrongCount++
	 		winStatus = false
		}
// 	Call function to display right or wrong answer
})





// 	if (winStatus)
// 		display New screen with "correct" or similar message
// 	else //  if time ran out or wrong answer
// 		display new screen with wrong answer and tell the user the correct answer
// }  end of function

// function timechecker {

// 	should be able to run the timer in this event as well a check to make sure there is enough time on the clock
 	
 	// function run() {
 	// 	maxTime = 30 //reset for next question
 	// 	$("#show-timer").html("Remaining Time:  " + maxTime);  // do this here or you won't see 30 seconds
  //     	counter = setInterval(decrement, 1000);
  //   }

  //   function decrement() {
  //     maxTime--;
  //     $("#show-timer").html("Remaining Time:  " + maxTime);
  //     if (maxTime === 0) {;
  //     		clearInterval(counter);
		// 	timedOut = true;
		// 	timedOutCount++;
		// 	winStatus = false;
		// // call function to display right or wrong answer
  //     }
  //   }

// for object length  // all questions in the object
// make sure clock does not start until document is ready

function load() {  //test load
	$(".jumbotron").html(trivia[0].question); 
	$("#opt0").html(trivia[0].a0);
	$("#opt1").html(trivia[0].a1);
	$("#opt2").html(trivia[0].a2);
	$("#opt3").html(trivia[0].a3);
	correctAns = trivia[0].correct;

	// 	start timer  // call timer function  
// end for loop

}




// end of game
// 	display number of correct answers
// 	display number of wrong answers
// 	display number of answers timedOut
// 	Ask if you want to play again
// 		if yes
// 			Call resetAndRestart function




// resetAndRestart function() {
// 	// set appropriate variables back to original values
// 	rightCount = 0 ;
// 	wrongCount = 0 ;
// 	timedOutCount = 0;
//	Reload the start page?  check video to see where I start again
//	or start again at question 1


// }
