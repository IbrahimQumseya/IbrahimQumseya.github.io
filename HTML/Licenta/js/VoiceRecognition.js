var btn = document.querySelector('.startRecogniction_id');
var content = document.querySelector('.content');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var grammar = '#JSGF V1.0';
var OnOff;
var recognition = new SpeechRecognition();

var video = document.getElementById("id_video");
var canvas = document.getElementById("canvas_id");
var context = canvas.getContext("2d");

var c = { audio: false, video: { facingMode: { exact: "user" } } };



function on_ok_cam_uab(e) {
	video.srcObject = e;
	const track = e.getVideoTracks()[0];
	track.applyConstraints({
		advanced: [{ torch: true }]
	});
}
function on_fail_cam_uab(e) {
	alert("Failed" + e);
}

recognition.continuous = false;
recognition.lang = 'en-US';
OnOff = false;
btn.addEventListener('click', function () {
	recognition.start();
});

recognition.onresult = function (event) {
	const current = event.resultIndex;

	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoad(transcript);


}



//function FlashLight() {

//	if (transcript == "flash") {
//		if (OnOff == false) {
//			console.log('flash now its of');
//			readOutLoad('flash now it is of');
//			OnOff = true;
//		}
//		else {

//			console.log('flash now its on');
//			readOutLoad('flash now it is on');
//			OnOff = false;
//		}
//	}
//}
function readOutLoad(message) {
	const speech = new SpeechSynthesisUtterance();

	//speech.text = 'I dont know what you are saying !';
	if (message.includes('flash')) {

			//todo: check if camera has a torch

			//let there be light!

				track.applyConstraints({
					advanced: [{ torch: true }]
				});
		
				

	}
	if (message.includes('camera')) {
		navigator.mediaDevices.getUserMedia(c).then(on_ok_cam_uab).catch(on_fail_cam_uab);
		//canvas.drawImage(video,0,0);
	}
	if (message.includes('smile') || message.includes('screenshot')) {
		context.drawImage(video, 0, 0, 400, 400);
	}
	speech.text = message;


	speech.valume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}

recognition.on = function () {
	recognition.stop();
}
