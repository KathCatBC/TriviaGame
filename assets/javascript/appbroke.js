
var rightCount = 0;  //number questions answered correctly
var wrongCount = 0;  // Count of questions answered incorretly
var timedOutCount = 0;  // number of questions not answered before the clock ran out
var winStatus = "";  // boolean true if answered correctly - false if timed out or wrong
var maxTime = 30;
var counter = 0; // used for the timer
var correctAns = ""
var trivia = [ 
			{"question":"Which state was not one of the original 13 colonies?",
			"a0":"Vermont", "a1": "South Carolina",	"a2": "New Hampshire", "a3": "Georgia",
			"correct": "opt0"}, 
			{"question": "What is the top selling duty-free product?", "a0": "Perfume", "a1": "Alcohol", "a2": "Cigarettes", "a3": "Jewelry",
			"correct": "opt2"},
			{"question": "What can horses not do?", "a0": "Fart", "a1": "Cough", "a2": "Sneeze", "a3": "Burp",
			"correct": "opt3"} // object containing all the Q's & A's and right A's
];




	// document.getElementById("correctForm").style.zIndex = "-2";
console.log("just passed vars")

	
		document.getElementById("correctForm").style.zIndex = "-2";


function playtrivia() {	
//create a function to set up buttons with attributes the first time the program runs
		for (i=0; i<triva.length-1; i++) {
			console.log("i = " + i)
	


		// console.log("loading")
		// $(".jumbotron").html(trivia[i].question); 
		// $("#opt0").html(trivia[i].a0);
		// $("#opt1").html(trivia[i].a1);
		// $("#opt2").html(trivia[i].a2);
		// $("#opt3").html(trivia[i].a3);
		// correctAns = trivia[i].correct;


console.log("loading")
	$(".jumbotron").html(trivia[1].question); 
	$("#opt0").html(trivia[1].a0);
	$("#opt1").html(trivia[1].a1);
	$("#opt2").html(trivia[1].a2);
	$("#opt3").html(trivia[1].a3);
	correctAns = trivia[1].correct;



 		maxTime = 30 //reset for next question
 		$("#show-timer").text(maxTime);  // do this here or you won't see 30 seconds
   		counter = setInterval(decrement, 1000);
    

    		function decrement() {
    			console.log("decrement")
	      		maxTime--;
   		   		$("#show-timer").text(maxTime);
      			if (maxTime === 0) {
      				console.log("timed out")
      				clearInterval(counter);
					timedOut = true;
					timedOutCount++;
					winStatus = false;		
   		   		} //end of maxtime if statement
			} // end of decrement function

			$(document).on('click', ".btn", function() {
				clearInterval(counter);

				console.log("button number:  " + $(this).attr("id"))
			//this tells me which button was clicked.  Check it against "correct"
				if($(this).attr("id") === correctAns) {
					console.log("you are right")
					rightCount++
					winStatus = true

// this will need to be moved - here for testing

			
				}  //end of if checking for right anwser
				else {
					console.log("WRONG!")
					wrongCount++
	 				winStatus = false
				}  // end of else statement


				y = rightwrongdisplay(winStatus)

			// 	Call function to display right or wrong answer
	})  // end of on click function



		function rightwrongdisplay(rw) {
			if (rw) {  //rw is a boolean
				document.getElementById("correctForm").style.zIndex = "2";
			}
		}

		

		} ;// end of for loop
	};  // end of function
	
	// $(document).ready(runTrivia(){
$(document).ready(function() {
	var x = playtrivia()

})


// resetAndRestart function() {
// 	// set appropriate variables back to original values
// 	rightCount = 0 ;
// 	wrongCount = 0 ;
// 	timedOutCount = 0;
//	Reload the start page?  check video to see where I start again
//	or start again at question 1


// }
