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


$("#startScreen").show();
$(".rightWrongScreen").hide();
$("#questions").hide();
$("#endScreen").hide();
$(".time-panel-style").hide();



$(document).on('click', "#buttonStart", function() {
	load();   //load first question
	$(".time-panel-style").show();
	$("#startScreen").hide();
	$("#questions").show();
	run();    // start timer & wait for a button click
});


$(document).on('click', ".btn", function() {
	clearInterval(counter);
	if($(this).attr("id") === correctNum) {
		winStatus = true;
		rightCount++;
		rightorwrong(winStatus);
	}
	else {
		wrongCount++;
	 	winStatus = false;
	 	$("#show-reason").html("You selected the wrong answer. <br>  The correct answer is:  ");
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
			$("#show-reason").html("Time is up! <br> The correct answer is:  ")
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
			$("#questions").hide();
			$("#correctScreen").show();
		}
		else {
			$("#show-answer").text(trivia[i].correctStr)
			$("#questions").hide();
			$("#wrongScreen").show();
		}
		y = setTimeout(pauseAndReload, 1000*3)
}  // end of rightorwrong

function pauseAndReload() {
	i++
	if (i<trivia.length) {
		load()
		$(".rightWrongScreen").hide();
		$("#questions").show();
		run()
	} 
	else {
		$(".time-panel-style").hide();
		$(".rightWrongScreen").hide();
		$("#endScreen").show()
	}
}


$(document).on('click', "#buttonRestart", function() {
	


	// show stats
	

	rightCount = 0 ;
	wrongCount = 0 ;
	timedOutCount = 0;

	load();   //load first question
	$("#endScreen").hide()
	$("#questions").show()
	run();    // start timer & wait for a button click
});


