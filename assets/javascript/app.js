var rightCount = 0;  //number questions answered correctly
var wrongCount = 0;  // Count of questions answered incorretly
var timedOutCount = 0;  // number of questions not answered before the clock ran out
var winStatus = false;  // boolean true if answered correctly - false if timed out or wrong
var maxTime = 30;
var counter = 0; // used for the timer
var correctAns = ""
var ansIndex = ""
var TimedOut = false
var i = 0 //  loop counter 
var y = ""  //  used to call functions why?
var trivia = [ 
			{"question":"Which state was not one of the original 13 colonies?",
			"a0":"Vermont", "a1": "South Carolina",	"a2": "New Hampshire", "a3": "Georgia",
			"correct": "opt0", "correctStr": "Vermont"}, 
			{"question": "What is the top selling duty-free product?", "a0": "Perfume", "a1": "Alcohol", "a2": "Cigarettes", "a3": "Jewelry",
			"correct": "opt2", "correctStr": "Cigarettes"},
			{"question": "What can horses not do?", "a0": "Fart", "a1": "Cough", "a2": "Sneeze", "a3": "Burp",
			"correct": "opt3", "correctStr": "Burp"} // object containing all the Q's & A's and right A's
];

$("#startScreen").hide()
// $("#startScreen").show()
$("#wrongScreen").hide()
$("#correctScreen").hide()
$("#timeScreen").hide()
$("#questions").show()


load();   //load first question
run();    // start timer & wait for a button click



$(document).on('click', ".btn", function() {

	console.log("button clicked")

	clearInterval(counter);
	
	console.log("button number:  " + $(this).attr("id"))
	console.log("correct = " + correctNum);
		//this tells me which button was clicked.  Check it against "correct"
		if($(this).attr("id") === correctNum) {
			console.log("you are right")
			winStatus = true;
			rightCount++;
			rightorwrong(winStatus);
		}
		else {
			console.log("WRONG!");
			wrongCount++;
	 		winStatus = false;
	 		$("#show-reason").text("You selected the wrong answer");
	 		rightorwrong(winStatus)
		}
}) // end of on click event

	
 	function run() {
 		maxTime = 30 //reset for next question
 		$("#show-timer").text(maxTime);  // do this here or you won't see 30 seconds
      	counter = setInterval(decrement, 1000);
    }

    function decrement() {
    	maxTime--;
      	$("#show-timer").text(maxTime);
      	if (maxTime == 0) {       
      		clearInterval(counter);
			winStatus = false;
			timedOutCount++;
			console.log("time is up!");
			$("#show-reason").text("Time is up!")
			rightorwrong(winStatus);
      	}
    }




function load() {  // load the q&a into the buttons & jumbotron
	$(".jumbotron").text(trivia[i].question); 
	$("#opt0").text(trivia[i].a0);
	$("#opt1").text(trivia[i].a1);
	$("#opt2").text(trivia[i].a2);
	$("#opt3").text(trivia[i].a3);
	correctNum = trivia[i].correct;
}  // end of load function


function rightorwrong(wls){
		if (wls) {  // boolean that is all i need
			console.log("you won");
			$("#questions").hide;
			$("#correctScreen").show;
			// document.getElementById('#questions').style.display = 'none';
			// document.getElementById("#correctScreen").style.display = 'inline';
		}
		else {
			$("#show-answer").text(trivia[i].correctStr)
			$("#questions").hide;
			$("#wrongScreen").show;
		}
		y = setTimeout(pauseAndReload, 1000*5)
}  // end of rightorwrong

function pauseAndReload() {
	i++
	y = load()
	$(".rightWrongScreen").hide;
	$("#questions").show;
	y = run()

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