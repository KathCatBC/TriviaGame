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
var trivia = [ 
			{"question":"Which state was not one of the original 13 colonies?",
			"a0":"Vermont", "a1": "South Carolina",	"a2": "New Hampshire", "a3": "Georgia",
			"correct": "opt0", "correctStr": "Vermont"},
			{"question": "What future superstar posed in the Whitney Museum\'s - Articulate Muscle exhibit in 1976?", "a0":"Lou Ferrigno", "a1": "Hulk Hogan", "a2": "Arnold Schwarzenegger", "a3": "Jack Lalanne", "correct": "opt2", "correctStr": "Arnold Schwarzenegger"},
			{"question": "What NBA star attempted a record 28,307 field goals in regular season games?", "a0":"Karl Malone", "a1": "Michael Jordan", "a2": "Kobe Bryant", "a3": "Kareem Abdul-Jabbar", "correct": "opt3", "correctStr": "Kareen Abdul-Jabbar"},
			{"question": "What Supreme Court Justice performed Rush Limbaugh\'s wedding ceremony?", "a0":"Clarence Thomas", "a1": "Ruth Bader Ginsburg", "a2": "Sandra Day O\'Connor", "a3": "David H. Souter", "correct": "opt0", "correctStr": "Clarence Thomas"},
			{"question": "What Seinfeld character asks for extra MSG at Chinese restaurants", "a0":"Elaine", "a1": "Kramer", "a2": "George", "a3": "Jerry", "correct": "opt1", "correctStr": "Kramer"},
			{"question": "What Canadian province was the site of England\'s first overseas possession?", "a0":"Prince Edward Island", "a1": "British Columbia", "a2": "Nova Scotia", "a3": "Newfoundland", "correct": "opt3", "correctStr": "Newfoundland"},
			{"question": "How many trees are in Alaska's Kotzebue National Forest?", "a0":"over 1,000,000", "a1": "Nobody has ever counted", "a2": "0", "a3": "1", "correct": "opt3", "correctStr": "1"}, 
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
	else {  //game over
		$("#show-correct").text(rightCount);
		$("#show-wrong").text(wrongCount);
		$("#show-timedup").text(timedOutCount);
		$(".jumbotron").hide();
		$(".time-panel-style").hide();
		$(".rightWrongScreen").hide();
		$("#endScreen").show()
	}
}


$(document).on('click', "#buttonRestart", function() {
	rightCount = 0 ;  // reset to original state
	wrongCount = 0 ;
	timedOutCount = 0;
	i = 0;
	load();   //load first question
	$(".time-panel-style").show();
	$("#endScreen").hide();
	$(".jumbotron").show();
	$("#questions").show();
	run();    // start timer & wait for a button click
});


