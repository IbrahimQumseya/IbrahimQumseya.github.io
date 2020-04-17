var btn = document.querySelector('.startRecogniction_id');
var content = document.querySelector('.content');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var grammar = '#JSGF V1.0';

var recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';

 btn.addEventListener('click', function() {
    recognition.start();
    console.log('Ready to receive.');
}


recognition.onresult = function(event){
	const current = event.resultIndex;
	const time = event.elapsedTime;
	const transcript = event.results[current][0].transcript;
	content.textContent= transcript;
	readOutLoad(transcript);
	console.log(time);
}


function readOutLoad(message){
	const speech = new SpeechSynthesisUtterance();
	
	//speech.text = 'I dont know what you are saying !';
	speech.text = message;
	
	
	speech.valume =1;
	speech.rate=1;
	speech.pitch=1;
	
	window.speechSynthesis.speak(speech);
}

recognition.onspeechend = function () {
    recognition.stop();
}