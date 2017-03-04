
//button that starts the game..
var count = 30;
var counter = setInterval(function(){
    count--;
	
	console.log(count); 

	if(count<=0) {
		clearInterval(counter)
	}
},1000)


var questions = [
		{
			question:"where is Bujumbura?",
			choices:["Rwanda", "Atlanta", "Britain", "USA"],
			choiceAnswer: 0
		}, 
		{
			question:"Which Airline is based in Atlanta?",
			choices:["United","KLM","Airfrance","Delta"],
			choiceAnswer: 3
		}, 
		{
			question:"Who sang purple rain?",
			choices:["Michael","Dbanj","Prince","U2"],
			choiceAnswer: 2
		}, 
		{
			question:"Where is mount Everest?",
			choices:["Kilimanjaro","Nepal","Chicago","London"],
			choiceAnswer: 1
		}
];

for (var i=0;i<questions.length;i++) {
	console.log(questions[i].question);
	console.log(questions[i].choices);
	var answer = questions[i].choiceAnswer;

	console.log(questions[i].choices[answer]);

	var h3 = $('<h3/>').text(questions[i].question).appendTo("#quiz");

	for (var j=0;j<questions[i].choices.length;j++) { 

		var labelAnswers = $('<label/>').text(questions[i].choices[j]).appendTo("#quiz");

		var inputChoice = $('<input/>').attr({type:'radio',name:'choice',id:'multiple'}).appendTo(labelAnswers);
		// inputno.onclick = function () {alert()}; 
		//document.getElementById("form2").appendChild(inputno);
		//var radio = $('<input>').attr({
		  //type: 'radio', name: 'colorinput', value: '2', id: 'test'
		// var choiceInput = document.createElement('input');
		//radioInput.setAttribute('type', 'radio');
		//radioInput.setAttribute('name', choice);
	}

}


//<label><input type="radio" name="indoor-outdoor"> Indoor</label>

//$('<span/>').text('Hello!').appendTo(div);
var incorrectAnswers = 0;  
var correctAnswers = 0;
$("multiple").on('click', function() {

	if (labelAnswers===answer) {
		correctAnswers++
	}
		else {
			incorrectAnswers++
		}

});

var done =$('<input/>').attr({type:'submit', value:'Done'}).appendTo("#quiz");









//A 60 seconds counter 

//Title of the questions
	//4 answers per question
		//You can only choose one answer
		//A right one.


//when counter hits 0
	// Message All Done!

	//Output to the DOM
		//Correct answers
		//Incorrect answers 
		// Unanswered

		// The Done button 
			//Hides everything when user hits the Done button
//console.log(document.form[0]);